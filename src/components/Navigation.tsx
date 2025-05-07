
import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="font-display text-2xl font-bold text-trio-teal">TRIO CRE</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <button onClick={() => scrollTo('story')} className="text-trio-charcoal hover:text-trio-teal font-medium">Story</button>
          <button onClick={() => scrollTo('process')} className="text-trio-charcoal hover:text-trio-teal font-medium">Process</button>
          <button onClick={() => scrollTo('results')} className="text-trio-charcoal hover:text-trio-teal font-medium">Results</button>
          <button onClick={() => scrollTo('valuation')} className="bg-trio-teal text-white px-4 py-2 rounded-md font-medium hover:bg-opacity-90 transition-all">Get Valuation</button>
        </div>
        <button className="md:hidden text-trio-charcoal">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
