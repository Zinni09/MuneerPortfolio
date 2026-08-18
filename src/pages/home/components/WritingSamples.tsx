export default function WritingSamples() {
  const jobs = [
    {
      category: 'Retail & Sales',
      title: 'Western Accessories Fishing, Krugersdorp',
      period: 'Dec 2021 - Jan 2022 & Mar 2025 - Aug 2025',
      details: 'Cashier, Warehouse Clerk, Sales Floor',
      image: 'https://readdy.ai/api/search-image?query=Retail%20store%20interior%20with%20organized%20shelves%20and%20products%20warm%20natural%20lighting%20clean%20professional%20environment%20neutral%20earth%20tones%20editorial%20photography&width=400&height=300&seq=job001&orientation=landscape'
    },
    {
      category: 'Retail & Cashier',
      title: 'Fashion World Village Square, Randfontein',
      period: 'December 2022 & 2023',
      details: 'Cashier, Daily Register Reconciliation',
      image: 'https://readdy.ai/api/search-image?query=Fashion%20retail%20boutique%20interior%20with%20clothing%20racks%20warm%20natural%20lighting%20clean%20modern%20professional%20environment%20neutral%20earth%20tones%20editorial%20photography&width=400&height=300&seq=job002&orientation=landscape'
    },
    {
      category: 'Quality Assurance',
      title: 'Matric Marking Quality Assessor',
      period: 'December 2025',
      details: 'Hoerskool Florida - Mark Verification & Organization',
      image: 'https://readdy.ai/api/search-image?query=Organized%20stack%20of%20exam%20papers%20and%20documents%20on%20clean%20desk%20warm%20natural%20lighting%20professional%20office%20environment%20neutral%20earth%20tones%20editorial%20photography&width=400&height=300&seq=job003&orientation=landscape'
    }
  ];

  return (
    <section id="experience" className="py-32 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-12">
        <div className="mb-16">
          <h2 className="font-bold text-5xl mb-3">Work Experience</h2>
          <div className="w-20 h-1 bg-[#2C5F5F]"></div>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-[#E0E0E0] overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={job.image}
                  alt={job.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <span className="text-xs uppercase tracking-wider text-[#2C5F5F] font-medium">
                  {job.category}
                </span>
                <h3 className="font-serif text-2xl font-bold mt-3 mb-4 leading-tight">
                  {job.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>{job.period}</span>
                </div>
                <p className="text-[#6B6B6B] text-sm mt-3 leading-relaxed">{job.details}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Experience */}
        <div className="mt-16 space-y-8">
          <div className="bg-white rounded-2xl border border-[#E0E0E0] p-8 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-xl bg-[#2C5F5F] flex items-center justify-center flex-shrink-0">
                <i className="ri-store-line text-2xl text-white"></i>
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-2xl font-bold text-[#1A1A1A] mb-2">Western Accessories Fishing, Krugersdorp</h3>
                <p className="text-sm text-[#6B6B6B] mb-4">Part-time Employment &mdash; December 2021 - January 2022 &amp; March 2025 - August 2025 (weekends)</p>
                <ul className="space-y-2 text-[#4A4A4A]">
                  <li className="flex items-start gap-2">
                    <i className="ri-check-line text-[#2C5F5F] mt-1"></i>
                    <span>Cashier, responsible for completing transactions on a day-to-day basis, ensuring that all items were charged correctly and that no customer was over-charged or under-charged.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-check-line text-[#2C5F5F] mt-1"></i>
                    <span>Warehouse clerk, packing and moving stock in the warehouse, finding the correct price for stock.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-check-line text-[#2C5F5F] mt-1"></i>
                    <span>Worked on the floor as part of sales personnel, attending to customers and helping them find the items they were looking for.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-[#E0E0E0] p-8 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-xl bg-[#2C5F5F] flex items-center justify-center flex-shrink-0">
                <i className="ri-shopping-bag-line text-2xl text-white"></i>
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-2xl font-bold text-[#1A1A1A] mb-2">Fashion World Village Square, Randfontein</h3>
                <p className="text-sm text-[#6B6B6B] mb-4">Part-time Employment &mdash; December 2022 &amp; 2023</p>
                <ul className="space-y-2 text-[#4A4A4A]">
                  <li className="flex items-start gap-2">
                    <i className="ri-check-line text-[#2C5F5F] mt-1"></i>
                    <span>Cashier, responsible for completing transactions on a day-to-day basis, ensuring that all items were charged correctly.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-check-line text-[#2C5F5F] mt-1"></i>
                    <span>In charge of totaling registers and reconciling daily balances against cash sales and credit sales made throughout the day to ensure no errors were made.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-[#E0E0E0] p-8 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-xl bg-[#2C5F5F] flex items-center justify-center flex-shrink-0">
                <i className="ri-file-list-3-line text-2xl text-white"></i>
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-2xl font-bold text-[#1A1A1A] mb-2">Matric Marking Quality Assessor</h3>
                <p className="text-sm text-[#6B6B6B] mb-4">Hoerskool Florida &mdash; December 2025</p>
                <ul className="space-y-2 text-[#4A4A4A]">
                  <li className="flex items-start gap-2">
                    <i className="ri-check-line text-[#2C5F5F] mt-1"></i>
                    <span>Tasked with ensuring the total marks were tallied correctly.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-check-line text-[#2C5F5F] mt-1"></i>
                    <span>Organizing papers by school and district.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-check-line text-[#2C5F5F] mt-1"></i>
                    <span>Trusted to work with the highest level of honesty, integrity, confidentiality and due diligence as these marks determine the futures of thousands of students.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-check-line text-[#2C5F5F] mt-1"></i>
                    <span>Worked from 7am-7pm, Sunday-Sunday, with strict deadlines, providing experience in working under pressure with a team.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}