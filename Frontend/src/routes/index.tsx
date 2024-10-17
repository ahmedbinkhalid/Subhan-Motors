import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Main';
import { About } from '../pages/About';
import { BuyCar } from '../pages/BuyCar';
import { SellCar } from '../pages/SellCar';
import { Blogs } from '../pages/Blogs';
import { Contact } from '../pages/Contact';
import { Layout } from '../components/organism/AllPagesLayout';

export const AppRouter : React.FC = () => {
  return (
    <Router>
    <Routes>
     
        <Route path='/' element = {  <Layout> <Home /> </Layout>} />
        <Route path='/about' element = {<Layout> <About /> </Layout>} />
        <Route path='/buyCar' element = {<Layout> <BuyCar /> </Layout>} />
        <Route path='/sellCar' element = {<Layout> <SellCar /> </Layout>} />
        <Route path='/blogs' element = {<Layout> <Blogs /> </Layout>} />
        <Route path='/contact' element = { <Layout><Contact /> </Layout>} />
    </Routes>
</Router>
  )
}