import React from 'react';

const DashboardMenu = () => {
  return (
    <div className="bg-gray-800 w-64 h-screen text-white">
      <div className="p-4">
        <h1 className="text-2xl font-semibold mb-4">Dashboard Menu</h1>
        <input
          type="text"
          placeholder="Buscar..."
          className="w-full p-2 bg-gray-700 text-white rounded focus:outline-none focus:ring"
        />
      </div>
      <ul className="space-y-2 mt-6">
        <li className="px-4 py-2 hover:bg-gray-700">Opción 1</li>
        <li className="px-4 py-2 hover:bg-gray-700">Opción 2</li>
        <li className="px-4 py-2 hover:bg-gray-700">Opción 3</li>
        <li className="px-4 py-2 hover:bg-gray-700">Opción 4</li>
        {/* Agrega más opciones según tus necesidades */}
      </ul>
    </div>
  );
};

export default DashboardMenu;
