
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield, Building } from "lucide-react";
import { toast } from "sonner";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock admin login - in real app this would use proper admin authentication
    if (form.email === "admin@vamshirealestate.com" && form.password === "admin123") {
      toast.success("Admin login successful!");
      navigate('/admin/dashboard');
    } else {
      toast.error("Invalid admin credentials");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-emerald-800 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/20"></div>
      <Card className="w-full max-w-md shadow-2xl relative z-10 animate-scale-in">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center mb-4 animate-fade-in">
            <div className="bg-emerald-100 rounded-full p-4">
              <Shield className="h-12 w-12 text-emerald-600" />
            </div>
          </div>
          <div className="flex items-center justify-center space-x-2 animate-fade-in">
            <Building className="h-6 w-6 text-emerald-600" />
            <span className="text-lg font-semibold text-emerald-600">Vamshi Realestate</span>
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900 animate-fade-in">Admin Portal</CardTitle>
          <CardDescription className="animate-fade-in">
            Secure access to property management system
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2 animate-fade-in">
              <Label htmlFor="admin-email">Admin Email</Label>
              <Input
                id="admin-email"
                type="email"
                placeholder="Enter your admin email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="transition-all duration-200 focus:scale-105"
              />
            </div>
            <div className="space-y-2 animate-fade-in">
              <Label htmlFor="admin-password">Admin Password</Label>
              <Input
                id="admin-password"
                type="password"
                placeholder="Enter your password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
                className="transition-all duration-200 focus:scale-105"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-emerald-600 hover:bg-emerald-700 transition-all duration-200 hover-scale animate-fade-in"
            >
              <Shield className="h-4 w-4 mr-2" />
              Admin Login
            </Button>
          </form>
          
          <div className="mt-6 text-center animate-fade-in">
            <Button 
              variant="link" 
              onClick={() => navigate('/')}
              className="text-gray-600 hover:text-emerald-600 transition-colors duration-200"
            >
              ← Back to Main Site
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
