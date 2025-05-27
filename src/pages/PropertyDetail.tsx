
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Bath, Square, Calendar, Phone, Lock, LogOut } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

interface Property {
  id: string;
  name: string;
  price: string;
  location: string;
  image: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  type: string;
  date_posted: string;
  phone: string;
  owner_name: string;
  details: string;
}

const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [hasAccess, setHasAccess] = useState(false);
  const [checkingAccess, setCheckingAccess] = useState(false);

  useEffect(() => {
    if (id) {
      fetchProperty();
      if (user) {
        checkPaymentAccess();
      }
    }
  }, [id, user]);

  const fetchProperty = async () => {
    try {
      const { data, error } = await supabase
        .from('properties')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      setProperty(data);
    } catch (error) {
      console.error('Error fetching property:', error);
      toast.error('Property not found');
      navigate('/properties');
    } finally {
      setLoading(false);
    }
  };

  const checkPaymentAccess = async () => {
    if (!user || !id) return;
    
    setCheckingAccess(true);
    try {
      const { data, error } = await supabase
        .from('payments')
        .select('*')
        .eq('user_id', user.id)
        .eq('property_id', id)
        .eq('payment_status', 'completed')
        .single();

      if (data && !error) {
        setHasAccess(true);
      }
    } catch (error) {
      // No payment found, which is fine
      setHasAccess(false);
    } finally {
      setCheckingAccess(false);
    }
  };

  const handleUnlockContact = () => {
    if (!user) {
      toast.info("Please login to unlock contact details");
      navigate('/login');
      return;
    }
    
    // Redirect to payment page
    navigate(`/payment/${id}`);
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      toast.error('Error signing out');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-emerald-600"></div>
          <p className="mt-4 text-gray-600">Loading property...</p>
        </div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Property not found</p>
          <Button onClick={() => navigate('/properties')} className="mt-4">
            Back to Properties
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-emerald-600">Vamshi Realestate</h1>
            </div>
            <nav className="hidden md:flex space-x-8 items-center">
              <Button variant="ghost" onClick={() => navigate('/')}>Home</Button>
              <Button variant="ghost" onClick={() => navigate('/properties')}>Properties</Button>
              <Button variant="ghost">About</Button>
              <Button variant="ghost">Contact</Button>
              {user ? (
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600">Welcome, {user.email}</span>
                  <Button variant="outline" onClick={handleSignOut}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </Button>
                </div>
              ) : (
                <Button onClick={() => navigate('/login')}>Login</Button>
              )}
            </nav>
          </div>
        </div>
      </header>

      {/* Property Details */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button 
          variant="outline" 
          onClick={() => navigate('/properties')}
          className="mb-6"
        >
          ← Back to Properties
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Property Image */}
          <div className="relative">
            <img 
              src={property.image} 
              alt={property.name}
              className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-lg"
            />
            <div className="absolute top-4 left-4">
              <Badge className="bg-emerald-600 text-white text-sm">{property.type}</Badge>
            </div>
          </div>

          {/* Property Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{property.name}</h1>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{property.location}</span>
              </div>
              <div className="text-3xl font-bold text-emerald-600 mb-4">{property.price}</div>
            </div>

            {/* Property Features */}
            <div className="flex items-center space-x-6 text-gray-600">
              <div className="flex items-center">
                <Bed className="h-5 w-5 mr-2" />
                <span>{property.bedrooms} Bedrooms</span>
              </div>
              <div className="flex items-center">
                <Bath className="h-5 w-5 mr-2" />
                <span>{property.bathrooms} Bathrooms</span>
              </div>
              <div className="flex items-center">
                <Square className="h-5 w-5 mr-2" />
                <span>{property.area}</span>
              </div>
            </div>

            {/* Date Posted */}
            <div className="flex items-center text-gray-600">
              <Calendar className="h-5 w-5 mr-2" />
              <span>Posted on {new Date(property.date_posted).toLocaleDateString()}</span>
            </div>

            {/* Contact Section */}
            <Card className="border-2 border-emerald-100">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-gray-600">Owner: </span>
                    <span className="font-medium">{property.owner_name}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 mr-2 text-gray-600" />
                      {hasAccess ? (
                        <span className="font-medium text-emerald-600">{property.phone}</span>
                      ) : (
                        <div className="flex items-center">
                          <span className="text-gray-400 blur-sm select-none">{property.phone}</span>
                          <Lock className="h-4 w-4 ml-2 text-gray-400" />
                        </div>
                      )}
                    </div>
                    {!hasAccess && (
                      <Button 
                        onClick={handleUnlockContact}
                        className="bg-emerald-600 hover:bg-emerald-700"
                        disabled={checkingAccess}
                      >
                        {checkingAccess ? "Checking..." : "Unlock Contact - ₹99"}
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Property Description */}
        <Card className="mt-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Property Details</h3>
            <div className="text-gray-700 whitespace-pre-line leading-relaxed">
              {property.details}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PropertyDetail;
