
import React from 'react';

const Header: React.FC = () => {
  const logoUrl = "https://ik.imagekit.io/hijar/favicon_orange_nZdGmQxhG.png?updatedAt=1769044850518&ik-s=26c0fe12b748484130c41f9eb73212542dc82a4d";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src={logoUrl} 
            alt="First Page Logo" 
            className="h-10 w-10 object-contain"
          />
          <span className="font-bold text-slate-900 hidden sm:block">First Page Template</span>
        </div>
      </div>
    </header>
  );
};

export default Header;