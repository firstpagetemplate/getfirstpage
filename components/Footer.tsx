
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="font-bold text-xl">First Page <span className="text-brand">Template</span></p>
          <p className="text-slate-400 text-sm">Solusi Cerdas, UMKM Naik Kelas.</p>
        </div>
        
        <p className="text-slate-500 text-xs">
          &copy; {new Date().getFullYear()} First Page Template. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
