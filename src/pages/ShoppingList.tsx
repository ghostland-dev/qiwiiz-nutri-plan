import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, MapPin, TrendingDown, Store, CheckCircle } from "lucide-react";

const ShoppingList = () => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const supermarkets = [
    { name: "Leclerc", total: 45.80, savings: 12.30, distance: "1.2 km", badge: "Meilleur Prix" },
    { name: "Carrefour", total: 48.20, savings: 9.90, distance: "0.8 km" },
    { name: "Intermarché", total: 51.50, savings: 6.60, distance: "2.5 km" },
  ];

  const items = [
    { id: "1", category: "Protéines", name: "Saumon frais (400g)", leclerc: 8.90, carrefour: 9.50, intermarche: 9.80 },
    { id: "2", category: "Protéines", name: "Poulet fermier (600g)", leclerc: 7.20, carrefour: 7.50, intermarche: 7.90 },
    { id: "3", category: "Légumes", name: "Brocolis (500g)", leclerc: 2.30, carrefour: 2.50, intermarche: 2.40 },
    { id: "4", category: "Légumes", name: "Courgettes (1kg)", leclerc: 2.80, carrefour: 2.90, intermarche: 3.10 },
    { id: "5", category: "Féculents", name: "Quinoa bio (500g)", leclerc: 4.50, carrefour: 4.80, intermarche: 5.20 },
    { id: "6", category: "Féculents", name: "Flocons d'avoine (1kg)", leclerc: 3.20, carrefour: 3.40, intermarche: 3.50 },
    { id: "7", category: "Fruits", name: "Myrtilles (250g)", leclerc: 3.90, carrefour: 4.20, intermarche: 4.30 },
    { id: "8", category: "Fruits", name: "Pommes (1kg)", leclerc: 2.50, carrefour: 2.60, intermarche: 2.80 },
    { id: "9", category: "Produits laitiers", name: "Yaourt nature 0% (x8)", leclerc: 2.40, carrefour: 2.60, intermarche: 2.70 },
    { id: "10", category: "Autres", name: "Huile d'olive extra vierge (500ml)", leclerc: 6.80, carrefour: 7.20, intermarche: 7.50 },
    { id: "11", category: "Autres", name: "Amandes non salées (200g)", leclerc: 4.20, carrefour: 4.50, intermarche: 4.80 },
  ];

  const categories = Array.from(new Set(items.map(item => item.category)));

  const toggleItem = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-3xl font-heading font-bold text-foreground mb-2">
                  Liste de Courses
                </h1>
                <p className="text-muted-foreground">
                  Semaine du 23-29 Septembre • 11 articles
                </p>
              </div>
              <Button className="bg-gradient-primary">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Exporter PDF
              </Button>
            </div>
          </div>

          {/* Supermarket Comparison */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {supermarkets.map((market, idx) => (
              <Card key={idx} className={`medical-card ${idx === 0 ? 'border-primary' : ''}`}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="flex items-center space-x-2">
                      <Store className="h-5 w-5 text-primary" />
                      <span>{market.name}</span>
                    </CardTitle>
                    {market.badge && (
                      <Badge className="bg-success/10 text-success">
                        {market.badge}
                      </Badge>
                    )}
                  </div>
                  <CardDescription className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>{market.distance}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm text-muted-foreground">Total</span>
                      <span className="text-2xl font-bold text-foreground">{market.total}€</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-success/10 rounded-lg">
                      <span className="text-sm font-medium text-success">Économie</span>
                      <span className="text-lg font-bold text-success flex items-center">
                        <TrendingDown className="h-4 w-4 mr-1" />
                        {market.savings}€
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Shopping List */}
          <Card className="medical-card">
            <CardHeader>
              <CardTitle>Articles par Catégorie</CardTitle>
              <CardDescription>Comparez les prix et cochez vos achats</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue={categories[0]} className="w-full">
                <TabsList className="grid w-full grid-cols-5">
                  {categories.map(cat => (
                    <TabsTrigger key={cat} value={cat}>{cat}</TabsTrigger>
                  ))}
                </TabsList>
                
                {categories.map(category => (
                  <TabsContent key={category} value={category} className="space-y-4 mt-6">
                    {items.filter(item => item.category === category).map(item => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between p-4 bg-gradient-health rounded-lg border border-border"
                      >
                        <div className="flex items-center space-x-4">
                          <Checkbox
                            checked={checkedItems[item.id] || false}
                            onCheckedChange={() => toggleItem(item.id)}
                          />
                          <div>
                            <h4 className="font-semibold text-foreground">{item.name}</h4>
                            <p className="text-sm text-muted-foreground">{category}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-6">
                          <div className="text-center">
                            <p className="text-xs text-muted-foreground">Leclerc</p>
                            <p className="font-bold text-primary">{item.leclerc}€</p>
                          </div>
                          <div className="text-center">
                            <p className="text-xs text-muted-foreground">Carrefour</p>
                            <p className="font-semibold">{item.carrefour}€</p>
                          </div>
                          <div className="text-center">
                            <p className="text-xs text-muted-foreground">Intermarché</p>
                            <p className="font-semibold">{item.intermarche}€</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="mt-8 flex justify-center space-x-4">
            <Link to="/meal-planning">
              <Button variant="outline">Modifier le Plan</Button>
            </Link>
            <Button className="bg-gradient-primary">
              <CheckCircle className="mr-2 h-4 w-4" />
              Valider les Courses
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ShoppingList;
