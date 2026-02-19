import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Gift, Clock, Image } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 chugach-bg" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-chugach-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Post Your Listing Today
          </h2>
          
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Reach buyers in Valdez, Cordova, and Prince William Sound. No commissions—just verify your email and start selling.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-glass rounded-2xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 mb-4">
                <Gift className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">Easy to Post</h3>
              <p className="text-muted-foreground text-sm">Simple listing process</p>
            </div>
            
            <div className="bg-glass rounded-2xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">60 Day Duration</h3>
              <p className="text-muted-foreground text-sm">Your listing stays live</p>
            </div>
            
            <div className="bg-glass rounded-2xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-chugach-ice/10 mb-4">
                <Image className="w-6 h-6 text-chugach-ice" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">Up to 5 Images</h3>
              <p className="text-muted-foreground text-sm">Showcase your item with photos</p>
            </div>
          </div>

          <Link to="/post-listing">
            <Button variant="gold" size="xl" className="group">
              Post Your Listing
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
