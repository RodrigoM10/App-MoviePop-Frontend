import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import PublicLayout from '../layout/PublicLayout'
import Home from '../pages/Home';
import SearchPage from '../pages/SearchPage';

function PublicRoutes() {
    return (
            <PublicLayout>
                <Routes>
                    <Route  path="/" element={<Home />} />
                    <Route  path="/searchPage" element={<SearchPage />} />
                </Routes>
            </PublicLayout>
    );
}

export default PublicRoutes;