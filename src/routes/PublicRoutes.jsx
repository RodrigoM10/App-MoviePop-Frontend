import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import PublicLayout from '../layout/PublicLayout'
import Home from '../pages/Home';

function PublicRoutes() {
    return (
            <PublicLayout>
                <Routes>
                    <Route  path="/" element={<Home />} />
                </Routes>
            </PublicLayout>
    );
}

export default PublicRoutes;