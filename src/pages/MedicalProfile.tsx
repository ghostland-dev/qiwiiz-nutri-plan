import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { 
  Heart, 
  User, 
  Calendar, 
  Weight, 
  Activity, 
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";

const MedicalProfile = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: {},
    medicalConditions: [],
    allergies: [],
    medications: "",
    dietaryPreferences: []
  });

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const medicalConditions = [
    { id: "diabetes-t1", label: "Diabète Type 1", severity: "high" },
    { id: "diabetes-t2", label: "Diabète Type 2", severity: "high" },
    { id: "neuropathy", label: "Neuropathie", severity: "medium" },
    { id: "hypertension", label: "Hypertension", severity: "medium" },
    { id: "obesity", label: "Obésité", severity: "medium" },
    { id: "kidney-disease", label: "Maladie Rénale", severity: "high" },
    { id: "heart-disease", label: "Maladie Cardiaque", severity: "high" },
    { id: "celiac", label: "Maladie Cœliaque", severity: "medium" }
  ];

  const allergies = [
    { id: "gluten", label: "Gluten" },
    { id: "lactose", label: "Lactose" },
    { id: "nuts", label: "Fruits à Coque" },
    { id: "shellfish", label: "Fruits de Mer" },
    { id: "eggs", label: "Œufs" },
    { id: "soy", label: "Soja" }
  ];

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-muted/30 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-8 animate-fade-in">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Heart className="h-5 w-5 text-white" />
            </div>
            <span className="font-heading font-bold text-xl text-foreground">
              Qiwiiz <span className="text-primary">Nutrition</span>
            </span>
          </div>
          
          <div>
            <h1 className="text-3xl font-heading font-bold text-foreground mb-2">
              Configuration de votre Profil Médical
            </h1>
            <p className="text-muted-foreground">
              Ces informations nous permettront de créer des plans nutritionnels adaptés à vos besoins spécifiques
            </p>
          </div>

          {/* Progress */}
          <div className="max-w-md mx-auto space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Étape {currentStep} sur {totalSteps}</span>
              <span>{Math.round(progress)}% complété</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>

        {/* Form Steps */}
        <Card className="medical-card animate-scale-in">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              {currentStep === 1 && <User className="h-5 w-5 text-primary" />}
              {currentStep === 2 && <Heart className="h-5 w-5 text-destructive" />}
              {currentStep === 3 && <AlertTriangle className="h-5 w-5 text-warning" />}
              {currentStep === 4 && <CheckCircle className="h-5 w-5 text-success" />}
              <span>
                {currentStep === 1 && "Informations Personnelles"}
                {currentStep === 2 && "Conditions Médicales"}
                {currentStep === 3 && "Allergies et Médicaments"}
                {currentStep === 4 && "Préférences Alimentaires"}
              </span>
            </CardTitle>
            <CardDescription>
              {currentStep === 1 && "Renseignez vos informations de base pour personnaliser votre expérience"}
              {currentStep === 2 && "Sélectionnez toutes les conditions médicales qui vous concernent"}
              {currentStep === 3 && "Indiquez vos allergies et traitements actuels"}
              {currentStep === 4 && "Définissez vos préférences et restrictions alimentaires"}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Step 1: Personal Info */}
            {currentStep === 1 && (
              <div className="space-y-4 animate-fade-in">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="age">Âge</Label>
                    <Input id="age" type="number" placeholder="35" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gender">Sexe</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Homme</SelectItem>
                        <SelectItem value="female">Femme</SelectItem>
                        <SelectItem value="other">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="height">Taille (cm)</Label>
                    <Input id="height" type="number" placeholder="170" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="weight">Poids (kg)</Label>
                    <Input id="weight" type="number" placeholder="70" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="activity">Niveau d'activité physique</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner votre niveau" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sedentary">Sédentaire (pas d'exercice)</SelectItem>
                      <SelectItem value="light">Léger (1-3 jours/semaine)</SelectItem>
                      <SelectItem value="moderate">Modéré (3-5 jours/semaine)</SelectItem>
                      <SelectItem value="active">Actif (6-7 jours/semaine)</SelectItem>
                      <SelectItem value="very-active">Très actif (2x par jour)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* Step 2: Medical Conditions */}
            {currentStep === 2 && (
              <div className="space-y-4 animate-fade-in">
                <div className="grid gap-4">
                  {medicalConditions.map((condition) => (
                    <div key={condition.id} className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50 medical-transition">
                      <Checkbox id={condition.id} />
                      <div className="flex-1">
                        <label 
                          htmlFor={condition.id} 
                          className="text-sm font-medium cursor-pointer flex items-center space-x-2"
                        >
                          <span>{condition.label}</span>
                          <Badge 
                            variant={condition.severity === 'high' ? 'destructive' : 'secondary'}
                            className="text-xs"
                          >
                            {condition.severity === 'high' ? 'Priorité élevée' : 'Suivi requis'}
                          </Badge>
                        </label>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="text-sm text-primary font-medium mb-2">
                    💡 Information importante
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Ces informations nous permettent d'adapter précisément vos plans nutritionnels. 
                    Toutes les données sont chiffrées et conformes aux normes HDS.
                  </p>
                </div>
              </div>
            )}

            {/* Step 3: Allergies & Medications */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Allergies Alimentaires</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {allergies.map((allergy) => (
                      <div key={allergy.id} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50 medical-transition">
                        <Checkbox id={allergy.id} />
                        <label htmlFor={allergy.id} className="text-sm font-medium cursor-pointer">
                          {allergy.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Médicaments Actuels</h3>
                  <Textarea 
                    placeholder="Listez vos médicaments actuels, dosages et fréquences. Ex: Metformine 850mg 2x/jour, Insuline rapide aux repas..."
                    rows={4}
                  />
                  <p className="text-xs text-muted-foreground mt-2">
                    Ces informations restent confidentielles et nous aident à éviter les interactions médicamenteuses.
                  </p>
                </div>
              </div>
            )}

            {/* Step 4: Dietary Preferences */}
            {currentStep === 4 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Régime Alimentaire</h3>
                  <div className="grid gap-3">
                    {[
                      "Omnivore",
                      "Végétarien",
                      "Végétalien",
                      "Pescatarien",
                      "Régime méditerranéen",
                      "Régime cétogène",
                      "Sans gluten",
                      "Pauvre en sodium"
                    ].map((diet) => (
                      <div key={diet} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50 medical-transition">
                        <Checkbox id={diet} />
                        <label htmlFor={diet} className="text-sm font-medium cursor-pointer">
                          {diet}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Budget Alimentaire Hebdomadaire</h3>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner votre budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Moins de 50€</SelectItem>
                      <SelectItem value="medium">50€ - 100€</SelectItem>
                      <SelectItem value="high">100€ - 150€</SelectItem>
                      <SelectItem value="premium">Plus de 150€</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="p-6 bg-gradient-health rounded-lg border">
                  <div className="flex items-center space-x-3 mb-3">
                    <CheckCircle className="h-6 w-6 text-success" />
                    <h3 className="text-lg font-semibold text-foreground">Profil Presque Complété !</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Votre profil médical sera utilisé pour générer des plans nutritionnels personnalisés 
                    adaptés à vos pathologies et préférences.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center space-x-1">
                      <Heart className="h-4 w-4 text-success" />
                      <span>Adapté médicalement</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Activity className="h-4 w-4 text-primary" />
                      <span>Suivi en temps réel</span>
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6 border-t">
              <Button 
                variant="outline" 
                onClick={prevStep}
                disabled={currentStep === 1}
                className="medical-transition"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Précédent
              </Button>

              {currentStep < totalSteps ? (
                <Button 
                  onClick={nextStep}
                  className="bg-gradient-primary hover:bg-primary-hover medical-transition"
                >
                  Suivant
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Link to="/meal-planning">
                  <Button className="bg-gradient-primary hover:bg-primary-hover medical-transition">
                    Créer mes Plans Nutritionnels
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Help Section */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground mb-2">
            Besoin d'aide pour remplir votre profil médical ?
          </p>
          <Link 
            to="/support" 
            className="text-primary hover:text-primary-hover medical-transition text-sm"
          >
            Contacter notre équipe médicale →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MedicalProfile;