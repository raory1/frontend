import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import User from './pages/User';
import Profile from './pages/Profie';

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<User/>}/>
                <Route path="/create" element={<Profile/>}/>
                <Route path="/update/:id" element={<Profile/>}/>
            </Routes>
        </BrowserRouter>
    );

}