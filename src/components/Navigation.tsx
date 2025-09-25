import { Button } from "@/components/ui/button";
import { Menu, Heart, Shield, Users } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 medical-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <span className="font-heading font-bold text-xl text-foreground">
                Qiwiiz <span className="text-primary">Nutrition</span>
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#fonctionnalites" className="text-muted-foreground hover:text-primary medical-transition">
                Fonctionnalités
              </a>
              <a href="#dashboard" className="text-muted-foreground hover:text-primary medical-transition">
                Dashboard
              </a>
              <a href="#professionnels" className="text-muted-foreground hover:text-primary medical-transition">
                Professionnels
              </a>
              <a href="#tarifs" className="text-muted-foreground hover:text-primary medical-transition">
                Tarifs
              </a>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="medical-transition">
                Connexion
              </Button>
            </Link>
            <Link to="/medical-profile">
              <Button className="bg-gradient-primary hover:bg-primary-hover medical-transition">
                Essai Gratuit
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="medical-transition"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              <a href="#fonctionnalites" className="block px-3 py-2 text-muted-foreground hover:text-primary medical-transition">
                Fonctionnalités
              </a>
              <a href="#dashboard" className="block px-3 py-2 text-muted-foreground hover:text-primary medical-transition">
                Dashboard
              </a>
              <a href="#professionnels" className="block px-3 py-2 text-muted-foreground hover:text-primary medical-transition">
                Professionnels
              </a>
              <a href="#tarifs" className="block px-3 py-2 text-muted-foreground hover:text-primary medical-transition">
                Tarifs
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Link to="/login">
                  <Button variant="ghost" className="justify-start w-full">
                    Connexion
                  </Button>
                </Link>
                <Link to="/medical-profile">
                  <Button className="bg-gradient-primary justify-start w-full">
                    Essai Gratuit
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;