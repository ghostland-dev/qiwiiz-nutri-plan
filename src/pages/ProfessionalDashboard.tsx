import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Users, UserPlus, TrendingUp, FileText, AlertCircle, CheckCircle, Search } from "lucide-react";

const ProfessionalDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const stats = [
    { title: "Patients Actifs", value: "24", change: "+3 ce mois", icon: Users, color: "text-primary" },
    { title: "Plans Créés", value: "156", change: "+12 cette semaine", icon: FileText, color: "text-success" },
    { title: "Taux d'Adhérence", value: "87%", change: "+5% vs. mois dernier", icon: TrendingUp, color: "text-accent" },
    { title: "Alertes Actives", value: "3", change: "Nécessite attention", icon: AlertCircle, color: "text-warning" },
  ];

  const patients = [
    { id: 1, name: "Marie Dubois", initials: "MD", age: 57, pathology: "Diabète Type 2", lastVisit: "2025-09-20", status: "success", adherence: 92 },
    { id: 2, name: "Jean Martin", initials: "JM", age: 64, pathology: "Neuropathie", lastVisit: "2025-09-18", status: "warning", adherence: 78 },
    { id: 3, name: "Sophie Laurent", initials: "SL", age: 51, pathology: "Diabète + Neuropathie", lastVisit: "2025-09-22", status: "success", adherence: 95 },
    { id: 4, name: "Pierre Durand", initials: "PD", age: 69, pathology: "Diabète Type 2", lastVisit: "2025-09-15", status: "danger", adherence: 65 },
    { id: 5, name: "Claire Moreau", initials: "CM", age: 45, pathology: "Allergies multiples", lastVisit: "2025-09-21", status: "success", adherence: 88 },
  ];

  const recentActivities = [
    { patient: "Marie Dubois", action: "A complété son plan de repas", time: "Il y a 2h", type: "success" },
    { patient: "Jean Martin", action: "A manqué 2 repas planifiés", time: "Il y a 5h", type: "warning" },
    { patient: "Sophie Laurent", action: "Nouveau rapport glycémique disponible", time: "Il y a 1j", type: "info" },
    { patient: "Pierre Durand", action: "Alerte : Glycémie élevée détectée", time: "Il y a 2j", type: "danger" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "success": return "bg-success/10 text-success";
      case "warning": return "bg-warning/10 text-warning";
      case "danger": return "bg-destructive/10 text-destructive";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-heading font-bold text-foreground mb-2">
                Dashboard Professionnel
              </h1>
              <p className="text-muted-foreground">
                Dr. Catherine Bernard • Nutritionniste
              </p>
            </div>
            <Button className="bg-gradient-primary">
              <UserPlus className="mr-2 h-4 w-4" />
              Nouveau Patient
            </Button>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, idx) => (
              <Card key={idx} className="medical-card">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-2">
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                    <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  </div>
                  <div className="text-sm font-medium text-foreground mb-1">{stat.title}</div>
                  <div className="text-xs text-muted-foreground">{stat.change}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Tabs defaultValue="patients" className="space-y-6">
            <TabsList>
              <TabsTrigger value="patients">Mes Patients</TabsTrigger>
              <TabsTrigger value="activity">Activité Récente</TabsTrigger>
              <TabsTrigger value="protocols">Protocoles</TabsTrigger>
            </TabsList>

            {/* Patients Tab */}
            <TabsContent value="patients" className="space-y-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Rechercher un patient..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Patients List */}
              <Card className="medical-card">
                <CardHeader>
                  <CardTitle>Liste des Patients</CardTitle>
                  <CardDescription>Gérez vos patients et leurs plans nutritionnels</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {patients.map((patient) => (
                      <div
                        key={patient.id}
                        className="flex items-center justify-between p-4 bg-gradient-health rounded-lg border border-border hover:border-primary transition-colors cursor-pointer"
                      >
                        <div className="flex items-center space-x-4">
                          <Avatar className="h-12 w-12">
                            <AvatarFallback className="bg-primary text-primary-foreground">
                              {patient.initials}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold text-foreground">{patient.name}</h3>
                            <p className="text-sm text-muted-foreground">{patient.age} ans • {patient.pathology}</p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-6">
                          <div className="text-center">
                            <div className="text-sm text-muted-foreground">Dernière visite</div>
                            <div className="font-semibold text-foreground">{patient.lastVisit}</div>
                          </div>
                          <div className="text-center">
                            <div className="text-sm text-muted-foreground">Adhérence</div>
                            <div className={`font-bold ${patient.adherence >= 85 ? 'text-success' : patient.adherence >= 70 ? 'text-warning' : 'text-destructive'}`}>
                              {patient.adherence}%
                            </div>
                          </div>
                          <Badge className={getStatusColor(patient.status)}>
                            {patient.status === "success" ? "Stable" : patient.status === "warning" ? "Attention" : "Alerte"}
                          </Badge>
                          <Button variant="outline" size="sm">Voir Détails</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Activity Tab */}
            <TabsContent value="activity">
              <Card className="medical-card">
                <CardHeader>
                  <CardTitle>Activité Récente</CardTitle>
                  <CardDescription>Dernières actions et notifications de vos patients</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity, idx) => (
                      <div key={idx} className="flex items-start space-x-4 p-4 bg-gradient-health rounded-lg">
                        <div className={`p-2 rounded-full ${
                          activity.type === "success" ? "bg-success/10" :
                          activity.type === "warning" ? "bg-warning/10" :
                          activity.type === "danger" ? "bg-destructive/10" :
                          "bg-primary/10"
                        }`}>
                          {activity.type === "success" ? <CheckCircle className="h-5 w-5 text-success" /> :
                           activity.type === "warning" ? <AlertCircle className="h-5 w-5 text-warning" /> :
                           activity.type === "danger" ? <AlertCircle className="h-5 w-5 text-destructive" /> :
                           <FileText className="h-5 w-5 text-primary" />}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-semibold text-foreground">{activity.patient}</h4>
                            <span className="text-xs text-muted-foreground">{activity.time}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{activity.action}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Protocols Tab */}
            <TabsContent value="protocols">
              <Card className="medical-card">
                <CardHeader>
                  <CardTitle>Protocoles Nutritionnels</CardTitle>
                  <CardDescription>Gérez vos protocoles et modèles de plans alimentaires</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Aucun protocole pour le moment</h3>
                    <p className="text-muted-foreground mb-4">Créez votre premier protocole personnalisé</p>
                    <Button className="bg-gradient-primary">Créer un Protocole</Button>
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

export default ProfessionalDashboard;
