import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/HomePage/Homepage';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
