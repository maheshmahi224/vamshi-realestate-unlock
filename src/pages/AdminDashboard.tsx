
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  Building, 
  Eye, 
  Phone, 
  Plus, 
  Settings, 
  Users,
  LogOut,
  Edit,
  Trash2
} from "lucide-react";
import { toast } from "sonner";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [properties] = useState([
    {
      id: "1",
      name: "3BHK Luxurious Apartment",
      location: "Hitech City, Hyderabad",
      price: "₹85 Lakhs",
      status: "Active",
      views: 245,
      contacts: 12,
      dateAdded: "2024-01-15"
    },
    {
      id: "2",
      name: "2BHK Modern Flat",
      location: "Gachibowli, Hyderabad",
      price: "₹65 Lakhs",
      status: "Active",
      views: 189,
      contacts: 8,
      dateAdded: "2024-01-10"
    },
    {
      id: "3",
      name: "Independent Villa",
      location: "Jubilee Hills, Hyderabad",
      price: "₹1.2 Crores",
      status: "Active",
      views: 156,
      contacts: 15,
      dateAdded: "2024-01-08"
    }
  ]);

  const handleLogout = () => {
    toast.success("Logged out successfully");
    navigate('/admin/login');
  };

  const handleDeleteProperty = (id: string, name: string) => {
    toast.success(`Property "${name}" deleted successfully`);
  };

  const totalViews = properties.reduce((sum, prop) => sum + prop.views, 0);
  const totalContacts = properties.reduce((sum, prop) => sum + prop.contacts, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-white shadow-sm border-b animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Building className="h-8 w-8 text-emerald-600" />
              <h1 className="text-2xl font-bold text-emerald-600">Vamshi Realestate</h1>
              <Badge className="bg-emerald-100 text-emerald-800 animate-pulse">Admin Panel</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" onClick={() => navigate('/')} className="hover-scale">
                <Eye className="h-4 w-4 mr-2" />
                View Site
              </Button>
              <Button variant="outline" onClick={handleLogout} className="hover-scale">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Header */}
        <div className="mb-8 animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h2>
          <p className="text-gray-600">Manage your properties and track performance</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-all duration-300 hover-scale animate-fade-in">
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="bg-emerald-100 rounded-full p-3">
                  <Building className="h-8 w-8 text-emerald-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Properties</p>
                  <p className="text-2xl font-bold text-gray-900">{properties.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover-scale animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="bg-blue-100 rounded-full p-3">
                  <Eye className="h-8 w-8 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Views</p>
                  <p className="text-2xl font-bold text-gray-900">{totalViews}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover-scale animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="bg-green-100 rounded-full p-3">
                  <Phone className="h-8 w-8 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Contact Unlocks</p>
                  <p className="text-2xl font-bold text-gray-900">{totalContacts}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover-scale animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="bg-purple-100 rounded-full p-3">
                  <BarChart3 className="h-8 w-8 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Revenue</p>
                  <p className="text-2xl font-bold text-gray-900">₹{totalContacts * 99}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mb-8 animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-gray-900">Quick Actions</h3>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button onClick={() => navigate('/admin/add-property')} className="bg-emerald-600 hover:bg-emerald-700 hover-scale animate-scale-in">
              <Plus className="h-4 w-4 mr-2" />
              Add New Property
            </Button>
            <Button variant="outline" className="hover-scale animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <BarChart3 className="h-4 w-4 mr-2" />
              View Analytics
            </Button>
            <Button variant="outline" className="hover-scale animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>

        {/* Properties Table */}
        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle>Recent Properties</CardTitle>
            <CardDescription>Manage your property listings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Property</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Location</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Price</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Views</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Contacts</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {properties.map((property, index) => (
                    <tr key={property.id} className="border-b hover:bg-gray-50 transition-colors duration-200 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <td className="py-3 px-4">
                        <div>
                          <p className="font-medium text-gray-900">{property.name}</p>
                          <p className="text-sm text-gray-500">Added: {property.dateAdded}</p>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-gray-700">{property.location}</td>
                      <td className="py-3 px-4 font-medium text-emerald-600">{property.price}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center">
                          <Eye className="h-4 w-4 text-gray-400 mr-1" />
                          {property.views}
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 text-gray-400 mr-1" />
                          {property.contacts}
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <Badge className="bg-green-100 text-green-800">{property.status}</Badge>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center space-x-2">
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => navigate(`/admin/edit-property/${property.id}`)}
                            className="hover-scale"
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleDeleteProperty(property.id, property.name)}
                            className="text-red-600 hover:text-red-700 hover-scale"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
