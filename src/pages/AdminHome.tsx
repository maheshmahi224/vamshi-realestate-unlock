
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Building, 
  Shield, 
  BarChart3, 
  Users,
  Settings,
  Lock,
  TrendingUp,
  Database
} from "lucide-react";

const AdminHome = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Building,
      title: "Property Management",
      description: "Add, edit, and manage property listings with ease",
      color: "text-emerald-600",
      bgColor: "bg-emerald-100"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Track views, contacts, and revenue analytics",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: Users,
      title: "User Management",
      description: "Monitor user activity and subscription status",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: Settings,
      title: "System Settings",
      description: "Configure platform settings and preferences",
      color: "text-gray-600",
      bgColor: "bg-gray-100"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-emerald-800">
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Header */}
      <header className="relative z-10 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3 animate-fade-in">
              <Building className="h-8 w-8 text-white" />
              <h1 className="text-2xl font-bold text-white">Vamshi Realestate</h1>
              <span className="text-emerald-300 text-sm">Admin Portal</span>
            </div>
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="border-white/30 text-white hover:bg-white/10 hover-scale animate-fade-in"
            >
              Back to Main Site
            </Button>
          </div>
        </div>
      </header>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6 animate-scale-in">
            <div className="bg-white/10 backdrop-blur-md rounded-full p-6">
              <Shield className="h-16 w-16 text-emerald-400" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Admin Control Center
          </h1>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto animate-fade-in">
            Manage your real estate platform with powerful tools and insights. 
            Access comprehensive analytics, property management, and user controls.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button 
              size="lg" 
              onClick={() => navigate('/admin/login')}
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg px-8 py-3 hover-scale"
            >
              <Lock className="h-5 w-5 mr-2" />
              Admin Login
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-3 hover-scale"
            >
              <BarChart3 className="h-5 w-5 mr-2" />
              View Demo
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={feature.title} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 text-center">
                <div className={`${feature.bgColor} rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center`}>
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-emerald-100 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 p-8 mb-16 animate-fade-in">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Platform Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">99%</h3>
              <p className="text-emerald-100">System Uptime</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Database className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">24/7</h3>
              <p className="text-emerald-100">Data Protection</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">100%</h3>
              <p className="text-emerald-100">Secure Access</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-emerald-100 mb-8">
            Access your admin dashboard to manage properties and track performance
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate('/admin/login')}
            className="bg-white text-emerald-600 hover:bg-gray-100 text-lg px-8 py-3 hover-scale"
          >
            <Shield className="h-5 w-5 mr-2" />
            Access Admin Panel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
