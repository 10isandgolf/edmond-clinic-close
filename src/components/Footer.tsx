
const Footer = () => {
  return (
    <footer className="bg-trio-charcoal text-white py-12">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">TRIO CRE</h3>
            <address className="not-italic">
              3856 S. Boulevard #240<br />
              Edmond, OK<br />
              <a href="tel:4054064045" className="hover:text-trio-teal transition-colors">(405) 406-4045</a>
            </address>
          </div>
          
          <div className="md:text-right">
            <nav className="mb-6">
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-trio-teal transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-trio-teal transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-trio-teal transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-trio-teal transition-colors">Contact</a></li>
              </ul>
            </nav>
            
            <a href="#" className="text-sm hover:text-trio-teal transition-colors">Privacy Policy</a>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-white/20 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} Trio CRE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
