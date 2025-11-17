import React, { useState } from 'react'
import { SideBar } from '../components/SideBar';
import "./styles/Home.css";
import { EmployeePane } from '../components/panes/EmployeePane';
import { ProviderPane } from '../components/panes/ProviderPane';
import { ProductsPane } from '../components/panes/ProductsPane';
import { CustomersPane } from '../components/panes/CustomersPane';
import { Orders } from '../components/panes/Orders';
import { Sales } from '../components/panes/Sales';

const Home = () => {
  const [active, setActive] = useState("Metrics");
  const components = {
    "metrics": <div>Metrics Pane</div>,
    "employees": <EmployeePane />,
    "providers": <ProviderPane />,
    "products": <ProductsPane />,
    "customers": <CustomersPane />,
    "orders": <Orders />,
    "sales": <Sales />,
    "dates": <div>Dates Pane</div>,
  }
  return (
    <div className='main-pane row g-0 gap-5'>
      <div className='col-auto'>
        <SideBar active={active} setActive={setActive} />
      </div>
        <div className='col pe-3'>
          {components[active.toLocaleLowerCase()]}
        </div>
      </div>
  )
}

export default Home;