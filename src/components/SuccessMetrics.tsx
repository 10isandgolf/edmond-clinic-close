
import { useEffect, useState, useRef } from 'react';

const SuccessMetrics = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      id="results" 
      ref={sectionRef} 
      className={`bg-trio-teal text-white py-16 transition-all duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Success Metrics</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className={`text-center transition-all duration-500 delay-100 ${visible ? 'animate-count-up' : 'opacity-0'}`}>
            <div className="text-5xl md:text-6xl font-bold font-display">23</div>
            <div className="mt-2 text-lg">Days on Market</div>
          </div>
          
          <div className={`text-center transition-all duration-500 delay-200 ${visible ? 'animate-count-up' : 'opacity-0'}`}>
            <div className="text-5xl md:text-6xl font-bold font-display">5</div>
            <div className="mt-2 text-lg">Offers Received</div>
          </div>
          
          <div className={`text-center transition-all duration-500 delay-300 ${visible ? 'animate-count-up' : 'opacity-0'}`}>
            <div className="text-5xl md:text-6xl font-bold font-display">60</div>
            <div className="mt-2 text-lg">Days to Close</div>
          </div>
          
          <div className={`text-center transition-all duration-500 delay-400 ${visible ? 'animate-count-up' : 'opacity-0'}`}>
            <div className="text-5xl md:text-6xl font-bold font-display">110%</div>
            <div className="mt-2 text-lg">↑ From 2009 Basis</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessMetrics;
