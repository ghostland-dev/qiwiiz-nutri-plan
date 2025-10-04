import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, Download, Share2, TrendingUp, TrendingDown, Calendar } from "lucide-react";

const Reports = () => {
  const reports = [
    { 
      id: 1, 
      title: "Rapport Nutritionnel Hebdomadaire", 
      period: "16-22 Sept 2025", 
      type: "Hebdomadaire",
      status: "Disponible",
      highlights: "Objectifs atteints à 95%"
    },
    { 
      id: 2, 
      title: "Analyse Glycémique Mensuelle", 
      period: "Août 2025", 
      type: "Mensuel",
      status: "Disponible",
      highlights: "Amélioration de 12%"
    },
    { 
      id: 3, 
      title: "Bilan Nutritionnel Trimestriel", 
      period: "Juin-Août 2025", 
      type: "Trimestriel",
      status: "Disponible",
      highlights: "Perte de 3.2kg"
    },
  ];

  const metrics = [
    { name: "Adhérence au plan", current: "92%", previous: "87%", trend: "up" },
    { name: "Glycémie moyenne", current: "118 mg/dL", previous: "125 mg/dL", trend: "down" },
    { name: "HbA1c", current: "6.8%", previous: "7.2%", trend: "down" },
    { name: "Poids", current: "72.8 kg", previous: "73.5 kg", trend: "down" },
    { name: "Calories moyennes", current: "1,847 kcal", previous: "1,920 kcal", trend: "down" },
    { name: "Budget courses", current: "142€", previous: "168€", trend: "down" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-heading font-bold text-foreground mb-2">
                Rapports et Analyses
              </h1>
              <p className="text-muted-foreground">
                Visualisez vos progrès et exportez vos données de santé
              </p>
            </div>
            <div className="flex space-x-2">
              <Select defaultValue="30">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7">7 derniers jours</SelectItem>
                  <SelectItem value="30">30 derniers jours</SelectItem>
                  <SelectItem value="90">3 derniers mois</SelectItem>
                  <SelectItem value="365">12 derniers mois</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList>
              <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
              <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
              <TabsTrigger value="health">Santé</TabsTrigger>
              <TabsTrigger value="budget">Budget</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              {/* Key Metrics */}
              <Card className="medical-card">
                <CardHeader>
                  <CardTitle>Indicateurs Clés</CardTitle>
                  <CardDescription>Évolution de vos principaux indicateurs ce mois</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    {metrics.map((metric, idx) => (
                      <div key={idx} className="p-4 bg-gradient-health rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-muted-foreground">{metric.name}</span>
                          {metric.trend === "up" ? (
                            <TrendingUp className="h-4 w-4 text-success" />
                          ) : (
                            <TrendingDown className="h-4 w-4 text-success" />
                          )}
                        </div>
                        <div className="text-2xl font-bold text-foreground mb-1">{metric.current}</div>
                        <div className="text-xs text-muted-foreground">vs. {metric.previous}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Reports */}
              <Card className="medical-card">
                <CardHeader>
                  <CardTitle>Rapports Disponibles</CardTitle>
                  <CardDescription>Téléchargez ou partagez vos rapports</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {reports.map((report) => (
                      <div key={report.id} className="flex items-center justify-between p-4 bg-gradient-nutrition rounded-lg border border-border">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 bg-primary/10 rounded-lg">
                            <FileText className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">{report.title}</h3>
                            <div className="flex items-center space-x-3 mt-1">
                              <span className="text-sm text-muted-foreground flex items-center">
                                <Calendar className="h-3 w-3 mr-1" />
                                {report.period}
                              </span>
                              <Badge variant="outline">{report.type}</Badge>
                            </div>
                            <p className="text-sm text-primary mt-1">{report.highlights}</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            PDF
                          </Button>
                          <Button variant="outline" size="sm">
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Nutrition Tab */}
            <TabsContent value="nutrition">
              <Card className="medical-card">
                <CardHeader>
                  <CardTitle>Analyse Nutritionnelle Détaillée</CardTitle>
                  <CardDescription>Répartition et évolution de vos apports</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Rapport détaillé disponible</h3>
                    <p className="text-muted-foreground mb-4">Téléchargez votre analyse nutritionnelle complète</p>
                    <Button className="bg-gradient-primary">
                      <Download className="mr-2 h-4 w-4" />
                      Télécharger le Rapport
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Health Tab */}
            <TabsContent value="health">
              <Card className="medical-card">
                <CardHeader>
                  <CardTitle>Rapport de Santé</CardTitle>
                  <CardDescription>Évolution de vos indicateurs médicaux</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Rapport santé disponible</h3>
                    <p className="text-muted-foreground mb-4">Partagez avec votre médecin</p>
                    <div className="flex justify-center space-x-2">
                      <Button className="bg-gradient-primary">
                        <Download className="mr-2 h-4 w-4" />
                        Télécharger
                      </Button>
                      <Button variant="outline">
                        <Share2 className="mr-2 h-4 w-4" />
                        Partager
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Budget Tab */}
            <TabsContent value="budget">
              <Card className="medical-card">
                <CardHeader>
                  <CardTitle>Analyse Budgétaire</CardTitle>
                  <CardDescription>Suivi de vos dépenses alimentaires</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Rapport budgétaire disponible</h3>
                    <p className="text-muted-foreground mb-4">Économies et optimisations</p>
                    <Button className="bg-gradient-primary">
                      <Download className="mr-2 h-4 w-4" />
                      Télécharger l'Analyse
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Reports;
