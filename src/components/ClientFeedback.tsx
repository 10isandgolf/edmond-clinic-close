
const ClientFeedback = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto bg-gray-50 rounded-xl p-8 md:p-10 relative">
          <svg
            className="absolute top-0 left-0 transform translate-x-4 -translate-y-4 h-16 w-16 text-trio-teal opacity-20"
            fill="currentColor"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          
          <blockquote className="mt-6">
            <p className="text-xl md:text-2xl font-medium text-gray-800 leading-relaxed">
              "Clients of Trio CRE have said time and time again, he's persistent to a fault, fights tooth and nail for my interests, and sees projects to completion."
            </p>
          </blockquote>
          
          <div className="mt-8 flex items-center">
            <div className="inline-flex flex-shrink-0 rounded-full border-2 border-white">
              <img
                className="h-12 w-12 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Client portrait"
              />
            </div>
            <div className="ml-4">
              <p className="text-base font-semibold text-gray-900">Medical Property Owner</p>
              <p className="text-sm text-gray-600">16-year Investment Partner</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientFeedback;
