import React from 'react';
import Dashboard from '@/components/menudashboard';
import Chatbot from '@/components/chat';

const Home = () => {
  return (
    <body>
      <div className="flex">
        <Dashboard />
        <Chatbot />
      </div>
    </body>
  );
};

export default Home;
