import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Heart, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-nutrition.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero min-h-[90vh] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                <Shield className="w-4 h-4 mr-2" />
                Solution Médicale Certifiée
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
                Nutrition
                <span className="block text-accent">Personnalisée</span>
                <span className="block">pour Votre Santé</span>
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
                Qiwiiz Nutrition combine l'intelligence artificielle et l'expertise médicale 
                pour créer des plans alimentaires adaptés à vos pathologies. Diabète, neuropathie, 
                allergies : optimisez votre nutrition et votre budget.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 py-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">95%</div>
                <div className="text-sm text-white/80">Amélioration Glycémique</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">-40%</div>
                <div className="text-sm text-white/80">Réduction Budget Alimentaire</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">24/7</div>
                <div className="text-sm text-white/80">Suivi Intelligent</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg medical-transition group"
              >
                Commencer l'Essai Gratuit
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 medical-transition" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg medical-transition"
              >
                Découvrir la Démo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-6">
              <div className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-accent" />
                <span className="text-sm text-white/80">Certifié HDS</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-accent" />
                <span className="text-sm text-white/80">Conforme RGPD</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-accent" />
                <span className="text-sm text-white/80">Validé Médicalement</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Interface Qiwiiz Nutrition - Planification nutritionnelle intelligente"
                className="rounded-2xl shadow-strong w-full h-auto"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white rounded-full opacity-10 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;