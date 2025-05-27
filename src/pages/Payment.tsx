
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, CreditCard, Lock, Shield } from "lucide-react";
import { toast } from "sonner";

const Payment = () => {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      toast.success("Payment successful! Phone number unlocked.");
      navigate('/property/1?premium=true');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-emerald-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-emerald-600">Vamshi Realestate</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Button variant="ghost" onClick={() => navigate('/')}>Home</Button>
              <Button variant="ghost" onClick={() => navigate('/properties')}>Properties</Button>
              <Button variant="ghost">About</Button>
              <Button variant="ghost">Contact</Button>
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
                <p className="text-sm text-gray-600">3BHK Luxurious Apartment</p>
                <p className="text-sm text-gray-600">Hitech City, Hyderabad</p>
                <Badge className="mt-2 bg-emerald-600">Premium Contact Access</Badge>
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
            onClick={() => navigate('/property/1')}
          >
            ← Back to Property
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
