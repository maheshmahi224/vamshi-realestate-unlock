
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building, 
  MapPin, 
  Phone, 
  Shield, 
  Star, 
  Users,
  ArrowRight,
  Bed,
  Bath,
  Square
} from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const featuredProperties = [
    {
      id: "1",
      name: "3BHK Luxurious Apartment",
      price: "₹85 Lakhs",
      location: "Hitech City, Hyderabad",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=1000",
      bedrooms: 3,
      bathrooms: 2,
      area: "1450 sq ft",
      type: "Apartment"
    },
    {
      id: "2",
      name: "Independent Villa",
      price: "₹1.2 Crores",
      location: "Jubilee Hills, Hyderabad",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1000",
      bedrooms: 4,
      bathrooms: 3,
      area: "2800 sq ft",
      type: "Villa"
    },
    {
      id: "3",
      name: "2BHK Modern Flat",
      price: "₹65 Lakhs",
      location: "Gachibowli, Hyderabad",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=1000",
      bedrooms: 2,
      bathrooms: 2,
      area: "1200 sq ft",
      type: "Apartment"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Building className="h-8 w-8 text-emerald-600 mr-3" />
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

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-emerald-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Your Dream Home <br />
              <span className="text-emerald-200">Awaits You</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-emerald-100 max-w-3xl mx-auto animate-fade-in">
              Discover premium properties in Hyderabad's most sought-after locations. 
              From luxury apartments to independent villas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button 
                size="lg" 
                className="bg-white text-emerald-600 hover:bg-gray-100 text-lg px-8 py-3 hover-scale"
                onClick={() => navigate('/properties')}
              >
                Browse Properties
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-emerald-600 text-lg px-8 py-3 hover-scale"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in">Why Choose Vamshi Realestate?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in">
              We provide premium real estate services with verified properties and transparent processes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover-scale animate-fade-in">
              <CardContent className="space-y-4">
                <div className="bg-emerald-100 rounded-full p-4 w-16 h-16 mx-auto flex items-center justify-center">
                  <Shield className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Verified Properties</h3>
                <p className="text-gray-600">
                  All our properties are verified and documented to ensure transparency and trust
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover-scale animate-fade-in">
              <CardContent className="space-y-4">
                <div className="bg-emerald-100 rounded-full p-4 w-16 h-16 mx-auto flex items-center justify-center">
                  <Users className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Expert Support</h3>
                <p className="text-gray-600">
                  Our experienced team provides personalized assistance throughout your property journey
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover-scale animate-fade-in">
              <CardContent className="space-y-4">
                <div className="bg-emerald-100 rounded-full p-4 w-16 h-16 mx-auto flex items-center justify-center">
                  <Star className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Premium Locations</h3>
                <p className="text-gray-600">
                  Properties in Hyderabad's most desirable neighborhoods with excellent connectivity
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in">Featured Properties</h2>
            <p className="text-gray-600 animate-fade-in">Handpicked selection of our premium properties</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProperties.map((property, index) => (
              <Card key={property.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-emerald-600 text-white">{property.type}</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-900">{property.price}</Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{property.name}</h3>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>

                  <div className="flex items-center justify-between text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                      <span className="text-sm">{property.bedrooms} Beds</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      <span className="text-sm">{property.bathrooms} Baths</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="h-4 w-4 mr-1" />
                      <span className="text-sm">{property.area}</span>
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-emerald-600 hover:bg-emerald-700 transition-all duration-200"
                    onClick={() => navigate(`/property/${property.id}`)}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={() => navigate('/properties')} 
              variant="outline" 
              size="lg"
              className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white hover-scale animate-fade-in"
            >
              View All Properties
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-emerald-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 animate-fade-in">Ready to Find Your Dream Home?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto animate-fade-in">
            Contact our expert team today and let us help you find the perfect property
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button 
              size="lg" 
              className="bg-white text-emerald-600 hover:bg-gray-100 hover-scale"
              onClick={() => navigate('/properties')}
            >
              <Phone className="h-5 w-5 mr-2" />
              Contact Us
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-emerald-600 hover-scale"
              onClick={() => navigate('/login')}
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Building className="h-8 w-8 text-emerald-400 mr-3" />
                <span className="text-xl font-bold text-white">Vamshi Realestate</span>
              </div>
              <p className="text-gray-400">
                Your trusted partner in finding premium properties in Hyderabad
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Button variant="link" className="text-gray-400 hover:text-white p-0" onClick={() => navigate('/properties')}>Properties</Button></li>
                <li><Button variant="link" className="text-gray-400 hover:text-white p-0">About Us</Button></li>
                <li><Button variant="link" className="text-gray-400 hover:text-white p-0">Contact</Button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">Property Buying</li>
                <li className="text-gray-400">Property Selling</li>
                <li className="text-gray-400">Property Investment</li>
                <li className="text-gray-400">Property Management</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">+91 98765 43210</li>
                <li className="text-gray-400">info@vamshirealestate.com</li>
                <li className="text-gray-400">Hyderabad, Telangana</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Vamshi Realestate. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
