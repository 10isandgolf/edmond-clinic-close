
const PropertySnapshot = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-trio-charcoal">Property Snapshot</h2>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="mb-4"><span className="font-bold text-trio-charcoal">Building Size:</span> 9,757 SF</p>
                <p className="mb-4"><span className="font-bold text-trio-charcoal">Year Built:</span> 2008</p>
                <p className="mb-4"><span className="font-bold text-trio-charcoal">Land Area:</span> 48,861 SF</p>
              </div>
              <div>
                <p className="mb-4"><span className="font-bold text-trio-charcoal">Parking:</span> 41 stalls</p>
                <p className="mb-4"><span className="font-bold text-trio-charcoal">Construction:</span> Wood-frame w/ brick veneer</p>
                <p className="mb-4"><span className="font-bold text-trio-charcoal">Location:</span> Edmond, OK</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertySnapshot;
