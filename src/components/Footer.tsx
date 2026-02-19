import { Link } from "react-router-dom";
import { Anchor, Mail, FileText, Shield, Scale } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Anchor className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-display text-base font-bold text-foreground">Chugach Listings</span>
            </Link>
            <p className="text-muted-foreground text-xs leading-relaxed mb-4">
              The Chugach region's trusted marketplace for Valdez, Cordova, and Prince William Sound.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-accent">$10 per listing • 60 days</span>
            </div>
          </div>

          {/* Network */}
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-3">Our Network</h4>
            <ul className="space-y-1.5">
              <li><a href="https://aklistings.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-xs">Alaska Listings (Statewide)</a></li>
              <li><a href="https://kenailistings.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-xs">Kenai Listings</a></li>
              <li><a href="https://tongasslistings.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-xs">Tongass Listings</a></li>
              <li><a href="https://anchoragelistings.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-xs">Anchorage Listings</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-3">Quick Links</h4>
            <ul className="space-y-1.5">
              <li><Link to="/browse" className="text-muted-foreground hover:text-primary transition-colors text-xs">Browse Listings</Link></li>
              <li><Link to="/post-listing" className="text-muted-foreground hover:text-primary transition-colors text-xs">Post a Listing</Link></li>
              <li><Link to="/categories" className="text-muted-foreground hover:text-primary transition-colors text-xs">Categories</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-3">Legal</h4>
            <ul className="space-y-1.5">
              <li><Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors text-xs flex items-center gap-2"><FileText className="w-3 h-3" />Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors text-xs flex items-center gap-2"><Shield className="w-3 h-3" />Privacy Policy</Link></li>
              <li><Link to="/disclaimer" className="text-muted-foreground hover:text-primary transition-colors text-xs flex items-center gap-2"><Scale className="w-3 h-3" />Disclaimer</Link></li>
              <li><a href="mailto:support@chugachlistings.com" className="text-muted-foreground hover:text-primary transition-colors text-xs flex items-center gap-2"><Mail className="w-3 h-3" />Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-muted-foreground text-xs text-center md:text-left">
              © {new Date().getFullYear()} Alaska Listings LLC. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs text-center md:text-right max-w-md">
              Alaska Listings LLC is a listing service only. We do not participate in, endorse, or guarantee any transactions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
