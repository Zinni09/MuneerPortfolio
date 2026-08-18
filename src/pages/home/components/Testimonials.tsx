import { useState } from 'react';

export default function Testimonials() {
  const volunteerWork = [
    {
      quote: "Assistant coach for Azaadville United Football Association, helping to develop little league teams. Helped train under 7s and under 8s, and served as head coach for under 9s and under 10s. Focused on developing youngsters' coordination, skill, and football ability while safeguarding their confidence and enjoyment of the sport.",
      organization: "Azaadville United Football Association",
      role: "Assistant & Head Coach",
      period: "2021 - 2023",
      avatar: "https://readdy.ai/api/search-image?query=Youth%20football%20team%20training%20session%20on%20green%20field%20warm%20natural%20lighting%20professional%20photography%20neutral%20earth%20tones%20community%20sports&width=64&height=64&seq=vol001&orientation=squarish"
    },
    {
      quote: "Assisted with packing and distributing food hampers through the Azaadville Muslim Charitable Organization. Ensured each food hamper had the correct goods, that all hampers were accounted for, and distributed them to those in need in the community. Committed to the upliftment of the community and its well-being.",
      organization: "Azaadville Muslim Charitable Organization (AMCO)",
      role: "Community Volunteer",
      period: "Ongoing",
      avatar: "https://readdy.ai/api/search-image?query=Community%20charity%20food%20packing%20volunteers%20warm%20natural%20lighting%20professional%20photography%20neutral%20earth%20tones%20community%20service%20helpful&width=64&height=64&seq=vol002&orientation=squarish"
    },
    {
      quote: "Assist in setting up various training drills and packing up equipment after training sessions, making sure that no equipment is missing. Helped kids navigate a competitive environment while safeguarding their confidence and enjoyment of the sport.",
      organization: "Azaadville United Football Association",
      role: "Youth Development",
      period: "2021 - 2023",
      avatar: "https://readdy.ai/api/search-image?query=Children%20football%20training%20equipment%20cones%20balls%20green%20field%20warm%20natural%20lighting%20professional%20photography%20neutral%20earth%20tones%20youth%20sports&width=64&height=64&seq=vol003&orientation=squarish"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? volunteerWork.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === volunteerWork.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="volunteer" className="py-32 bg-white relative">
      <div className="max-w-4xl mx-auto px-12 text-center">
        <div className="flex items-center justify-center mb-16">
          <div className="h-px w-48 bg-gray-300"></div>
          <h2 className="font-serif text-5xl font-bold mx-8">Volunteer Work</h2>
          <div className="h-px w-48 bg-gray-300"></div>
        </div>
        <div className="relative">
          <div className="flex justify-start mb-8">
            <div className="bg-black text-white px-5 py-2 rounded-full flex items-center gap-2">
              <i className="ri-heart-fill text-[#D4A574]"></i>
              <span className="font-bold">Community</span>
            </div>
          </div>
          <blockquote className="font-serif text-3xl leading-relaxed text-[#2A2A2A] mb-12">
            "{volunteerWork[currentIndex].quote}"
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <img
              src={volunteerWork[currentIndex].avatar}
              alt={volunteerWork[currentIndex].organization}
              className="w-16 h-16 rounded-full object-cover object-top"
            />
            <div className="text-left">
              <div className="font-bold text-xl">{volunteerWork[currentIndex].organization}</div>
              <div className="text-gray-500">{volunteerWork[currentIndex].role} &middot; {volunteerWork[currentIndex].period}</div>
            </div>
          </div>
          <div className="flex justify-end gap-3 mt-12">
            <button
              onClick={handlePrev}
              className="w-14 h-14 rounded-xl border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <i className="ri-arrow-left-line text-xl"></i>
            </button>
            <button
              onClick={handleNext}
              className="w-14 h-14 rounded-xl bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer"
            >
              <i className="ri-arrow-right-line text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}