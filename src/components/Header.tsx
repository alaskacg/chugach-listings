import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, MapPin, User, LogOut, ChevronDown, Anchor } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import { useAuth } from "@/contexts/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, isAdmin, signOut } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-glass">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center logo-animated">
                <Anchor className="w-4 h-4 text-primary-foreground anchor-icon" />
              </div>
              <span className="font-display text-base font-bold text-foreground group-hover:text-primary transition-colors">Chugach Listings</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-4">
              <Link to="/browse" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Browse
              </Link>
              <Link to="/categories" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Categories
              </Link>
              <a href="https://aklistings.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Statewide
              </a>
              
              <ThemeToggle />

              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <User className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem asChild>
                      <Link to="/my-listings" className="cursor-pointer text-sm">My Listings</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/post-listing" className="cursor-pointer text-sm">Post a Listing</Link>
                    </DropdownMenuItem>
                    {isAdmin && (
                      <>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                          <Link to="/admin" className="cursor-pointer text-sm">Admin Dashboard</Link>
                        </DropdownMenuItem>
                      </>
                    )}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={signOut} className="cursor-pointer text-destructive text-sm">
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <div className="flex items-center gap-2">
                  <Link to="/login">
                    <Button variant="ghost" size="sm">Sign In</Button>
                  </Link>
                  <Link to="/post-listing">
                    <Button variant="chugach" size="sm">
                      Post a Listing
                    </Button>
                  </Link>
                </div>
              )}
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <button
                className="p-2 text-foreground"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-card border-t border-border animate-slide-up max-h-[80vh] overflow-y-auto">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            <Link to="/browse" className="text-sm text-muted-foreground hover:text-foreground py-2" onClick={() => setMobileMenuOpen(false)}>
              Browse All
            </Link>
            <Link to="/categories" className="text-sm text-muted-foreground hover:text-foreground py-2" onClick={() => setMobileMenuOpen(false)}>
              Categories
            </Link>
            <a href="https://aklistings.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground py-2">
              Statewide Site
            </a>
            
            {user ? (
              <>
                {isAdmin && (
                  <Link to="/admin" className="text-sm text-primary hover:text-primary/80 py-2" onClick={() => setMobileMenuOpen(false)}>
                    Admin Dashboard
                  </Link>
                )}
                <Link to="/my-listings" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" size="sm" className="w-full justify-start">My Listings</Button>
                </Link>
                <Link to="/post-listing" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="chugach" size="sm" className="w-full mt-2">Post a Listing</Button>
                </Link>
                <Button variant="ghost" size="sm" className="justify-start text-destructive mt-2" onClick={() => { signOut(); setMobileMenuOpen(false); }}>
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" size="sm" className="w-full">Sign In</Button>
                </Link>
                <Link to="/post-listing" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="chugach" size="sm" className="w-full">Post a Listing</Button>
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
