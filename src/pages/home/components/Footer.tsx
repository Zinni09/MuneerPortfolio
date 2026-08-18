export default function Footer() {
  return (
    <footer id="contact" className="bg-[#1A2E2E] text-white py-20">
      <div className="max-w-7xl mx-auto px-12">
        <div className="flex gap-16 mb-16">
          <div className="w-[40%]">
            <h3 className="text-6xl font-bold mb-8">
              Muneer<br />Loonat
            </h3>
            <p className="text-lg text-gray-400 mb-12 leading-relaxed">
              Final year BCom Accounting student at the University of the Witwatersrand. Passionate about learning, growth, and building a career in accountancy.
            </p>
            <div className="flex gap-6">
              <a
                href="mailto://loonatmuneer@gmail.com"
                className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
              >
                <i className="ri-mail-line text-xl"></i>
              </a>
              <a
                href="tel:+27711505341"
                className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
              >
                <i className="ri-phone-line text-xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/muneer-loonat-0bb27a427?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
              >
                <i className="ri-linkedin-line text-xl"></i>
              </a>
            </div>
          </div>
          <div className="w-[30%] space-y-12">
            <div>
              <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-3">Location</h4>
              <p className="text-white leading-relaxed">
                37 Muzaffar Crescent<br />
                Azaadville, 1754<br />
                South Africa
              </p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-3">Email</h4>
              <a href="mailto://loonatmuneer@gmail.com" className="text-white hover:text-[#D4A574] transition-colors cursor-pointer">
                loonatmuneer@gmail.com
              </a>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-3">Phone</h4>
              <a href="tel:+27711505341" className="text-white hover:text-[#D4A574] transition-colors cursor-pointer">
                071 150 5341
              </a>
              <p className="text-gray-500 text-sm mt-1">Alternate: 071 887 5806</p>
            </div>
          </div>
          <div className="w-[30%]">
            <div className="w-full h-[400px] rounded-2xl overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20accounting%20workspace%20vertical%20composition%20with%20calculator%20financial%20reports%20warm%20natural%20lighting%20clean%20desk%20neutral%20earth%20tones%20editorial%20photography&width=280&height=400&seq=footer-muneer-01&orientation=portrait"
                alt="Accounting workspace"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
        <div className="border-t border-[#333333] pt-8 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            &copy; 2026 Muneer Loonat. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm">
            <a href="/privacy" className="text-gray-500 hover:text-white transition-colors cursor-pointer">
              Privacy
            </a>
            <a href="/terms" className="text-gray-500 hover:text-white transition-colors cursor-pointer">
              Terms
            </a>
            <a 
              href="https://readdy.ai/?ref=logo" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-500 hover:text-white transition-colors cursor-pointer"
            >
              Website Builder
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}