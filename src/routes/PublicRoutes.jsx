import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginForm } from '../components/auth/LoginForm';
import { RegisterForm } from '../components/auth/RegisterForm';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import MovieDetails from '../pages/MoviesDetails';
import SearchPage from '../pages/SearchPage';
import { gapi } from 'gapi-script';

const clientId = process.env.REACT_APP_CLIENT_GOOGLE_ID;

function PublicRoutes() {

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };
    gapi.load('client:auth2', start)
  });

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searchPage" element={<SearchPage />} />
        <Route path="/movieDetails/:movieId" element={<MovieDetails />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </MainLayout>
  );
}

export default PublicRoutes;