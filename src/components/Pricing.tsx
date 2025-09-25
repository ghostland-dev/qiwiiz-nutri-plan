import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Users, Building } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Essai Gratuit",
      price: "0€",
      period: "14 jours",
      description: "Découvrez toutes les fonctionnalités sans engagement",
      icon: Star,
      color: "muted",
      popular: false,
      features: [
        "Profil médical complet",
        "3 plans de repas personnalisés",
        "Comparaison de prix basique",
        "Suivi nutritionnel limité",
        "Support par email"
      ]
    },
    {
      name: "Personnel",
      price: "9,99€",
      period: "par mois",
      description: "Pour les patients individuels",
      icon: Users,
      color: "primary",
      popular: true,
      features: [
        "Plans de repas illimités",
        "IA nutritionnelle avancée",
        "Comparaison 10+ supermarchés",
        "Tableaux de bord complets",
        "Import de protocoles médicaux",
        "Synchronisation mobile",
        "Support prioritaire",
        "Rapports médicaux PDF"
      ]
    },
    {
      name: "Professionnel",
      price: "49,99€",
      period: "par mois",
      description: "Pour nutritionnistes et médecins",
      icon: Building,
      color: "accent",
      popular: false,
      features: [
        "Gestion multi-patients",
        "API d'intégration HL7/FHIR",
        "Interface professionnelle",
        "Protocoles personnalisés",
        "Analytics avancées",
        "Formation et support",
        "Conformité HDS",
        "Facturation patients"
      ]
    }
  ];

  return (
    <section id="tarifs" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-primary-light text-primary">
            Tarification Transparente
          </Badge>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Choisissez Votre
            <span className="block text-primary">Formule Adaptée</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des solutions accessibles pour tous, des patients individuels aux établissements médicaux. 
            Commencez votre essai gratuit dès aujourd'hui.
          </p>
        </div>

        {/* Plans */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`medical-card relative hover:shadow-medium medical-transition ${
                plan.popular ? 'ring-2 ring-primary shadow-medium' : ''
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  Le Plus Populaire
                </Badge>
              )}
              
              <CardHeader className="text-center pb-6">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center ${
                  plan.color === 'primary' ? 'bg-gradient-primary' :
                  plan.color === 'accent' ? 'bg-accent' :
                  'bg-muted'
                }`}>
                  <plan.icon className={`h-8 w-8 ${
                    plan.color === 'muted' ? 'text-muted-foreground' : 'text-white'
                  }`} />
                </div>
                
                <CardTitle className="text-2xl text-foreground">
                  {plan.name}
                </CardTitle>
                
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </div>
                  <div className="text-muted-foreground">
                    {plan.period}
                  </div>
                </div>
                
                <CardDescription className="text-center">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full medical-transition ${
                    plan.popular ? 'bg-gradient-primary hover:bg-primary-hover' :
                    plan.color === 'accent' ? 'bg-accent hover:bg-accent/90' :
                    ''
                  }`}
                  variant={plan.popular ? 'default' : plan.color === 'accent' ? 'default' : 'outline'}
                  size="lg"
                >
                  {index === 0 ? 'Commencer l\'Essai' : 
                   index === 1 ? 'Choisir Personnel' : 
                   'Contactez-Nous'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enterprise Section */}
        <Card className="medical-card text-center">
          <CardContent className="py-12">
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="w-20 h-20 mx-auto bg-secondary-dark rounded-xl flex items-center justify-center">
                <Building className="h-10 w-10 text-white" />
              </div>
              
              <div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                  Solution Établissement
                </h3>
                <p className="text-muted-foreground">
                  Cliniques, centres de santé, maisons de retraite : 
                  découvrez nos solutions sur mesure avec tarification dédiée.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="outline" className="medical-transition">
                  Demander une Démo
                </Button>
                <Button size="lg" className="bg-secondary-dark hover:bg-secondary-dark/90 medical-transition">
                  Obtenir un Devis
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Money Back Guarantee */}
        <div className="text-center mt-12 space-y-4">
          <div className="flex items-center justify-center space-x-2 text-success">
            <Check className="h-5 w-5" />
            <span className="font-semibold">Garantie Satisfait ou Remboursé 30 jours</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Conformité RGPD • Hébergement HDS • Certification médicale
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;