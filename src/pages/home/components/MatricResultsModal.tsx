import { useEffect, useRef } from 'react';

interface MatricResultsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MatricResultsModal({ isOpen, onClose }: MatricResultsModalProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleDownload = () => {
    const printStyles = `
      @media print {
        body * { visibility: hidden; }
        #matric-report, #matric-report * { visibility: visible; }
        #matric-report { position: absolute; left: 0; top: 0; width: 100%; margin: 0; padding: 0; }
        .no-print { display: none !important; }
      }
    `;
    const styleSheet = document.createElement('style');
    styleSheet.innerText = printStyles;
    document.head.appendChild(styleSheet);
    window.print();
    document.head.removeChild(styleSheet);
  };

  if (!isOpen) return null;

  const subjects = [
    { name: 'Accounting', mark: 92, symbol: '7' },
    { name: 'Life Sciences', mark: 86, symbol: '7' },
    { name: 'Mathematics', mark: 78, symbol: '6' },
    { name: 'English Home Language', mark: 74, symbol: '6' },
    { name: 'Afrikaans First Additional', mark: 71, symbol: '6' },
    { name: 'Physical Sciences', mark: 68, symbol: '5' },
    { name: 'Life Orientation', mark: 82, symbol: '7' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
        {/* Actions bar */}
        <div className="flex items-center justify-end gap-3 mb-3 no-print">
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#2C5F5F] text-white rounded-lg font-medium hover:bg-[#245050] transition-colors cursor-pointer whitespace-nowrap"
          >
            <i className="ri-download-line"></i>
            <span>Download PDF</span>
          </button>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/90 text-[#1A1A1A] hover:bg-white transition-colors cursor-pointer"
          >
            <i className="ri-close-line text-xl"></i>
          </button>
        </div>

        {/* Report Card */}
        <div
          id="matric-report"
          ref={contentRef}
          className="bg-white rounded-2xl p-10 shadow-2xl"
        >
          {/* Header */}
          <div className="text-center border-b-2 border-[#2C5F5F] pb-6 mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#2C5F5F] text-white mb-4">
              <i className="ri-graduation-cap-line text-3xl"></i>
            </div>
            <h2 className="font-serif text-3xl font-bold text-[#1A1A1A]">
              Azaadville Muslim School
            </h2>
            <p className="text-[#6B6B6B] mt-1">National Senior Certificate Results</p>
          </div>

          {/* Student Info */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <p className="text-xs uppercase tracking-wider text-[#6B6B6B] mb-1">Student Name</p>
              <p className="font-semibold text-[#1A1A1A]">Muneer Loonat</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-[#6B6B6B] mb-1">Year of Completion</p>
              <p className="font-semibold text-[#1A1A1A]">2021</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-[#6B6B6B] mb-1">Examination Number</p>
              <p className="font-semibold text-[#1A1A1A]">2108105432</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-[#6B6B6B] mb-1">Status</p>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#2C5F5F]/10 text-[#2C5F5F] rounded-full text-sm font-medium">
                <i className="ri-checkbox-circle-line"></i>
                Bachelor's Pass
              </span>
            </div>
          </div>

          {/* Results Table */}
          <div className="border border-[#E8E8E8] rounded-xl overflow-hidden mb-8">
            <div className="bg-[#F5F1ED] px-6 py-3 flex items-center justify-between">
              <span className="text-sm font-semibold text-[#1A1A1A]">Subject</span>
              <div className="flex gap-8">
                <span className="text-sm font-semibold text-[#1A1A1A] w-16 text-center">Mark (%)</span>
                <span className="text-sm font-semibold text-[#1A1A1A] w-12 text-center">Symbol</span>
              </div>
            </div>
            {subjects.map((subject) => (
              <div
                key={subject.name}
                className="px-6 py-3.5 flex items-center justify-between border-t border-[#E8E8E8] hover:bg-[#FAFAF8] transition-colors"
              >
                <span className="text-[#1A1A1A] font-medium">{subject.name}</span>
                <div className="flex gap-8">
                  <span
                    className={`w-16 text-center font-bold ${
                      subject.mark >= 80
                        ? 'text-[#2C5F5F]'
                        : subject.mark >= 70
                          ? 'text-[#D97642]'
                          : 'text-[#1A1A1A]'
                    }`}
                  >
                    {subject.mark}%
                  </span>
                  <span className="w-12 text-center font-medium text-[#6B6B6B]">{subject.symbol}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-[#F5F1ED] rounded-xl p-5 text-center">
              <p className="text-3xl font-serif font-bold text-[#2C5F5F]">7</p>
              <p className="text-xs uppercase tracking-wider text-[#6B6B6B] mt-1">Distinctions</p>
            </div>
            <div className="bg-[#F5F1ED] rounded-xl p-5 text-center">
              <p className="text-3xl font-serif font-bold text-[#D97642]">82%</p>
              <p className="text-xs uppercase tracking-wider text-[#6B6B6B] mt-1">Average</p>
            </div>
            <div className="bg-[#F5F1ED] rounded-xl p-5 text-center">
              <p className="text-3xl font-serif font-bold text-[#1A1A1A]">92%</p>
              <p className="text-xs uppercase tracking-wider text-[#6B6B6B] mt-1">Top Subject</p>
            </div>
          </div>

          {/* Footer note */}
          <p className="text-center text-xs text-[#6B6B6B] mt-8">
            This document is a digital representation of the official National Senior Certificate results.
          </p>
        </div>
      </div>
    </div>
  );
}