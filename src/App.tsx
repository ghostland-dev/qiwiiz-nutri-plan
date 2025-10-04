import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import MedicalProfile from "./pages/MedicalProfile";
import MealPlanning from "./pages/MealPlanning";
import NutritionDashboard from "./pages/NutritionDashboard";
import ShoppingList from "./pages/ShoppingList";
import RecipeDetail from "./pages/RecipeDetail";
import Settings from "./pages/Settings";
import ProfessionalDashboard from "./pages/ProfessionalDashboard";
import Reports from "./pages/Reports";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/medical-profile" element={<MedicalProfile />} />
          <Route path="/meal-planning" element={<MealPlanning />} />
          <Route path="/dashboard" element={<NutritionDashboard />} />
          <Route path="/shopping-list" element={<ShoppingList />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/professional" element={<ProfessionalDashboard />} />
          <Route path="/reports" element={<Reports />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
