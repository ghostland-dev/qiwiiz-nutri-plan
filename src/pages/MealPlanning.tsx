import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Users, 
  TrendingDown, 
  Heart,
  ChefHat,
  ShoppingCart,
  Target,
  Zap,
  CheckCircle,
  RefreshCw
} from "lucide-react";
import { Link } from "react-router-dom";

const MealPlanning = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [planDuration, setPlanDuration] = useState("7");
  const [isGenerating, setIsGenerating] = useState(false);

  const weekPlan = [
    {
      day: "Lundi",
      date: "25 Sept",
      meals: [
        {
          type: "Petit-déjeuner",
          name: "Porridge d'avoine aux myrtilles",
          calories: 320,
          carbs: 45,
          protein: 12,
          glycemicIndex: 35,
          time: "08:00"
        },
        {
          type: "Déjeuner", 
          name: "Saumon grillé, quinoa et légumes verts",
          calories: 485,
          carbs: 38,
          protein: 35,
          glycemicIndex: 40,
          time: "12:30"
        },
        {
          type: "Collation",
          name: "Yaourt grec aux noix",
          calories: 180,
          carbs: 8,
          protein: 15,
          glycemicIndex: 25,
          time: "16:00"
        },
        {
          type: "Dîner",
          name: "Poulet aux épices, brocolis vapeur",
          calories: 380,
          carbs: 15,
          protein: 42,
          glycemicIndex: 25,
          time: "19:30"
        }
      ]
    },
    {
      day: "Mardi",
      date: "26 Sept",
      meals: [
        {
          type: "Petit-déjeuner",
          name: "Œufs brouillés, avocat, pain complet",
          calories: 385,
          carbs: 28,
          protein: 22,
          glycemicIndex: 30,
          time: "08:00"
        },
        {
          type: "Déjeuner",
          name: "Salade de lentilles, feta et légumes",
          calories: 425,
          carbs: 35,
          protein: 20,
          glycemicIndex: 35,
          time: "12:30"
        },
        {
          type: "Collation",
          name: "Pomme et amandes",
          calories: 165,
          carbs: 18,
          protein: 5,
          glycemicIndex: 30,
          time: "16:00"
        },
        {
          type: "Dîner",
          name: "Cabillaud, courgettes farcies",
          calories: 320,
          carbs: 12,
          protein: 38,
          glycemicIndex: 20,
          time: "19:30"
        }
      ]
    }
  ];

  const generateNewPlan = () => {
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-health border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h1 className="text-3xl font-heading font-bold text-foreground">
                Planification des Repas
              </h1>
              <p className="text-muted-foreground">
                Plans nutritionnels optimisés pour diabète type 2 et neuropathie
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <Badge className="bg-success/10 text-success">
                <Target className="w-4 h-4 mr-1" />
                Objectifs Glycémiques Respectés
              </Badge>
              <Button 
                onClick={generateNewPlan}
                disabled={isGenerating}
                className="bg-gradient-primary hover:bg-primary-hover medical-transition"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Génération...
                  </>
                ) : (
                  <>
                    <Zap className="mr-2 h-4 w-4" />
                    Nouveau Plan IA
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Controls */}
          <div className="space-y-6">
            {/* Plan Duration */}
            <Card className="medical-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CalendarIcon className="h-5 w-5 text-primary" />
                  <span>Durée du Plan</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Select value={planDuration} onValueChange={setPlanDuration}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7">7 jours</SelectItem>
                    <SelectItem value="14">14 jours</SelectItem>
                    <SelectItem value="30">30 jours</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Calendar */}
            <Card className="medical-card">
              <CardHeader>
                <CardTitle>Calendrier</CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="medical-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-destructive" />
                  <span>Résumé Nutritionnel</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Calories/jour</span>
                  <span className="font-semibold">1,365</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">IG Moyen</span>
                  <span className="font-semibold text-success">31</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Protéines</span>
                  <span className="font-semibold">114g</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Fibres</span>
                  <span className="font-semibold">28g</span>
                </div>
              </CardContent>
            </Card>

            {/* Shopping List */}
            <Card className="medical-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <ShoppingCart className="h-5 w-5 text-accent" />
                  <span>Liste de Courses</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Link to="/shopping-list">
                  <Button variant="outline" className="w-full medical-transition">
                    Générer la Liste
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="weekly" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="weekly">Vue Hebdomadaire</TabsTrigger>
                <TabsTrigger value="daily">Vue Quotidienne</TabsTrigger>
                <TabsTrigger value="recipes">Recettes</TabsTrigger>
              </TabsList>

              <TabsContent value="weekly" className="space-y-6">
                {weekPlan.map((dayPlan, dayIndex) => (
                  <Card key={dayIndex} className="medical-card animate-fade-in">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center space-x-2">
                          <span>{dayPlan.day}</span>
                          <Badge variant="outline">{dayPlan.date}</Badge>
                        </CardTitle>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>1,365 kcal</span>
                          <span>IG: 31</span>
                          <CheckCircle className="h-4 w-4 text-success" />
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {dayPlan.meals.map((meal, mealIndex) => (
                          <div key={mealIndex} className="p-4 bg-gradient-card rounded-lg border hover:shadow-soft medical-transition">
                            <div className="space-y-3">
                              <div className="flex items-center justify-between">
                                <Badge variant="secondary" className="text-xs">
                                  {meal.type}
                                </Badge>
                                <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                                  <Clock className="h-3 w-3" />
                                  <span>{meal.time}</span>
                                </div>
                              </div>
                              
                              <h4 className="font-semibold text-sm leading-tight">
                                {meal.name}
                              </h4>
                              
                              <div className="space-y-1">
                                <div className="flex justify-between text-xs">
                                  <span className="text-muted-foreground">Calories</span>
                                  <span className="font-medium">{meal.calories}</span>
                                </div>
                                <div className="flex justify-between text-xs">
                                  <span className="text-muted-foreground">Glucides</span>
                                  <span className="font-medium">{meal.carbs}g</span>
                                </div>
                                <div className="flex justify-between text-xs">
                                  <span className="text-muted-foreground">Protéines</span>
                                  <span className="font-medium">{meal.protein}g</span>
                                </div>
                              </div>
                              
                              <Badge 
                                className={`w-full justify-center text-xs ${
                                  meal.glycemicIndex <= 30 ? 'bg-success/10 text-success' :
                                  meal.glycemicIndex <= 50 ? 'bg-warning/10 text-warning' :
                                  'bg-destructive/10 text-destructive'
                                }`}
                              >
                                IG: {meal.glycemicIndex}
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="daily" className="space-y-6">
                <Card className="medical-card">
                  <CardHeader>
                    <CardTitle>Planning Détaillé - Lundi 25 Septembre</CardTitle>
                    <CardDescription>
                      Horaires optimisés pour la gestion glycémique
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {weekPlan[0].meals.map((meal, index) => (
                        <div key={index} className="flex items-start space-x-4 p-4 bg-gradient-health rounded-lg">
                          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                            <ChefHat className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1 space-y-2">
                            <div className="flex items-center justify-between">
                              <h3 className="font-semibold">{meal.name}</h3>
                              <Badge variant="outline">{meal.time}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {meal.type} • {meal.calories} kcal • IG: {meal.glycemicIndex}
                            </p>
                            <div className="flex items-center space-x-4 text-sm">
                              <span>Glucides: {meal.carbs}g</span>
                              <span>Protéines: {meal.protein}g</span>
                            </div>
                          </div>
                          <Button size="sm" variant="outline">
                            Voir Recette
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="recipes">
                <Card className="medical-card">
                  <CardHeader>
                    <CardTitle>Bibliothèque de Recettes</CardTitle>
                    <CardDescription>
                      Recettes adaptées à vos contraintes médicales
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        {
                          name: "Porridge d'avoine aux myrtilles",
                          category: "Petit-déjeuner",
                          time: "10 min",
                          difficulty: "Facile",
                          glycemicIndex: 35
                        },
                        {
                          name: "Saumon grillé, quinoa et légumes",
                          category: "Déjeuner",
                          time: "25 min", 
                          difficulty: "Moyen",
                          glycemicIndex: 40
                        },
                        {
                          name: "Poulet aux épices, brocolis vapeur",
                          category: "Dîner",
                          time: "20 min",
                          difficulty: "Facile",
                          glycemicIndex: 25
                        },
                        {
                          name: "Yaourt grec aux noix",
                          category: "Collation",
                          time: "5 min",
                          difficulty: "Facile",
                          glycemicIndex: 25
                        }
                      ].map((recipe, index) => (
                        <div key={index} className="p-4 border rounded-lg hover:shadow-soft medical-transition">
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <Badge variant="secondary">{recipe.category}</Badge>
                              <Badge className={
                                recipe.glycemicIndex <= 30 ? 'bg-success/10 text-success' :
                                recipe.glycemicIndex <= 50 ? 'bg-warning/10 text-warning' :
                                'bg-destructive/10 text-destructive'
                              }>
                                IG: {recipe.glycemicIndex}
                              </Badge>
                            </div>
                            
                            <h3 className="font-semibold">{recipe.name}</h3>
                            
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <span>{recipe.time}</span>
                              <span>•</span>
                              <span>{recipe.difficulty}</span>
                            </div>
                            
                            <Button variant="outline" size="sm" className="w-full">
                              Voir la Recette
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealPlanning;