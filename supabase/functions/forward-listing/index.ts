import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
}

const ECOSYSTEM_ENDPOINT = 'https://jneflbektcqalwhgfuyo.supabase.co/functions/v1/ecosystem-listings'

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const authHeader = req.headers.get('Authorization')
    if (!authHeader?.startsWith('Bearer ')) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_ANON_KEY')!,
      { global: { headers: { Authorization: authHeader } } }
    )

    // Verify user
    const token = authHeader.replace('Bearer ', '')
    const { data: claimsData, error: claimsError } = await supabase.auth.getClaims(token)
    if (claimsError || !claimsData?.claims) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const { listing } = await req.json()

    if (!listing || !listing.id) {
      return new Response(
        JSON.stringify({ error: 'Missing listing data' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    console.log(`Forwarding listing ${listing.id} to ecosystem hub...`)

    // Forward listing to the ecosystem endpoint
    const forwardPayload = {
      source: 'chugach-listings',
      source_url: 'https://chugach-listings.lovable.app',
      listing: {
        id: listing.id,
        title: listing.title,
        description: listing.description,
        price: listing.price,
        category: listing.category,
        region: listing.region,
        images: listing.images || [],
        contact_email: listing.contact_email,
        contact_phone: listing.contact_phone,
        created_at: listing.created_at,
        expires_at: listing.expires_at,
      }
    }

    const response = await fetch(ECOSYSTEM_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(forwardPayload),
    })

    const responseText = await response.text()
    console.log(`Ecosystem response: ${response.status} - ${responseText}`)

    if (!response.ok) {
      console.error(`Failed to forward listing: ${response.status}`)
      // Don't fail the request - the listing was created successfully locally
      return new Response(
        JSON.stringify({ 
          success: true, 
          forwarded: false, 
          message: 'Listing created but ecosystem sync pending' 
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    return new Response(
      JSON.stringify({ success: true, forwarded: true }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error: unknown) {
    console.error('Error forwarding listing:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return new Response(
      JSON.stringify({ error: 'Internal server error', details: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
