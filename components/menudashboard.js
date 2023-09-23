import React from 'react';

const DashboardMenu = () => {
  return (
    <body>
        <div className="bg-gray-800 w-64 h-screen text-white">
          <div className="p-4">
            <h1 className="text-2xl font-semibold mb-4">Perfil</h1>
            {/* Display the empty circle as a placeholder */}
            <div className="empty-circle"></div>
          </div>
          <ul className="space-y-2 mt-6">
            <li className="px-4 py-2 hover:bg-gray-700">ID</li>
            <li className="px-4 py-2 hover:bg-gray-700">Puesto</li>
            <li className="px-4 py-2 hover:bg-gray-700">Correo</li>
            <li className="px-4 py-2 hover:bg-gray-700">Editar perfil</li>
            {/* Add more options as needed */}
          </ul>

          <ul className="menu bg-base-200 w-56 rounded-box">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
          <li><a>Item 3</a></li>
        </ul>
        </div>
        
    </body>
  );
};


export default DashboardMenu;
