import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, Bell, Lock, CreditCard, Shield, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const { toast } = useToast();
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [mealReminders, setMealReminders] = useState(true);
  const [healthAlerts, setHealthAlerts] = useState(true);

  const handleSave = () => {
    toast({
      title: "Paramètres sauvegardés",
      description: "Vos modifications ont été enregistrées avec succès.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-heading font-bold text-foreground mb-2">
              Paramètres
            </h1>
            <p className="text-muted-foreground">
              Gérez vos préférences et informations personnelles
            </p>
          </div>

          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="profile">
                <User className="h-4 w-4 mr-2" />
                Profil
              </TabsTrigger>
              <TabsTrigger value="notifications">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </TabsTrigger>
              <TabsTrigger value="security">
                <Lock className="h-4 w-4 mr-2" />
                Sécurité
              </TabsTrigger>
              <TabsTrigger value="billing">
                <CreditCard className="h-4 w-4 mr-2" />
                Abonnement
              </TabsTrigger>
              <TabsTrigger value="privacy">
                <Shield className="h-4 w-4 mr-2" />
                Confidentialité
              </TabsTrigger>
            </TabsList>

            {/* Profile Tab */}
            <TabsContent value="profile">
              <Card className="medical-card">
                <CardHeader>
                  <CardTitle>Informations Personnelles</CardTitle>
                  <CardDescription>Mettez à jour vos informations de profil</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Prénom</Label>
                      <Input id="firstName" defaultValue="Marie" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Nom</Label>
                      <Input id="lastName" defaultValue="Dubois" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="marie.dubois@email.com" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input id="phone" defaultValue="+33 6 12 34 56 78" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="birthdate">Date de naissance</Label>
                      <Input id="birthdate" type="date" defaultValue="1968-03-15" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Adresse</Label>
                    <Input id="address" defaultValue="12 rue des Fleurs, 75001 Paris" />
                  </div>

                  <Button onClick={handleSave} className="bg-gradient-primary">
                    Enregistrer les modifications
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Notifications Tab */}
            <TabsContent value="notifications">
              <Card className="medical-card">
                <CardHeader>
                  <CardTitle>Préférences de Notifications</CardTitle>
                  <CardDescription>Choisissez comment vous souhaitez être informé</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Notifications par email</Label>
                      <p className="text-sm text-muted-foreground">
                        Recevez des emails pour les mises à jour importantes
                      </p>
                    </div>
                    <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Rappels de repas</Label>
                      <p className="text-sm text-muted-foreground">
                        Notifications quotidiennes pour vos repas planifiés
                      </p>
                    </div>
                    <Switch checked={mealReminders} onCheckedChange={setMealReminders} />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Alertes santé</Label>
                      <p className="text-sm text-muted-foreground">
                        Alertes sur vos indicateurs de santé
                      </p>
                    </div>
                    <Switch checked={healthAlerts} onCheckedChange={setHealthAlerts} />
                  </div>

                  <div className="space-y-2">
                    <Label>Fréquence des rapports</Label>
                    <Select defaultValue="weekly">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="daily">Quotidien</SelectItem>
                        <SelectItem value="weekly">Hebdomadaire</SelectItem>
                        <SelectItem value="monthly">Mensuel</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button onClick={handleSave} className="bg-gradient-primary">
                    Sauvegarder les préférences
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Security Tab */}
            <TabsContent value="security">
              <Card className="medical-card">
                <CardHeader>
                  <CardTitle>Sécurité du Compte</CardTitle>
                  <CardDescription>Protégez votre compte et vos données</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Mot de passe actuel</Label>
                      <Input id="currentPassword" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">Nouveau mot de passe</Label>
                      <Input id="newPassword" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
                      <Input id="confirmPassword" type="password" />
                    </div>
                  </div>

                  <Button className="bg-gradient-primary">
                    Modifier le mot de passe
                  </Button>

                  <div className="pt-6 border-t border-border">
                    <h3 className="font-semibold mb-4">Authentification à deux facteurs</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Ajoutez une couche de sécurité supplémentaire à votre compte
                    </p>
                    <Button variant="outline">Activer 2FA</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Billing Tab */}
            <TabsContent value="billing">
              <Card className="medical-card">
                <CardHeader>
                  <CardTitle>Abonnement et Facturation</CardTitle>
                  <CardDescription>Gérez votre abonnement Qiwiiz Nutrition</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="p-4 bg-gradient-primary rounded-lg text-primary-foreground">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-lg">Plan Premium</h3>
                      <span className="text-2xl font-bold">9,99€/mois</span>
                    </div>
                    <p className="text-sm opacity-90">
                      Renouvellement automatique le 1er octobre 2025
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-semibold">Avantages du plan actuel</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>✓ Plans de repas illimités</li>
                      <li>✓ Comparaison de prix en temps réel</li>
                      <li>✓ Accès aux recettes premium</li>
                      <li>✓ Support prioritaire</li>
                    </ul>
                  </div>

                  <div className="flex space-x-2">
                    <Button variant="outline">Changer de plan</Button>
                    <Button variant="outline" className="text-destructive">
                      Annuler l'abonnement
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Privacy Tab */}
            <TabsContent value="privacy">
              <Card className="medical-card">
                <CardHeader>
                  <CardTitle>Confidentialité et Données</CardTitle>
                  <CardDescription>Contrôlez vos données personnelles</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Partage des données anonymisées</Label>
                        <p className="text-sm text-muted-foreground">
                          Aide à améliorer nos algorithmes nutritionnels
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Profil visible par les professionnels</Label>
                        <p className="text-sm text-muted-foreground">
                          Permet aux nutritionnistes de voir votre profil
                        </p>
                      </div>
                      <Switch />
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border space-y-4">
                    <h3 className="font-semibold">Gestion des données</h3>
                    <div className="flex flex-col space-y-2">
                      <Button variant="outline" className="justify-start">
                        <Download className="mr-2 h-4 w-4" />
                        Télécharger mes données
                      </Button>
                      <Button variant="outline" className="justify-start text-destructive">
                        Supprimer mon compte
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Conformité RGPD :</strong> Vos données de santé sont hébergées sur des serveurs certifiés HDS en France.
                    </p>
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

export default Settings;
