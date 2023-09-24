import React from 'react';
import LoginPage from '@/components/login';

const Home = () => {
  return (
    <div className="flex">
      <DashboardMenu />
      <LoginPage />
    </div>
  );
};

export default Home;
