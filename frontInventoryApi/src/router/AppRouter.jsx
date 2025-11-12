import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginForm from '../views/LoginForm';
import { LandingPage } from '../views/LandingPage';
export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<LandingPage />}/>
            <Route path='/signIn' element={<LoginForm />}/>
        </Routes>
    </>
  );
}
