
import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('valuation');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div 
        className="absolute inset-0 bg-center bg-cover z-[-1]" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1587351021759-3e566b3db3f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')", 
          filter: "brightness(0.6)"
        }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-trio-teal/90 to-trio-teal/70"></div>
      </div>
      
      <div className="container mx-auto text-white z-10 pt-12 pb-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Sold in 23 Days: Edmond Medical Office @ 7.3% Cap
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Learn Our 4-Step Process That Allows For Legacy Owners To Retire With Top Dollar—Even In A Rising-Rate Market.
          </p>
          <Button 
            onClick={scrollToForm}
            size="lg" 
            className="bg-white text-trio-teal hover:bg-gray-100 font-bold text-lg px-8 py-6"
          >
            Book Your 15-Minute Value Strategy Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
