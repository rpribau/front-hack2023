import React from 'react';

const DashboardMenu = () => {
  return (
        <div className="bg-gray-800 w-64 h-screen text-white">
          <div className="p-4">
            <h1 className="text-2xl font-semibold mb-4">Perfil</h1>
            <div className="empty-circle"></div>
          </div>
    
        <div className="flex flex-col w-full">
          <ul className="space-y-2 mt-6 profile-font">
            <li className="px-4 py-2 hover:bg-gray-700">ID</li>
            <li className="px-4 py-2 hover:bg-gray-700">Puesto</li>
            <li className="px-4 py-2 hover:bg-gray-700">Correo</li>
            <li className="px-4 py-2 hover:bg-gray-700">Editar perfil</li>
          </ul>
          
        <div className="divider"></div> 

        <ul className="space-y-2 mt-6 text-center databases-font">
          <li className="inline-block">
            <button className="btn">Seguridad</button>
          </li>
          <li className="inline-block">
            <button className="btn">Desperdicio</button>
          </li>
          <li className="inline-block">
            <button className="btn">Costos</button>
          </li>
          <li className="inline-block">
            <button className="btn">Productividad</button>
          </li>
          <li className="inline-block">
            <button className="btn">Calidad</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardMenu;
