
const QuickStats = () => {
  return (
    <section className="bg-white py-8 -mt-16 relative z-20 shadow-xl rounded-t-3xl">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="p-4 text-center">
            <div className="stat-number">$2.275M</div>
            <div className="text-sm uppercase tracking-wider mt-2 font-medium text-gray-600">Sale Price</div>
            <div className="text-xs text-gray-500">(May 2025)</div>
          </div>
          
          <div className="p-4 text-center">
            <div className="stat-number">7.30%</div>
            <div className="text-sm uppercase tracking-wider mt-2 font-medium text-gray-600">Cap Rate</div>
            <div className="text-xs text-gray-500">Market-beating</div>
          </div>
          
          <div className="p-4 text-center">
            <div className="text-lg font-bold">Mercy Health</div>
            <div className="text-sm uppercase tracking-wider mt-2 font-medium text-gray-600">Tenant</div>
            <div className="text-xs text-gray-500">Oklahoma Communities</div>
          </div>
          
          <div className="p-4 text-center">
            <div className="text-lg font-bold">NNN Lease</div>
            <div className="text-sm uppercase tracking-wider mt-2 font-medium text-gray-600">Structure</div>
            <div className="text-xs text-gray-500">2% annual bumps</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickStats;
