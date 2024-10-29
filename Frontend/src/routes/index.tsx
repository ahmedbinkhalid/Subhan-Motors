import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Main';
import { About } from '../pages/About';
import { BuyCar } from '../pages/BuyCar';
import { SellCar } from '../pages/SellCar';
import { Blogs } from '../pages/Blogs';
import { Contact } from '../pages/Contact';
import { Layout } from '../components/organism/AllPagesLayout';
import { ModalProvider } from '../components/organism/AllPagesLayout/ModalContext';
import { MyAds } from '../pages/MyAds';

export const AppRouter : React.FC = () => {
  return (
    <ModalProvider>
    <Router>
    <Routes>
     
        <Route path='/' element = {  <Layout> <Home /> </Layout>} />
        <Route path='/about' element = {<Layout> <About /> </Layout>} />
        <Route path='/buyCar' element = {<Layout> <BuyCar /> </Layout>} />
        <Route path='/sellCar' element = {<Layout> <SellCar /> </Layout>} />
        <Route path='/blogs' element = {<Layout> <Blogs /> </Layout>} />
        <Route path='/contact' element = { <Layout><Contact /> </Layout>} />
        <Route path='/myAds' element = { <Layout><MyAds/> </Layout>} />
    </Routes>
</Router>
</ModalProvider>
  )
}