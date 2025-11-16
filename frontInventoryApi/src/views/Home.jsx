import React, { useState } from 'react'
import { SideBar } from '../components/SideBar';
import "./styles/Home.css";
import { EmployeePane } from '../components/panes/EmployeePane';

const Home = () => {
  const [active, setActive] = useState("Metrics");
  const components = {
    "employee": <EmployeePane />
  }
  return (
    <div className='col'>
        <div className='row min-vh-100'>
          <div className="w-auto bg-gradient">
            <SideBar active={active} setActive={setActive}/>
          </div>
          <div className="main-pane col">
            {components[active.toLocaleLowerCase()]}
          </div>
        </div>
      </div>
  )
}

export default Home;