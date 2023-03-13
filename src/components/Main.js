import React from 'react'
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import Dashboard from './Dashboard';

const Main = () => {
  return (
    <div>
<div className="App">
    <Navbar/>
    <Header/>
    <Dashboard/>
    <Footer/>
    {/* <Navbar2/> */}
    </div>
    </div>
  )
}

export default Main