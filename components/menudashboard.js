import React from 'react';

const DashboardMenu = () => {
  return (
    
     <div className="sidebar">
          <div className="p-4">
            <h1 className="text-2xl font-semibold mb-4">Perfil</h1>
            <div className="empty-circle"></div>
          </div>    
        <div className="flex flex-col w-full">
          <ul className="space-y-0 mt-1 profile-font">
            <li className="px-4 py-2 hover:bg-gray-700">ID</li>
            <li className="px-4 py-2 hover:bg-gray-700">Puesto</li>
            <li className="px-4 py-2 hover:bg-gray-700">Correo</li>
            <li className="px-4 py-2 hover:bg-gray-700">Editar perfil</li>
          </ul>
    
          <div className="divider"></div> 
        
          <div className="btn space-y-1">
            <button className="btn">Seguridad</button>
            <button className="btn">Desperdicios</button>
            <button className="btn">Costos</button>
            <button className="btn">Productividad</button>
            <button className="btn">Calidad</button>
        </div>
        </div>
    </div>
  );
};

export default DashboardMenu;
