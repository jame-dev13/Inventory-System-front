import React, { useState } from 'react';
import "./styles/login.css";
import useLogin from "../hooks/useLogin";
import { Link } from 'react-router-dom';

const LoginForm = () => {
   return (
      <main className='container d-flex flex-wrap flex-column gap-2 p-4  justify-content-center align-content-center'>
         <div className='row h-100 rounded bg-gradient flex-column gap-3'>
            <LoginHeader />
            <Form />
         </div>
      </main>
   );
};

const LoginHeader = () => (
   <div className='col d-flex flex-column justify-content-center align-content-center text-center'>
      <header className='fst-italic fs-3 text-break text-wrap m-2 text-info'>
         <h2 className='mb-3'>SignIn P.O.S System.</h2>
         <h5>Welcome! Please enter your details.</h5>
      </header>
   </div>
);


const Input = ({ type, placeholder, name, id, value, onChange, required }) => (
   <input
      type={type}
      placeholder={placeholder}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      required={required}
      className='rounded p-2 flex-fill mb-2'
   />
);

const PasswordInput = ({ placeholder, value, onChange, name, id, required }) => {
   const [visible, setVisible] = useState(false);
   return (
      <>
         <div className="input-group">
            <input type={visible ? 'text' : 'password'}
               placeholder={placeholder}
               name={name}
               id={id}
               value={value}
               onChange={onChange}
               required={required}
               className='rounded p-2 flex-fill mb-2'
            />
            <button type="button"
               className='button-visible'
               onClick={() => setVisible(!visible)}
               tabIndex={-1}
            ><i className={visible ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'}
               aria-label={visible ? 'Allows the visibility of the password.' : 'Hiddes the password value.'}></i></button>
         </div>
      </>);
}

const Form = () => {
   const { data, error, loginHandler } = useLogin();
   const [formData, setFormData] = useState({
      email: "",
      password: ""
   });

   const handleChange = (e) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value
      });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("Datos enviados:", formData);
      await loginHandler(formData);
      if (data != null) {
         console.log("data: " + data.access)
         return;
      }
      console.log("error: " + error)
   };
   return(
      <div className='col'>
         <form className='d-flex flex-column gap-3'
               onSubmit={handleSubmit} required>
               <label htmlFor="email">Email address:</label>
               <Input
                  type="email"
                  placeholder="Email@domain.com"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
               />

               <label htmlFor="password">Password:</label>

               <PasswordInput
                  placeholder="Password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
               />

               <button type="submit" className="bg-gradient text-info mb-2">Submit</button>
               <span role='contentinfo' className='text-center'>
                  <Link to={"/"}>Return to Landing Page</Link>
               </span>
            </form>
      </div>
   );
}

export default LoginForm;
