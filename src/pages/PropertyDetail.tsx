
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Bath, Square, Calendar, Phone, Lock } from "lucide-react";
import { toast } from "sonner";

const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showPhone, setShowPhone] = useState(false);
  
  // Mock property data - in real app this would come from database
  const property = {
    id: "1",
    name: "3BHK Luxurious Apartment",
    price: "₹85 Lakhs",
    location: "Hitech City, Hyderabad",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=1000",
    bedrooms: 3,
    bathrooms: 2,
    area: "1450 sq ft",
    type: "Apartment",
    datePosted: "January 15, 2024",
    phone: "+91 98765 43210",
    ownerName: "Rajesh Kumar",
    details: `This stunning 3BHK apartment offers modern living at its finest. Located in the heart of Hitech City, this property features:

• Spacious rooms with premium fittings
• Modular kitchen with granite countertops  
• Master bedroom with attached bathroom
• Balcony with city view
• 24/7 security and power backup
• Covered parking space
• Close to IT parks, schools, and hospitals
• Easy access to public transportation

The apartment is ready to move in and comes with all modern amenities. Perfect for families looking for a comfortable lifestyle in Hyderabad's premier IT hub.`
  };

  const handleUnlockContact = () => {
    // Check if user is logged in (mock check)
    const isLoggedIn = false; // This would come from auth context
    
    if (!isLoggedIn) {
      toast.info("Please login to unlock contact details");
      navigate('/login');
      return;
    }
    
    // Redirect to payment
    navigate('/payment');
  };

  return (
    <div className="min-h-screen bg-gray-50">
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
              <Button onClick={() => navigate('/login')}>Login</Button>
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
              <span>Posted on {property.datePosted}</span>
            </div>

            {/* Contact Section */}
            <Card className="border-2 border-emerald-100">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-gray-600">Owner: </span>
                    <span className="font-medium">{property.ownerName}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 mr-2 text-gray-600" />
                      {showPhone ? (
                        <span className="font-medium text-emerald-600">{property.phone}</span>
                      ) : (
                        <div className="flex items-center">
                          <span className="text-gray-400 blur-sm select-none">+91 98765 43210</span>
                          <Lock className="h-4 w-4 ml-2 text-gray-400" />
                        </div>
                      )}
                    </div>
                    {!showPhone && (
                      <Button 
                        onClick={handleUnlockContact}
                        className="bg-emerald-600 hover:bg-emerald-700"
                      >
                        Unlock Contact - ₹99
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
