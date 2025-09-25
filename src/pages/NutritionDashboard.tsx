import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  TrendingDown, 
  Heart, 
  Activity, 
  Target,
  Calendar,
  Zap,
  AlertCircle,
  CheckCircle,
  BarChart3,
  LineChart,
  ArrowUp,
  ArrowDown
} from "lucide-react";
import { Link } from "react-router-dom";

const NutritionDashboard = () => {
  const healthMetrics = [
    {
      name: "Glycémie Moyenne",
      value: "120 mg/dL",
      change: -8,
      trend: "down",
      target: "< 130 mg/dL",
      status: "good"
    },
    {
      name: "HbA1c",
      value: "6.8%",
      change: -0.3,
      trend: "down", 
      target: "< 7%",
      status: "good"
    },
    {
      name: "Poids",
      value: "73.2 kg",
      change: -1.8,
      trend: "down",
      target: "72 kg",
      status: "progress"
    },
    {
      name: "IMC",
      value: "24.1",
      change: -0.6,
      trend: "down",
      target: "< 25",
      status: "good"
    }
  ];

  const todayNutrition = {
    calories: { consumed: 1847, target: 1800, percentage: 103 },
    carbs: { consumed: 142, target: 200, percentage: 71 },
    protein: { consumed: 68, target: 90, percentage: 76 },
    fiber: { consumed: 22, target: 25, percentage: 88 },
    sodium: { consumed: 1420, target: 2300, percentage: 62 }
  };

  const weeklyTrends = [
    { day: "Lun", glycemia: 118, calories: 1820 },
    { day: "Mar", glycemia: 125, calories: 1890 },
    { day: "Mer", glycemia: 115, calories: 1750 },
    { day: "Jeu", glycemia: 122, calories: 1840 },
    { day: "Ven", glycemia: 119, calories: 1800 },
    { day: "Sam", glycemia: 127, calories: 1920 },
    { day: "Dim", glycemia: 116, calories: 1780 }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-health border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h1 className="text-3xl font-heading font-bold text-foreground">
                Dashboard Nutritionnel
              </h1>
              <p className="text-muted-foreground">
                Suivi personnalisé pour diabète type 2 et neuropathie
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <Badge className="bg-success/10 text-success">
                <CheckCircle className="w-4 h-4 mr-1" />
                Objectifs de la Semaine Atteints
              </Badge>
              <Link to="/meal-planning">
                <Button className="bg-gradient-primary hover:bg-primary-hover medical-transition">
                  <Calendar className="mr-2 h-4 w-4" />
                  Planifier Repas
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Health Metrics Overview */}
        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          {healthMetrics.map((metric, index) => (
            <Card key={index} className="medical-card animate-fade-in hover:shadow-medium medical-transition">
              <CardHeader className="pb-2">
                <CardDescription className="text-xs">{metric.name}</CardDescription>
                <CardTitle className="text-2xl font-bold flex items-center space-x-2">
                  <span>{metric.value}</span>
                  {metric.trend === 'down' ? (
                    <ArrowDown className="h-4 w-4 text-success" />
                  ) : (
                    <ArrowUp className="h-4 w-4 text-destructive" />
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Objectif: {metric.target}</span>
                    <span className={`font-medium ${
                      metric.change < 0 ? 'text-success' : 'text-destructive'
                    }`}>
                      {metric.change > 0 ? '+' : ''}{metric.change}
                    </span>
                  </div>
                  <Badge className={`w-full justify-center ${
                    metric.status === 'good' ? 'bg-success/10 text-success' :
                    metric.status === 'progress' ? 'bg-warning/10 text-warning' :
                    'bg-destructive/10 text-destructive'
                  }`}>
                    {metric.status === 'good' ? 'Objectif Atteint' :
                     metric.status === 'progress' ? 'En Progrès' :
                     'Attention Requise'}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Dashboard */}
          <div className="lg:col-span-2 space-y-6">
            {/* Today's Nutrition */}
            <Card className="medical-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-primary" />
                  <span>Suivi Nutritionnel - Aujourd'hui</span>
                </CardTitle>
                <CardDescription>Vendredi 25 Septembre 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {Object.entries(todayNutrition).map(([key, data]) => (
                    <div key={key} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium capitalize">
                          {key === 'carbs' ? 'Glucides' : 
                           key === 'protein' ? 'Protéines' :
                           key === 'fiber' ? 'Fibres' :
                           key === 'sodium' ? 'Sodium' : 'Calories'}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {data.consumed} / {data.target} 
                          {key === 'calories' ? ' kcal' : 
                           key === 'sodium' ? ' mg' : ' g'}
                        </span>
                      </div>
                      <Progress 
                        value={Math.min(data.percentage, 100)} 
                        className={`h-2 ${
                          data.percentage > 100 ? 'bg-destructive/20' : 
                          data.percentage >= 80 ? 'bg-success/20' : 'bg-warning/20'
                        }`}
                      />
                      <div className="flex items-center justify-between text-xs">
                        <span className={`font-medium ${
                          data.percentage > 100 ? 'text-destructive' :
                          data.percentage >= 80 ? 'text-success' : 'text-warning'
                        }`}>
                          {data.percentage}% de l'objectif
                        </span>
                        {data.percentage > 100 && (
                          <Badge variant="destructive" className="text-xs">
                            Dépassement
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Weekly Trends */}
            <Card className="medical-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <LineChart className="h-5 w-5 text-accent" />
                  <span>Tendances Hebdomadaires</span>
                </CardTitle>
                <CardDescription>Évolution de vos indicateurs clés</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="glycemia" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="glycemia">Glycémie</TabsTrigger>
                    <TabsTrigger value="calories">Calories</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="glycemia" className="space-y-4">
                    <div className="h-64 flex items-end justify-between space-x-2">
                      {weeklyTrends.map((day, index) => (
                        <div key={index} className="flex-1 flex flex-col items-center space-y-2">
                          <div 
                            className={`w-full rounded-t-md ${
                              day.glycemia <= 120 ? 'bg-success' :
                              day.glycemia <= 140 ? 'bg-warning' : 'bg-destructive'
                            }`}
                            style={{ 
                              height: `${Math.max((day.glycemia - 80) / 80 * 200, 20)}px`
                            }}
                          />
                          <div className="text-center">
                            <div className="text-xs font-medium">{day.glycemia}</div>
                            <div className="text-xs text-muted-foreground">{day.day}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="text-center text-sm text-muted-foreground">
                      Glycémie moyenne (mg/dL) par jour
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="calories" className="space-y-4">
                    <div className="h-64 flex items-end justify-between space-x-2">
                      {weeklyTrends.map((day, index) => (
                        <div key={index} className="flex-1 flex flex-col items-center space-y-2">
                          <div 
                            className="w-full bg-primary rounded-t-md"
                            style={{ 
                              height: `${Math.max((day.calories - 1500) / 500 * 200, 20)}px`
                            }}
                          />
                          <div className="text-center">
                            <div className="text-xs font-medium">{day.calories}</div>
                            <div className="text-xs text-muted-foreground">{day.day}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="text-center text-sm text-muted-foreground">
                      Apport calorique par jour (kcal)
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="medical-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-accent" />
                  <span>Actions Rapides</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/meal-planning">
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="mr-2 h-4 w-4" />
                    Nouveau Plan de Repas
                  </Button>
                </Link>
                <Link to="/medical-profile">
                  <Button variant="outline" className="w-full justify-start">
                    <Heart className="mr-2 h-4 w-4" />
                    Mettre à jour Profil
                  </Button>
                </Link>
                <Button variant="outline" className="w-full justify-start">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Générer Rapport
                </Button>
              </CardContent>
            </Card>

            {/* Recommendations */}
            <Card className="medical-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertCircle className="h-5 w-5 text-warning" />
                  <span>Recommandations</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-success/10 rounded-lg border border-success/20">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-success">Excellent contrôle glycémique</p>
                      <p className="text-xs text-muted-foreground">Continuez vos habitudes actuelles</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 bg-warning/10 rounded-lg border border-warning/20">
                  <div className="flex items-start space-x-2">
                    <AlertCircle className="h-4 w-4 text-warning mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-warning">Augmentez les oméga-3</p>
                      <p className="text-xs text-muted-foreground">Bénéfique pour la neuropathie</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <div className="flex items-start space-x-2">
                    <TrendingUp className="h-4 w-4 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-primary">Nouvelle promotion</p>
                      <p className="text-xs text-muted-foreground">Saumon -20% chez Leclerc</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Weekly Summary */}
            <Card className="medical-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="h-5 w-5 text-destructive" />
                  <span>Résumé Semaine</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Repas planifiés</span>
                  <Badge className="bg-success/10 text-success">21/21</Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">Objectifs atteints</span>
                  <Badge className="bg-success/10 text-success">6/7 jours</Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">Économies réalisées</span>
                  <Badge className="bg-accent/10 text-accent">38€</Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">Score nutritionnel</span>
                  <Badge className="bg-primary/10 text-primary">92/100</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionDashboard;