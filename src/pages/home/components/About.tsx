export default function About() {
  return (
    <section id="about" className="py-32 bg-[#F5F1ED] relative">
      <div className="max-w-7xl mx-auto px-12">
        <div className="flex justify-end mb-8">
          <span className="px-4 py-2 bg-[#2C5F5F] text-white text-xs uppercase tracking-wider rounded-lg">
            About
          </span>
        </div>
        <div className="flex items-start gap-20">
          <div className="flex-1 pl-[15%]">
            <h2 className="font-bold text-7xl leading-[1.1] mb-10">
              Driven to Learn &amp; Grow
            </h2>
            <div className="max-w-[580px] space-y-6 text-lg leading-relaxed text-[#4A4A4A] font-serif">
              <p>
                I am an enthusiastic and ambitious individual who is eager to learn and grow. I have developed a mature and responsible approach to any task or situation that I am presented with. I can quickly adapt to different work environments, and I am a quick learner.
              </p>
              <p>
                I am self-motivated, work orientated, responsible, methodical and patient, with the ability to operate independently and in a team environment. I am diligent and reliable with regard to my commitments.
              </p>
              <p>
                Currently in my final year of BCom Accounting at the University of the Witwatersrand, I am hoping to further study PGDip in specialized accountancy next. I am passionate about building a strong foundation in finance and accountancy.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-6 max-w-[580px]">
              <div>
                <h4 className="text-xs uppercase tracking-wider text-[#6B6B6B] mb-2">Full Name</h4>
                <p className="font-medium text-[#1A1A1A]">Muneer Loonat</p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider text-[#6B6B6B] mb-2">Date of Birth</h4>
                <p className="font-medium text-[#1A1A1A]">26 September 2003</p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider text-[#6B6B6B] mb-2">Citizenship</h4>
                <p className="font-medium text-[#1A1A1A]">South African</p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider text-[#6B6B6B] mb-2">Driver's License</h4>
                <p className="font-medium text-[#1A1A1A]">Code 08</p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider text-[#6B6B6B] mb-2">Home Language</h4>
                <p className="font-medium text-[#1A1A1A]">English</p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider text-[#6B6B6B] mb-2">Other Languages</h4>
                <p className="font-medium text-[#1A1A1A]">Afrikaans</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="w-[400px] h-[540px] rounded-[32px] overflow-hidden shadow-lg">
              <img
                src="/assest/pic.jpeg"
                alt="Muneer Loonat"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}