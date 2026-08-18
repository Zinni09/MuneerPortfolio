interface NavbarProps {
  scrolled: boolean;
}

export default function Navbar({ scrolled }: NavbarProps) {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        <div className="text-xl font-bold tracking-tight">
          MUNEER LOONAT
        </div>
        <div className="flex items-center gap-12">
          <a href="#about" className="text-sm uppercase tracking-wider hover:text-[#2C5F5F] transition-colors cursor-pointer">
            About
          </a>
          <a href="#education" className="text-sm uppercase tracking-wider hover:text-[#2C5F5F] transition-colors cursor-pointer">
            Education
          </a>
          <a href="#experience" className="text-sm uppercase tracking-wider hover:text-[#2C5F5F] transition-colors cursor-pointer">
            Experience
          </a>
          <a href="#volunteer" className="text-sm uppercase tracking-wider hover:text-[#2C5F5F] transition-colors cursor-pointer">
            Volunteer
          </a>
          <a href="#contact" className="px-6 py-2 bg-[#2C5F5F] text-white text-sm uppercase tracking-wider rounded-full hover:bg-[#234848] transition-colors cursor-pointer whitespace-nowrap">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}