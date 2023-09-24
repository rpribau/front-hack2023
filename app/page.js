import React from 'react';
import Dashboard from '@/components/menudashboard';
import Chatbot from '@/components/chat';
import DocView from './documentView';

const Home = () => {
  return (
    <body>
      <div className="flex">
  
        <DocView />
      </div>
    </body>
  );
};

export default Home;
