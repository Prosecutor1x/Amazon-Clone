import React from 'react';
import {Home} from '../pages/Home.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Checkout} from '../pages/Checkout';
import { Header } from '../components/Header.js';
import { Login} from '../pages/login';

export function Nav() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<><Header/> <Home/></>} />
          <Route path="/checkout" element={<><Header/> <Checkout/></>} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </Router>
  );
}

