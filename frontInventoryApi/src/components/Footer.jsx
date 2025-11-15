const Footer = () => {
   return (
      <footer className="footer bg-dark text-light pt-5 pb-4 mt-5">
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
}

export default Footer;