import React from 'react';


export default function Topbar() {
  return (
    <nav className="bg-black">
      <div className="container mx-auto py-3">
        <div className="flex justify-between items-center">
        <div>
          <img src={'/logo.png'} alt="Logo" className='h-6' /> {/* Alterado para h-6 */}
        </div>
        <div className="hidden md:block">
        </div>
      </div>
    </div>
  </nav>
  );
};

