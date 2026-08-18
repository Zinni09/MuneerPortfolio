export default function CTA() {
  return (
    <section id="connect" className="py-24 bg-[#2C5F5F]">
      <div className="max-w-4xl mx-auto px-12 text-center">
        <h2 className="font-serif text-5xl font-bold text-white mb-6">
          Let's Connect
        </h2>
        <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
          Whether you want to discuss academics, share opportunities, or just say hello — I am always happy to connect with like-minded people.
        </p>
        <div className="flex items-center justify-center gap-6">
          <a
            href="mailto://loonatmuneer@gmail.com"
            className="px-8 py-3 bg-white text-[#2C5F5F] rounded-full font-medium hover:bg-white/90 transition-colors cursor-pointer whitespace-nowrap"
          >
            Send an Email
          </a>
          <a
            href="tel:+27711505341"
            className="px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors cursor-pointer whitespace-nowrap"
          >
            Call Me
          </a>
        </div>
      </div>
    </section>
  );
}