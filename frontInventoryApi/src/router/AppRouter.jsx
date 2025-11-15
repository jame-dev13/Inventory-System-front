import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginForm from '../views/LoginForm';
import Home from '../views/Home';
import { LandingPage } from '../views/LandingPage';
import { LayoutLandPage } from '../layouts/LayoutLandPage';
import { LayoutLogin } from '../layouts/LayoutLogin';
import { LayoutProtectedPages } from '../layouts/LayoutProtectedPages';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route element={<LayoutLandPage />}>
          <Route path='/' element={<LandingPage />} />
        </Route>
        <Route element={<LayoutLogin />}>
          <Route path='/signIn' element={<LoginForm />} />
        </Route>
        <Route element={<LayoutProtectedPages />}>
          <Route path='/home' element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}
