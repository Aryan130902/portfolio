import React from 'react'
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Dashboard from './Dashboard';

const Main = () => {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Footer/>
    </div>
  )
}

export default Main