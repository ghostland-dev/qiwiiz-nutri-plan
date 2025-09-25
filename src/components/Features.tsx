import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  ShoppingCart, 
  Activity, 
  FileText, 
  Users, 
  Zap,
  Target,
  TrendingDown,
  Shield
} from "lucide-react";
import dashboardIcon from "@/assets/dashboard-icon.jpg";
import shoppingIcon from "@/assets/shopping-icon.jpg";

const Features = () => {
  const mainFeatures = [
    {
      icon: Brain,
      title: "IA Nutritionnelle Avancée",
      description: "Algorithmes adaptatifs basés sur vos contraintes médicales spécifiques",
      badge: "Intelligence Artificielle",
      color: "primary",
      image: dashboardIcon
    },
    {
      icon: ShoppingCart,
      title: "Optimisation des Courses",
      description: "Comparaison temps réel sur 10+ enseignes avec géolocalisation",
      badge: "Économies Garanties",
      color: "accent",
      image: shoppingIcon
    },
    {
      icon: Activity,
      title: "Suivi Nutritionnel",
      description: "Tableaux de bord interactifs et rapports médicaux détaillés",
      badge: "Monitoring 24/7",
      color: "success"
    }
  ];

  const medicalFeatures = [
    {
      icon: Target,
      title: "Contrôle Glycémique",
      description: "Adaptation automatique selon votre diabète et index glycémique"
    },
    {
      icon: Shield,
      title: "Neuropathie Support",
      description: "Nutriments spécifiques : vitamines B, antioxydants, anti-inflammatoires"
    },
    {
      icon: FileText,
      title: "Import Protocoles",
      description: "Reconnaissance OCR de vos prescriptions médicales"
    }
  ];

  const professionalFeatures = [
    {
      icon: Users,
      title: "Multi-Patients",
      description: "Gestion de portfolios pour nutritionnistes"
    },
    {
      icon: Zap,
      title: "API Médicale",
      description: "Intégration HL7/FHIR avec dossiers patients"
    },
    {
      icon: TrendingDown,
      title: "Réduction Coûts",
      description: "Jusqu'à 40% d'économies sur le budget alimentaire"
    }
  ];

  return (
    <section id="fonctionnalites" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-primary-light text-primary">
            Fonctionnalités Avancées
          </Badge>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Une Solution Complète pour Votre
            <span className="block text-primary">Nutrition Médicale</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez comment Qiwiiz Nutrition révolutionne la prise en charge nutritionnelle 
            des pathologies chroniques grâce à l'intelligence artificielle.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {mainFeatures.map((feature, index) => (
            <Card key={index} className="medical-card group hover:shadow-medium medical-transition border-0">
              <CardHeader className="text-center pb-4">
                {feature.image && (
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl overflow-hidden">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                {!feature.image && (
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                )}
                <Badge className={`mb-2 ${
                  feature.color === 'primary' ? 'bg-primary-light text-primary' :
                  feature.color === 'accent' ? 'bg-accent-light text-accent' :
                  'bg-success/10 text-success'
                }`}>
                  {feature.badge}
                </Badge>
              </CardHeader>
              <CardContent className="text-center">
                <CardTitle className="text-xl mb-3 text-foreground">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Medical Specializations */}
        <div className="mb-16">
          <h3 className="text-2xl font-heading font-bold text-center mb-8 text-foreground">
            Spécialisations Médicales
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {medicalFeatures.map((feature, index) => (
              <Card key={index} className="medical-card hover:shadow-soft medical-transition">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Professional Features */}
        <div>
          <h3 className="text-2xl font-heading font-bold text-center mb-8 text-foreground">
            Pour les Professionnels de Santé
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {professionalFeatures.map((feature, index) => (
              <Card key={index} className="medical-card hover:shadow-soft medical-transition">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary-dark rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;