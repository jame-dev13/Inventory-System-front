import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./styles/landPage.css";
import employees from "../assets/employees.jpg";
import customers from "../assets/customers.webp";
import providers from "../assets/providers.webp";
import sales from "../assets/sales.jpg";
import graphic from "../assets/graphic.webp";


export const LandingPage = () => {
  return (
    <>
      <NavBarLandPage />
      <BodyLandPage />
      <Footer />
    </>
  );
}

const NavBarLandPage = () => {
  const [active, setActive] = useState("home")
  const handleClickActive = (name) => setActive(name)

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light bg-dark rounded shadow-lg fixed-top">
        <div className="container-fluid">
          <button className="navbar-toggler bg-gradient border-2 border-black" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fa-solid fa-bars py-2"></i>
          </button>
          <div className="collapse navbar-collapse p-2" id="navbarNavDropdown">
            <ul className="navbar-nav justify-content-evenly w-100">
              <li className="nav-item text-center position-relative p-1" >
                <a className={"nav-link".concat(active === "about" ? " active" : "")} href="#about" onClick={() => handleClickActive("about")}>About</a>
              </li>
              <li className="nav-item text-center position-relative p-1" >
                <a className={"nav-link".concat(active === "services" ? " active" : "")} href="#services" onClick={() => handleClickActive("services")}>Services</a>
              </li>
              <li className="nav-item text-center position-relative p-1" >
                <a className={"nav-link".concat(active === "contact" ? " active" : "")} href="#contact" onClick={() => handleClickActive("contact")}>Contact</a>
              </li>
              <li className='nav-item text-center position-relative p-1'>
                <Link to={"/signIn"} className='btn btn-outline-info'>SignIn</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

const BodyLandPage = () => {
  return (
    <>
      <main className='bg-dark container-fluid min-vh-100 d-flex flex-column gap-2 text-info' id="about">
        <article className='row flex-wrap text-center gap-1 justify-content-center align-content-center align-items-center'>
          <h4 className='fst-italic'>- - - - Welcome - - - -</h4>
          <h1 className='fst-italic'>P.O.S. Software.</h1>
          <h5 className='fst-italic text-break text-wrap text'>P.O.S. Softwares allows you to take control over your products, providers, customers, employees and sales, the primary objetive of this kind of software its gives you more control over your different actions and records, generates reports, graphing key metrics on a dashboard, it helps you to understand better things like: how much you're selling?, who's selling more?, who's not selling?, who buys?, when?, how much?, etc. Also, you can take administrative control over everything that you manages (products, customers, etc)</h5>
          <Link to={"/signIn"} className='linkTo p-2 btn btn-outline-danger'>Explore more</Link>
        </article>
        <ServicesInfo />
      </main>
    </>
  );
}

const ServicesInfo = () => {
  return (
    <>
      <article className='row justify-content-center text-center gap-3' id="services">
        <h3 className='fst-italic'>Services</h3>
        <ul className='list-unstyled'>
          <li>
            <CardInfo title="User - Employees" description={"Efficiently manage all your users and employees with real-time performance insights. Track activity, monitor productivity, and access clear summaries of their contributions to your business"} imgSrc={employees} alt={""} />
          </li>
          <li>
            <CardInfo title="Customers" description={"Manage your customers with ease and stay in control of your sales relationships. Identify top buyers, detect inactive customers, and make smarter decisions based on purchasing behavior."} imgSrc={customers} alt={""} />
          </li>
          <li>
            <CardInfo title="Providers - Products" description={"Keep full control over your suppliers and products. Select the items you need, manage partner relationships, and maintain complete records of your inventory sources."} imgSrc={providers} alt={""} />
          </li>
          <li>
            <CardInfo title="Sales" description={"Manage all your sales operations with a clean and intuitive interface. Review recent and past sales, and instantly generate summaries to understand trends and performance."} imgSrc={sales} alt={""} />
          </li>
          <li>
            <CardInfo title="Visualize information" description={"Enjoy a clean, intuitive view of your data and gain clear insights into your business’s strengths and weaknesses."} imgSrc={graphic} alt={""} />
          </li>
        </ul>
      </article>
    </>
  );
}

const CardInfo = ({ title, description, imgSrc, alt }) => {
  return (
    <div className="card bg-secondary shadow-lg border-0 rounded-4 overflow-hidden h-100 mb-2" id="card">
      <div className="row g-0 align-items-center">

        {/* Imagen */}
        <div className="col-md-5">
          <img
            src={imgSrc}
            alt={alt}
            className="img-fluid h-100 w-100 object-fit-cover"
          />
        </div>

        {/* Texto */}
        <div className="col-md-7">
          <div className="card-body p-4">

            {title && (
              <h5 className="card-title fw-bold mb-3 text-info">
                {title}
              </h5>
            )}

            <p className="card-text text-black lh-base">
              {description}
            </p>

          </div>
        </div>

      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-4 mt-5">
      <div className="container">

        <div className="row gy-4">

          {/* Company Info */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-3 text-info">Your Company</h5>
            <p className="text-secondary">
              Empowering businesses with smart, intuitive and efficient solutions
              to manage every aspect of their operations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h6 className="fw-bold mb-3 text-info">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-secondary text-decoration-none">Home</a></li>
              <li><a href="#about" className="text-secondary text-decoration-none">About</a></li>
              <li><a href="#services" className="text-secondary text-decoration-none">Services</a></li>
              <li><a href="#contact" className="text-secondary text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4">
            <h6 className="fw-bold mb-3 text-info">Follow Us</h6>
            <div className="d-flex gap-3">
              <a href="#" className="text-secondary fs-4"><i className="fa-brands fa-facebook"></i></a>
              <a href="#" className="text-secondary fs-4"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" className="text-secondary fs-4"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="#" className="text-secondary fs-4"><i className="fa-brands fa-linkedin"></i></a>
            </div>
          </div>

        </div>

        <hr className="border-secondary mt-4" />

        <div className="text-center text-secondary">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>

      </div>
    </footer>
  );
};