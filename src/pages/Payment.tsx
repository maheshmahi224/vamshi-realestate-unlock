
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, CreditCard, Lock, Shield, LogOut } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

interface Property {
  id: string;
  name: string;
  price: string;
  location: string;
}

const Payment = () => {
  const navigate = useNavigate();
  const { propertyId } = useParams();
  const { user, signOut } = useAuth();
  const [isProcessing, setIsProcessing] = useState(false);
  const [property, setProperty] = useState<Property | null>(null);
  const [paymentGatewayUrl, setPaymentGatewayUrl] = useState("");

  useEffect(() => {
    if (!user) {
      toast.error("Please login to continue");
      navigate('/login');
      return;
    }

    if (propertyId) {
      fetchProperty();
    }
  }, [user, propertyId, navigate]);

  const fetchProperty = async () => {
    try {
      const { data, error } = await supabase
        .from('properties')
        .select('id, name, price, location')
        .eq('id', propertyId)
        .single();

      if (error) throw error;
      setProperty(data);
    } catch (error) {
      console.error('Error fetching property:', error);
      toast.error('Property not found');
      navigate('/properties');
    }
  };

  const handlePayment = async () => {
    if (!user || !property) return;

    setIsProcessing(true);
    
    try {
      // Create payment record
      const { data: paymentData, error: paymentError } = await supabase
        .from('payments')
        .insert({
          user_id: user.id,
          property_id: property.id,
          amount: 9900, // ₹99 in paise
          currency: 'INR',
          payment_status: 'pending'
        })
        .select()
        .single();

      if (paymentError) {
        if (paymentError.code === '23505') {
          toast.error("You have already unlocked this property's contact details!");
          navigate(`/property/${property.id}`);
          return;
        }
        throw paymentError;
      }

      // For now, simulate payment success
      // Replace this with actual payment gateway integration
      if (paymentGatewayUrl) {
        // Redirect to external payment gateway
        window.open(paymentGatewayUrl, '_blank');
      } else {
        // Simulate payment for demo
        setTimeout(async () => {
          try {
            await supabase
              .from('payments')
              .update({
                payment_status: 'completed',
                payment_gateway_id: 'demo_' + Date.now(),
                unlocked_at: new Date().toISOString()
              })
              .eq('id', paymentData.id);

            toast.success("Payment successful! Contact details unlocked.");
            navigate(`/property/${property.id}`);
          } catch (error) {
            toast.error("Payment verification failed");
          }
          setIsProcessing(false);
        }, 2000);
      }
    } catch (error: any) {
      console.error('Payment error:', error);
      toast.error(error.message || "Payment failed");
      setIsProcessing(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      toast.error('Error signing out');
    }
  };

  if (!property) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-emerald-600"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-emerald-100">
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
              {user && (
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600">Welcome, {user.email}</span>
                  <Button variant="outline" onClick={handleSignOut}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </Button>
                </div>
              )}
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Unlock Contact Details</h1>
          <p className="text-gray-600">Get instant access to property owner's contact information</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Payment Plan */}
          <Card className="border-2 border-emerald-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-emerald-600">Premium Access</CardTitle>
              <CardDescription>One-time payment for contact details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">₹99</div>
                <p className="text-gray-600">One-time payment</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-emerald-600 mr-3" />
                  <span>Instant access to phone number</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-emerald-600 mr-3" />
                  <span>Direct contact with property owner</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-emerald-600 mr-3" />
                  <span>No subscription required</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-emerald-600 mr-3" />
                  <span>Secure payment process</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="h-6 w-6 mr-2 text-emerald-600" />
                Payment Details
              </CardTitle>
              <CardDescription>Complete your purchase securely</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Security Badge */}
              <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
                <Shield className="h-6 w-6 text-emerald-600 mr-2" />
                <span className="text-sm text-gray-600">256-bit SSL Encryption</span>
              </div>

              {/* Property Info */}
              <div className="border rounded-lg p-4 bg-emerald-50">
                <h4 className="font-semibold text-gray-900 mb-2">Property Details</h4>
                <p className="text-sm text-gray-600">{property.name}</p>
                <p className="text-sm text-gray-600">{property.location}</p>
                <p className="text-sm text-gray-600">Price: {property.price}</p>
                <Badge className="mt-2 bg-emerald-600">Premium Contact Access</Badge>
              </div>

              {/* Payment Gateway URL Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Payment Gateway URL (Optional - for testing)
                </label>
                <input
                  type="url"
                  placeholder="Enter payment gateway URL"
                  value={paymentGatewayUrl}
                  onChange={(e) => setPaymentGatewayUrl(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <p className="text-xs text-gray-500">
                  Leave empty to use demo payment (automatically completes after 2 seconds)
                </p>
              </div>

              {/* Payment Summary */}
              <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">Contact Access Fee</span>
                  <span className="font-semibold">₹99</span>
                </div>
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total</span>
                  <span className="text-emerald-600">₹99</span>
                </div>
              </div>

              {/* Payment Button */}
              <Button 
                onClick={handlePayment}
                disabled={isProcessing}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-lg py-3"
              >
                <Lock className="h-5 w-5 mr-2" />
                {isProcessing ? "Processing..." : "Pay ₹99 & Unlock Contact"}
              </Button>

              <p className="text-xs text-gray-500 text-center">
                By proceeding, you agree to our Terms of Service and Privacy Policy
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Back Button */}
        <div className="text-center mt-8">
          <Button 
            variant="outline" 
            onClick={() => navigate(`/property/${property.id}`)}
          >
            ← Back to Property
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
