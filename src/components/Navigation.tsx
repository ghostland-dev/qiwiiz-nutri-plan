import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, Heart, LogOut, Settings } from "lucide-react";
import { useAuthContext } from "@/contexts/AuthContext";
import { toast } from "@/hooks/use-toast";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { user, signOut } = useAuthContext();

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      toast({
        title: "Erreur",
        description: "Erreur lors de la déconnexion",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Déconnexion",
        description: "Vous êtes déconnecté",
      });
      navigate('/');
    }
  };

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 medical-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Heart className="h-5 w-5 text-white" />
            </div>
            <span className="font-heading font-bold text-xl text-foreground">
              Qiwiiz <span className="text-primary">Nutrition</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {user ? (
              <>
                <Link to="/dashboard" className="text-muted-foreground hover:text-primary medical-transition">
                  Dashboard
                </Link>
                <Link to="/meal-planning" className="text-muted-foreground hover:text-primary medical-transition">
                  Planification
                </Link>
                <Link to="/shopping-list" className="text-muted-foreground hover:text-primary medical-transition">
                  Courses
                </Link>
                <Link to="/professional" className="text-muted-foreground hover:text-primary medical-transition">
                  Professionnels
                </Link>
              </>
            ) : (
              <>
                <a href="/#features" className="text-muted-foreground hover:text-primary medical-transition">
                  Fonctionnalités
                </a>
                <a href="/#pricing" className="text-muted-foreground hover:text-primary medical-transition">
                  Tarifs
                </a>
              </>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <Link to="/settings">
                  <Button variant="ghost" className="medical-transition">
                    <Settings className="h-4 w-4 mr-2" />
                    Paramètres
                  </Button>
                </Link>
                <Button 
                  onClick={handleSignOut} 
                  variant="outline" 
                  className="medical-transition"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Déconnexion
                </Button>
              </>
            ) : (
              <>
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
              </>
            )}
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
              {user ? (
                <>
                  <Link 
                    to="/dashboard" 
                    className="block px-3 py-2 text-muted-foreground hover:text-primary medical-transition"
                    onClick={() => setIsOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Link 
                    to="/meal-planning" 
                    className="block px-3 py-2 text-muted-foreground hover:text-primary medical-transition"
                    onClick={() => setIsOpen(false)}
                  >
                    Planification
                  </Link>
                  <Link 
                    to="/shopping-list" 
                    className="block px-3 py-2 text-muted-foreground hover:text-primary medical-transition"
                    onClick={() => setIsOpen(false)}
                  >
                    Courses
                  </Link>
                  <Link 
                    to="/professional" 
                    className="block px-3 py-2 text-muted-foreground hover:text-primary medical-transition"
                    onClick={() => setIsOpen(false)}
                  >
                    Professionnels
                  </Link>
                  <div className="flex flex-col space-y-2 pt-4">
                    <Link to="/settings" onClick={() => setIsOpen(false)}>
                      <Button variant="ghost" className="justify-start w-full">
                        <Settings className="h-4 w-4 mr-2" />
                        Paramètres
                      </Button>
                    </Link>
                    <Button 
                      onClick={() => {
                        handleSignOut();
                        setIsOpen(false);
                      }} 
                      variant="outline" 
                      className="justify-start w-full"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Déconnexion
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <a 
                    href="/#features" 
                    className="block px-3 py-2 text-muted-foreground hover:text-primary medical-transition"
                    onClick={() => setIsOpen(false)}
                  >
                    Fonctionnalités
                  </a>
                  <a 
                    href="/#pricing" 
                    className="block px-3 py-2 text-muted-foreground hover:text-primary medical-transition"
                    onClick={() => setIsOpen(false)}
                  >
                    Tarifs
                  </a>
                  <div className="flex flex-col space-y-2 pt-4">
                    <Link to="/login" onClick={() => setIsOpen(false)}>
                      <Button variant="ghost" className="justify-start w-full">
                        Connexion
                      </Button>
                    </Link>
                    <Link to="/medical-profile" onClick={() => setIsOpen(false)}>
                      <Button className="bg-gradient-primary justify-start w-full">
                        Essai Gratuit
                      </Button>
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
