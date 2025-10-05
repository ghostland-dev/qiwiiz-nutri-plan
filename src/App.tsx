import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
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
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/medical-profile" element={<ProtectedRoute><MedicalProfile /></ProtectedRoute>} />
            <Route path="/meal-planning" element={<ProtectedRoute><MealPlanning /></ProtectedRoute>} />
            <Route path="/dashboard" element={<ProtectedRoute><NutritionDashboard /></ProtectedRoute>} />
            <Route path="/shopping-list" element={<ProtectedRoute><ShoppingList /></ProtectedRoute>} />
            <Route path="/recipe/:id" element={<ProtectedRoute><RecipeDetail /></ProtectedRoute>} />
            <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
            <Route path="/professional" element={<ProtectedRoute><ProfessionalDashboard /></ProtectedRoute>} />
            <Route path="/reports" element={<ProtectedRoute><Reports /></ProtectedRoute>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
