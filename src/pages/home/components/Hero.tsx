export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="w-full flex">
        <div className="w-2/5 flex items-center justify-center px-12">
          <div className="space-y-4">
            <h1 className="font-serif text-[120px] leading-[0.9] font-bold text-black">
              Muneer
            </h1>
            <h1 className="font-serif text-[140px] leading-[0.9] font-bold text-black">
              Loonat
            </h1>
            <h1 className="font-serif text-[100px] leading-[0.9] font-bold text-black">
              Accounting
            </h1>
            <p className="text-lg text-[#4A4A4A] mt-6 max-w-md leading-relaxed">
              Final Year BCom Accounting Student at the University of the Witwatersrand. Aiming for PGDip in Specialized Accountancy.
            </p>
          </div>
        </div>
        <div className="w-3/5 relative px-12 flex items-center">
          <div className="relative w-full h-[700px]">
            <img
              src="https://readdy.ai/api/search-image?query=Professional%20accounting%20student%20workspace%20with%20laptop%20calculator%20financial%20documents%20warm%20natural%20lighting%20clean%20modern%20desk%20neutral%20earth%20tones%20editorial%20photography%20organized%20professional%20environment&width=900&height=700&seq=hero-muneer-01&orientation=landscape"
              alt="Accounting workspace"
              className="w-full h-full object-cover rounded-3xl"
            />
            <div className="absolute bottom-8 left-8 bg-[#F5F1ED] px-6 py-3 rounded-full flex items-center gap-2">
              <span className="text-sm font-medium">University of the Witwatersrand</span>
              <i className="ri-arrow-right-up-line text-lg"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}