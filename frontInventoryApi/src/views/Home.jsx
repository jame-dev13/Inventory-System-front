import React from 'react'
import { SideBar } from '../components/SideBar';
import { ContentPane } from '../components/ContentPane';
import "./styles/Home.css";
import { Navbar } from '../components/Navbar';
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div className='col'>
        <div className='row min-vh-100'>
          <div className="w-auto bg-gradient">
            <SideBar />
          </div>
          <div className="col">panel</div>
        </div>
      </div>
  )
}

export default Home;