import { ExternalLink, Globe } from "lucide-react";

const ecosystemSites = [
  { name: "Alaska Listings", url: "https://aklistings.com", description: "Statewide" },
  { name: "Kenai Listings", url: "https://kenailistings.com", description: "Kenai Peninsula" },
  { name: "Tongass Listings", url: "https://tongasslistings.com", description: "Southeast Alaska" },
  { name: "Anchorage Listings", url: "https://anchoragelistings.com", description: "Anchorage Area" },
  { name: "Alaskan Boats", url: "https://alaskanboats.com", description: "Boats & Watercraft" },
  { name: "Alaska Mining", url: "https://alaskaminingequipment.com", description: "Mining Equipment" },
];

const EcosystemSites = () => {
  return (
    <section className="py-16 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-4">
            <Globe className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Network</span>
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">Alaska Listings Network</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Visit our specialized marketplace sites across Alaska</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
          {ecosystemSites.map((site, index) => (
            <a
              key={site.name}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-card border border-border/50 rounded-lg p-4 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs text-muted-foreground truncate">{site.description}</span>
                  <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-1" />
                </div>
                <h3 className="font-display text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {site.name.replace(" Listings", "")}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemSites;
