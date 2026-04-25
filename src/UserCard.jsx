import React, { useState } from 'react';

const UserCard = ({ name, email, street, city, ...rest }) => {
  // State untuk melacak status klik
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = (e) => {
    e.stopPropagation(); 
    setIsClicked(true);
  };

  return (
    // text-left ditambahkan agar semua teks rata kiri sesuai gambar
    <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex flex-col gap-1 text-left">
      
      <h2 className="text-xl font-bold text-gray-800">{name}</h2>
      
      <p className="text-sm text-gray-600">
        <span className="font-semibold text-gray-700">Email:</span> {email}
      </p>
      
      <p className="text-sm text-gray-600">
        <span className="font-semibold text-gray-700">Address:</span> {street}, {city}
      </p>

      {/* Warna bg-slate-700 sangat mirip dengan abu-abu gelap di gambar tutor */}
      <button 
        onClick={handleButtonClick}
        className={`mt-3 w-max text-white text-sm py-2 px-4 rounded-md transition-all duration-300 ${
          isClicked ? 'bg-green-600' : 'bg-slate-700 hover:bg-slate-800'
        }`}
      >
        {isClicked ? 'Tombol sudah diklik' : 'Silakan Klik'}
      </button>

      {/* Bagian Other Info (Hanya untuk Leanne Graham sesuai materi Rest Parameter) */}
      {Object.keys(rest).length > 0 && (
        <div className="mt-3 pt-3 border-t border-dotted border-gray-200">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Other Info</p>
          {Object.entries(rest).map(([key, value]) => (
            <p key={key} className="text-gray-600 text-sm">
              <span className="font-medium capitalize">{key}:</span> {value}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserCard;