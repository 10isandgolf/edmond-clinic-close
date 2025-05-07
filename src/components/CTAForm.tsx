
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const CTAForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyAddress: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Request Submitted!",
        description: "We'll be in touch with you shortly to schedule your Value Strategy Call.",
      });
      
      // Redirect to Calendly (in a real implementation)
      // window.location.href = "https://calendly.com/triocre/strategy-call";
      
      // Clear form
      setFormData({
        name: '',
        email: '',
        phone: '',
        propertyAddress: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="valuation" className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="bg-trio-teal p-8 md:p-10 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">What Could Your Building Sell For?</h2>
              
              <p className="text-lg mb-6">
                Walk away with a pricing range you can take to the bank—no obligation.
              </p>
              
              <div className="border-l-4 border-white pl-4 mb-8">
                <p className="italic">
                  "If you're considering a sale in the next 12 months, our 15-minute call will give you the market intelligence you need to make an informed decision."
                </p>
              </div>
              
              <div className="mt-10 space-y-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-white text-trio-teal flex items-center justify-center font-bold">1</div>
                  <div className="ml-4">
                    <p className="font-medium">Schedule a 15-minute call</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-white text-trio-teal flex items-center justify-center font-bold">2</div>
                  <div className="ml-4">
                    <p className="font-medium">Get your custom valuation range</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-white text-trio-teal flex items-center justify-center font-bold">3</div>
                  <div className="ml-4">
                    <p className="font-medium">Decide if selling makes sense for you</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8 md:p-10">
              <h3 className="text-xl font-bold mb-6 text-trio-charcoal">Book Your 15-Minute Value Strategy Call</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Smith"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="propertyAddress" className="block text-sm font-medium text-gray-700 mb-1">Property Address (Optional)</label>
                  <Input
                    id="propertyAddress"
                    name="propertyAddress"
                    value={formData.propertyAddress}
                    onChange={handleChange}
                    placeholder="123 Main St, Oklahoma City, OK"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Information (Optional)</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us a bit about your property or situation..."
                    rows={3}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-trio-teal hover:bg-opacity-90 text-white py-3 text-lg font-medium"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Schedule Your Call Now'}
                </Button>
                
                <p className="text-xs text-center text-gray-500 mt-4">
                  By submitting this form, you agree to our <a href="#" className="underline">privacy policy</a>. We'll never share your information.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAForm;
