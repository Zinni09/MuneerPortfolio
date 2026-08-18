import { useState } from 'react';

export default function FeaturedWork() {
  const handleMatricDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://storage.helloreaddy.io/project_files/02d98473-0f0b-4e50-87c2-7c505abc2b43/5a287651-2298-4342-bbc3-0d09e421d240_Results.pdf';
    link.download = 'Muneer_Loonat_Matric_Results_2021.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const educationItems = [
    {
      title: 'University of the Witwatersrand',
      category: 'BCom Accounting',
      description: 'Currently in my final year of BCom Accounting, hoping to further study PGDip in specialized accountancy next.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20university%20campus%20building%20with%20clean%20architecture%20warm%20natural%20lighting%20professional%20academic%20environment%20neutral%20earth%20tones%20editorial%20photography%20high%20quality&width=600&height=800&seq=edu001&orientation=portrait',
      year: '2023 - Current'
    },
    {
      title: 'Azaadville Muslim School',
      category: 'Matriculated 2021',
      description: 'Completed matric with strong academic performance across sciences and commerce subjects.',
      image: 'https://readdy.ai/api/search-image?query=School%20classroom%20with%20desks%20and%20books%20warm%20natural%20lighting%20clean%20organized%20educational%20environment%20neutral%20earth%20tones%20editorial%20photography&width=600&height=400&seq=edu002&orientation=landscape',
      year: '2010 - 2021'
    },
    {
      title: 'Academic Focus',
      category: 'Accountancy Path',
      description: 'Building a strong foundation in financial reporting, auditing, taxation, and management accounting.',
      image: 'https://readdy.ai/api/search-image?query=Stack%20of%20accounting%20textbooks%20with%20calculator%20and%20financial%20documents%20warm%20natural%20lighting%20clean%20desk%20neutral%20earth%20tones%20editorial%20photography&width=500&height=700&seq=edu003&orientation=portrait',
      year: '2023 - 2026'
    },
    {
      title: 'Matric Results',
      category: 'Academic Achievement',
      description: 'Strong performance in Mathematics, Accounting, and Life Sciences.',
      image: 'https://readdy.ai/api/search-image?query=Academic%20certificate%20and%20report%20card%20on%20clean%20desk%20warm%20natural%20lighting%20professional%20composition%20neutral%20earth%20tones%20editorial%20photography&width=500&height=350&seq=edu004&orientation=landscape',
      year: '2021'
    },
    {
      title: 'PGDip Accountancy',
      category: 'Future Study',
      description: 'Planning to pursue a Postgraduate Diploma in Specialized Accountancy.',
      image: 'https://readdy.ai/api/search-image?query=Graduate%20cap%20and%20diploma%20certificate%20on%20clean%20desk%20with%20warm%20natural%20lighting%20professional%20composition%20neutral%20earth%20tones%20editorial%20photography%20minimalist%20wide%20shot&width=400&height=200&seq=edu005&orientation=landscape&nocache=true',
      year: '2027'
    },
    {
      title: 'Core Subjects',
      category: 'Final Year Modules',
      description: 'Accounting III, Taxation III, Auditing III, ManFin III.',
      image: 'https://readdy.ai/api/search-image?query=Open%20textbooks%20with%20mathematical%20equations%20and%20graphs%20warm%20natural%20lighting%20clean%20study%20desk%20neutral%20earth%20tones%20editorial%20photography&width=400&height=300&seq=edu006&orientation=landscape',
      year: '2026'
    }
  ];

  return (
    <section id="education" className="py-28 bg-[#FAFAF8] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-12 text-[180px] font-serif font-bold text-[#F0EDE8] select-none leading-none">
        25
      </div>
      
      <div className="max-w-7xl mx-auto px-12 relative">
        {/* Header */}
        <div className="flex items-start justify-between mb-16">
          <div>
            <h2 className="font-serif text-6xl font-bold text-[#1A1A1A] italic relative inline-block">
              Education
              <svg className="absolute -bottom-2 left-0 w-48 h-3" viewBox="0 0 200 12" fill="none">
                <path d="M2 8C40 4 80 6 120 5C160 4 180 7 198 6" stroke="#D97642" strokeWidth="4" strokeLinecap="round" className="opacity-80"/>
              </svg>
            </h2>
            <p className="text-[#6B6B6B] mt-6 text-lg max-w-md">A foundation built on strong academics and a passion for accountancy</p>
          </div>
        </div>

        {/* Editorial Grid Layout */}
        <div className="relative">
          {/* Row 1 - Staggered Hero Layout */}
          <div className="flex gap-8 mb-8">
            {/* Large Featured Card */}
            <div className="flex-1 group cursor-pointer">
              <div className="relative bg-[#1A1A1A] rounded-2xl overflow-hidden h-[480px] hover:shadow-2xl transition-all duration-500">
                <img
                  src={educationItems[0].image}
                  alt={educationItems[0].title}
                  className="w-full h-full object-cover object-top opacity-80 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent"></div>
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-[1px] bg-[#D97642]"></span>
                    <span className="text-xs uppercase tracking-[0.2em] text-[#D97642]">{educationItems[0].category}</span>
                  </div>
                  <h3 className="text-4xl font-serif font-bold text-white mb-3 leading-tight">{educationItems[0].title}</h3>
                  <p className="text-white/70 text-base max-w-md">{educationItems[0].description}</p>
                  <div className="mt-6 flex items-center gap-4">
                    <span className="text-white/50 text-sm">{educationItems[0].year}</span>
                    <span className="px-3 py-1 rounded-full border border-white/20 text-white/60 text-xs">Final Year</span>
                  </div>
                </div>
                {/* Floating Number */}
                <div className="absolute top-8 right-8 text-8xl font-serif font-bold text-white/10">01</div>
              </div>
            </div>

            {/* Vertical Stack */}
            <div className="w-[340px] flex flex-col gap-8">
              {/* Top Card - Minimal - Matric Results */}
              <div
                className="group cursor-pointer flex-1"
                onClick={handleMatricDownload}
              >
                <div className="relative h-full bg-[#F5F0E8] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div className="absolute top-6 left-6 right-6">
                    <span className="text-xs uppercase tracking-[0.15em] text-[#8B7355]">{educationItems[3].category}</span>
                    <h3 className="text-xl font-serif font-bold text-[#1A1A1A] mt-2 leading-snug">{educationItems[3].title}</h3>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-[140px]">
                    <img
                      src={educationItems[3].image}
                      alt={educationItems[3].title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute bottom-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 text-[#1A1A1A] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <i className="ri-download-line text-lg"></i>
                  </div>
                </div>
              </div>

              {/* Bottom Card - Quote Style */}
              <div className="group cursor-pointer">
                <div className="relative bg-[#2C5F5F] rounded-2xl p-8 h-[200px] hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <i className="ri-double-quotes-l text-4xl text-white/20 absolute top-6 left-6"></i>
                  <div className="relative z-10 h-full flex flex-col justify-end">
                    <p className="text-white/90 font-serif italic text-lg leading-relaxed mb-4">"Education is the most powerful weapon which you can use to change the world."</p>
                    <span className="text-white/50 text-sm">&mdash; Nelson Mandela</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 - Three Column Layout */}
          <div className="grid grid-cols-3 gap-8">
            {/* Card with Image Top */}
            <div className="group cursor-pointer">
              <div className="relative rounded-2xl overflow-hidden h-[320px] hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <img
                  src={educationItems[1].image}
                  alt={educationItems[1].title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-xs uppercase tracking-[0.15em] text-[#D97642] mb-2 block">{educationItems[1].category}</span>
                  <h3 className="text-xl font-serif font-bold text-white">{educationItems[1].title}</h3>
                  <p className="text-white/60 text-sm mt-2">{educationItems[1].description}</p>
                </div>
              </div>
            </div>

            {/* Tall Portrait Card */}
            <div className="group cursor-pointer row-span-2">
              <div className="relative rounded-2xl overflow-hidden h-full hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <img
                  src={educationItems[2].image}
                  alt={educationItems[2].title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                {/* Decorative Line */}
                <div className="absolute top-8 left-8 w-12 h-[2px] bg-[#D97642]"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="text-xs uppercase tracking-[0.2em] text-white/60 mb-3 block">{educationItems[2].category}</span>
                  <h3 className="text-3xl font-serif font-bold text-white mb-3 leading-tight">{educationItems[2].title}</h3>
                  <p className="text-white/70">{educationItems[2].description}</p>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-white/40 text-sm">{educationItems[2].year}</span>
                    <div className="flex items-center gap-2 text-white/60 text-sm group-hover:text-[#D97642] transition-colors">
                      <span>Learn More</span>
                      <i className="ri-arrow-right-line"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Outlined Card */}
            <div className="group cursor-pointer">
              <div className="relative rounded-2xl border-2 border-[#E8E8E8] p-6 h-[320px] hover:border-[#D97642] hover:shadow-lg transition-all duration-500 hover:-translate-y-2 bg-white">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs uppercase tracking-[0.15em] text-[#6B6B6B]">{educationItems[4].category}</span>
                  <span className="text-xs text-[#6B6B6B]">{educationItems[4].year}</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#1A1A1A] mb-3">{educationItems[4].title}</h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">{educationItems[4].description}</p>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="h-[100px] rounded-xl overflow-hidden">
                    <img
                      src={educationItems[4].image}
                      alt={educationItems[4].title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Wide Card */}
            <div className="group cursor-pointer">
              <div className="relative rounded-2xl overflow-hidden h-[200px] hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <img
                  src={educationItems[5].image}
                  alt={educationItems[5].title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-center">
                  <span className="text-xs uppercase tracking-[0.15em] text-[#D97642] mb-2">{educationItems[5].category}</span>
                  <h3 className="text-xl font-serif font-bold text-white">{educationItems[5].title}</h3>
                  <p className="text-white/60 text-sm mt-1">{educationItems[5].description}</p>
                </div>
              </div>
            </div>

            {/* Stats Card - Matric Results */}
            <div className="group cursor-pointer">
              <div className="relative rounded-2xl bg-[#1A1A1A] p-6 h-[200px] hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-center justify-between h-full">
                  <div>
                    <span className="text-6xl font-serif font-bold text-white">92%</span>
                    <p className="text-white/50 text-sm mt-2">Accounting</p>
                  </div>
                  <div className="text-right">
                    <span className="text-4xl font-serif font-bold text-[#D97642]">86%</span>
                    <p className="text-white/50 text-sm mt-2">Life Sciences</p>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6 h-[2px] bg-gradient-to-r from-[#D97642] via-white/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}