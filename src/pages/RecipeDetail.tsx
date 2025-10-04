import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Clock, Users, ChefHat, Heart, ArrowLeft, Printer, Share2 } from "lucide-react";

const RecipeDetail = () => {
  const recipe = {
    name: "Saumon Grillé au Quinoa et Légumes Verts",
    image: "/placeholder.svg",
    prepTime: "15 min",
    cookTime: "20 min",
    servings: 2,
    difficulty: "Facile",
    glycemicIndex: 40,
    calories: 485,
    nutrients: {
      proteins: 38,
      carbs: 42,
      fats: 18,
      fiber: 8
    }
  };

  const ingredients = [
    { name: "Filets de saumon", quantity: "2 x 150g", category: "Protéines" },
    { name: "Quinoa", quantity: "100g (sec)", category: "Féculents" },
    { name: "Brocolis", quantity: "200g", category: "Légumes" },
    { name: "Haricots verts", quantity: "150g", category: "Légumes" },
    { name: "Citron", quantity: "1", category: "Autres" },
    { name: "Huile d'olive", quantity: "2 c. à soupe", category: "Matières grasses" },
    { name: "Ail", quantity: "2 gousses", category: "Aromates" },
    { name: "Herbes de Provence", quantity: "1 c. à café", category: "Épices" },
  ];

  const steps = [
    "Rincez le quinoa et faites-le cuire dans 200ml d'eau bouillante pendant 15 minutes.",
    "Pendant ce temps, préchauffez votre poêle avec 1 c. à soupe d'huile d'olive.",
    "Assaisonnez les filets de saumon avec sel, poivre et herbes de Provence.",
    "Faites cuire le saumon 4-5 minutes de chaque côté à feu moyen.",
    "Dans une autre casserole, faites cuire les brocolis et haricots verts à la vapeur pendant 8 minutes.",
    "Faites revenir l'ail haché dans l'huile d'olive restante, puis ajoutez les légumes cuits.",
    "Pressez le jus de citron sur le saumon avant de servir.",
    "Dressez le quinoa, les légumes et le saumon dans une assiette. Bon appétit !"
  ];

  const medicalBenefits = [
    { title: "Oméga-3", description: "Excellents pour la neuropathie et la santé cardiovasculaire" },
    { title: "Index Glycémique Bas", description: "Contrôle optimal de la glycémie" },
    { title: "Fibres", description: "Favorisent la satiété et régulent la digestion" },
    { title: "Protéines complètes", description: "Maintien de la masse musculaire" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <Link to="/meal-planning">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour au Plan
              </Button>
            </Link>
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-heading font-bold text-foreground mb-2">
                  {recipe.name}
                </h1>
                <div className="flex items-center space-x-4 text-muted-foreground">
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {recipe.prepTime} + {recipe.cookTime}
                  </span>
                  <span className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {recipe.servings} personnes
                  </span>
                  <span className="flex items-center">
                    <ChefHat className="h-4 w-4 mr-1" />
                    {recipe.difficulty}
                  </span>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon">
                  <Printer className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Recipe Image */}
              <Card className="medical-card overflow-hidden">
                <img 
                  src={recipe.image} 
                  alt={recipe.name}
                  className="w-full h-96 object-cover"
                />
              </Card>

              {/* Ingredients */}
              <Card className="medical-card">
                <CardHeader>
                  <CardTitle>Ingrédients</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {ingredients.map((ingredient, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-gradient-health rounded-lg">
                        <div>
                          <p className="font-semibold text-foreground">{ingredient.name}</p>
                          <p className="text-sm text-muted-foreground">{ingredient.category}</p>
                        </div>
                        <p className="font-medium text-primary">{ingredient.quantity}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Instructions */}
              <Card className="medical-card">
                <CardHeader>
                  <CardTitle>Préparation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {steps.map((step, idx) => (
                      <div key={idx} className="flex space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                          {idx + 1}
                        </div>
                        <p className="text-foreground pt-1">{step}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Nutritional Info */}
              <Card className="medical-card">
                <CardHeader>
                  <CardTitle>Valeurs Nutritionnelles</CardTitle>
                  <p className="text-sm text-muted-foreground">Par portion</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center pb-4 border-b border-border">
                    <div className="text-3xl font-bold text-primary mb-1">{recipe.calories}</div>
                    <div className="text-sm text-muted-foreground">Calories</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Protéines</span>
                        <span className="font-semibold">{recipe.nutrients.proteins}g</span>
                      </div>
                      <Progress value={76} />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Glucides</span>
                        <span className="font-semibold">{recipe.nutrients.carbs}g</span>
                      </div>
                      <Progress value={70} />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Lipides</span>
                        <span className="font-semibold">{recipe.nutrients.fats}g</span>
                      </div>
                      <Progress value={36} />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Fibres</span>
                        <span className="font-semibold">{recipe.nutrients.fiber}g</span>
                      </div>
                      <Progress value={64} />
                    </div>
                  </div>

                  <Badge className="w-full justify-center bg-success/10 text-success py-2">
                    IG: {recipe.glycemicIndex} (Bas)
                  </Badge>
                </CardContent>
              </Card>

              {/* Medical Benefits */}
              <Card className="medical-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Heart className="h-5 w-5 text-destructive" />
                    <span>Bénéfices Santé</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {medicalBenefits.map((benefit, idx) => (
                    <div key={idx} className="p-3 bg-gradient-nutrition rounded-lg">
                      <h4 className="font-semibold text-foreground mb-1">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RecipeDetail;
