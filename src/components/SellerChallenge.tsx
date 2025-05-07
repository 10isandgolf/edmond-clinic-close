
const SellerChallenge = () => {
  return (
    <section id="story" className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-trio-charcoal">The Seller's Challenge</h2>
            <p className="text-lg mb-6 text-gray-700">
              Rates climbed, retirement clock ticked, and he'd just signed a fresh 5-year extension. We needed a buyer who valued both relationship and credit.
            </p>
            <p className="text-lg text-gray-700">
              After 16 years of ownership, our client was ready to transition into retirement. 
              With market conditions shifting and interest rates on the rise, the timing seemed challenging. 
              Yet the property's strong tenant—Mercy Health—presented a unique opportunity for the right buyer.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Retired property owner" 
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-5 -left-5 bg-trio-teal text-white p-4 rounded-lg shadow-lg">
              <p className="font-bold">16 Years</p>
              <p className="text-sm">Of ownership before sale</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellerChallenge;
