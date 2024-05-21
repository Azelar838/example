import Sidebar from './Sidebar';
import Header from './Header';
import React from 'react';
import './index.css'

const MainLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="main-layout">
      <Sidebar />
      <div className="container">
        <Header />
        {children
      </div>
    </div>
  );
};

default MainLayout;
