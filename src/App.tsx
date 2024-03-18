import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css';
import MainLayout from './layout';
import Home from './pages/Home';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div className="App">
       {/* <MainLayout>
        <h1>aaa</h1>
        <Home/>
      </MainLayout>  */}
      <AppRoutes/>
    </div>
  );
}

export default App;
