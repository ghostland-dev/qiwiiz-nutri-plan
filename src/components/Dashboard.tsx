import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Calendar, 
  TrendingUp, 
  Heart, 
  Target, 
  ArrowUp, 
  ArrowDown,
  CheckCircle,
  AlertTriangle
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <section id="dashboard" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-secondary text-secondary-foreground">
            Interface Intuitive
          </Badge>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Votre Dashboard
            <span className="block text-primary">Nutritionnel Personnalisé</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Suivez vos progrès, analysez vos données nutritionnelles et recevez des recommandations 
            personnalisées en temps réel.
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Dashboard */}
          <div className="lg:col-span-2 space-y-6">
            {/* Today's Overview */}
            <Card className="medical-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span>Aperçu du Jour</span>
                    </CardTitle>
                    <CardDescription>Vendredi 25 Septembre 2025</CardDescription>
                  </div>
                  <Badge className="health-indicator normal">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Objectifs Atteints
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-success">1,847</div>
                    <div className="text-sm text-muted-foreground">Calories</div>
                    <Progress value={85} className="mt-2" />
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">142g</div>
                    <div className="text-sm text-muted-foreground">Glucides</div>
                    <Progress value={71} className="mt-2" />
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">68g</div>
                    <div className="text-sm text-muted-foreground">Protéines</div>
                    <Progress value={90} className="mt-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Meal Planning */}
            <Card className="medical-card">
              <CardHeader>
                <CardTitle>Plan de Repas - Semaine 39</CardTitle>
                <CardDescription>Optimisé pour diabète type 2 et neuropathie</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gradient-health rounded-lg">
                    <div>
                      <h4 className="font-semibold">Petit-déjeuner</h4>
                      <p className="text-sm text-muted-foreground">Porridge d'avoine aux myrtilles</p>
                    </div>
                    <Badge className="bg-success/10 text-success">
                      IG: 35
                    </Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gradient-nutrition rounded-lg">
                    <div>
                      <h4 className="font-semibold">Déjeuner</h4>
                      <p className="text-sm text-muted-foreground">Saumon grillé, quinoa et légumes verts</p>
                    </div>
                    <Badge className="bg-success/10 text-success">
                      IG: 40
                    </Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gradient-health rounded-lg">
                    <div>
                      <h4 className="font-semibold">Dîner</h4>
                      <p className="text-sm text-muted-foreground">Poulet aux épices, brocolis vapeur</p>
                    </div>
                    <Badge className="bg-success/10 text-success">
                      IG: 25
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Stats */}
          <div className="space-y-6">
            {/* Health Metrics */}
            <Card className="medical-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-destructive" />
                  <span>Indicateurs Santé</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Glycémie moyenne</span>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold">120 mg/dL</span>
                    <ArrowDown className="h-4 w-4 text-success" />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">HbA1c</span>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold">6.8%</span>
                    <ArrowDown className="h-4 w-4 text-success" />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">Poids</span>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold">73.2 kg</span>
                    <ArrowDown className="h-4 w-4 text-success" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Budget Optimization */}
            <Card className="medical-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-accent" />
                  <span>Budget Optimisé</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">38€</div>
                  <div className="text-sm text-muted-foreground">Économisés cette semaine</div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Leclerc</span>
                    <span className="text-success">-15%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Carrefour</span>
                    <span className="text-success">-22%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Intermarché</span>
                    <span className="text-success">-18%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Alerts & Recommendations */}
            <Card className="medical-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-warning" />
                  <span>Recommandations</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-warning/10 rounded-lg border border-warning/20">
                    <p className="text-sm text-warning-foreground">
                      Augmentez vos oméga-3 pour la neuropathie
                    </p>
                  </div>
                  
                  <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                    <p className="text-sm text-primary">
                      Nouvelle promotion saumon chez Leclerc
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/dashboard">
            <Button size="lg" className="bg-gradient-primary hover:bg-primary-hover medical-transition">
              Accéder à Mon Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;