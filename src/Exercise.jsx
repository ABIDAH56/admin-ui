import React from 'react'
import UserCard from './UserCard';

function Exercise() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          User Cards
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <UserCard 
                    name="Mercy"
                    email="Mercy32@gmail.com"
                    street="Jl. Depok no 78"
                    city="Solo"
                    />
          <UserCard 
                    name="Marko"
                    email="Marko75@gmail.com"
                    street="Jl. Nusantara no 28"
                    city="Madiun"
                    />
          <UserCard 
                    name="Abidah Syujana"
                    email="abidwaring@gmail.com"
                    street="Jl. Pindrikan lor"
                    city="Semarang"
                    />
        </div>
      </div>    
    </>
  );
}

export default Exercise;