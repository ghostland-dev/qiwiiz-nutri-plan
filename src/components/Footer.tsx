import { Heart, Mail, Phone, MapPin, Shield, FileText } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <span className="font-heading font-bold text-xl">
                Qiwiiz <span className="text-accent">Nutrition</span>
              </span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Révolutionnez votre nutrition médicale avec l'intelligence artificielle. 
              Solutions personnalisées pour diabète, neuropathie et pathologies chroniques.
            </p>
            <div className="flex items-center space-x-4 text-white/60">
              <Shield className="h-5 w-5" />
              <span className="text-sm">Certifié HDS • Conforme RGPD</span>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Solutions</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-accent medical-transition">Nutrition Diabète</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent medical-transition">Support Neuropathie</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent medical-transition">Allergies Alimentaires</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent medical-transition">Optimisation Budget</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent medical-transition">Interface Professionnelle</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-accent medical-transition">Centre d'Aide</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent medical-transition">Documentation API</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent medical-transition">Formation Professionnels</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent medical-transition">Webinaires</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent medical-transition">Communauté</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-white/80">contact@qiwiiz-nutrition.fr</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-white/80">+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-1" />
                <span className="text-white/80">
                  123 Avenue de la Santé<br />
                  75013 Paris, France
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-white/60 text-sm">
              © 2024 Qiwiiz Nutrition. Tous droits réservés.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-white/80 hover:text-accent medical-transition flex items-center space-x-1">
                <FileText className="h-4 w-4" />
                <span>Mentions Légales</span>
              </a>
              <a href="#" className="text-white/80 hover:text-accent medical-transition flex items-center space-x-1">
                <Shield className="h-4 w-4" />
                <span>Confidentialité</span>
              </a>
              <a href="#" className="text-white/80 hover:text-accent medical-transition">
                CGU
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;