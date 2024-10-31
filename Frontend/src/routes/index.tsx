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
import { OnlineBooking } from '../pages/OnlineBooking';
import { AdminLayout } from '../components/organism/admin/AdminLayout';
import { GetUsedCars } from '../pages/GetUsedCars';
import { GetBankCars } from '../pages/GetBankCars';
import { GetNewCars } from '../pages/GetNewCars';
import { AddNewCar } from '../pages/AddNewCar';
import { AddUsedOrBankCar } from '../pages/AddUsedOrBankCar';
import { AddNewBlog } from '../pages/AddNewBlog';
import { GetApprovedBlogs } from '../pages/GetApprovedBlogs';
import { GetAllQueries } from '../pages/GetAllQueries';
import { CreateNewsLetter } from '../pages/CreateNewsLetter';
import { GetAllMessages } from '../pages/GetAllMessages';
import { AdminHome } from '../pages/AdminHome';

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
        <Route path='/onlineBooking' element = { <OnlineBooking/>} />
        <Route path='/adminHome' element = { <AdminLayout><AdminHome/> </AdminLayout>} />
        <Route path='/getUsedCars' element = { <AdminLayout><GetUsedCars/> </AdminLayout>} />
        <Route path='/getBankCars' element = { <AdminLayout><GetBankCars/> </AdminLayout>} />
        <Route path='/getNewCars' element = { <AdminLayout><GetNewCars/> </AdminLayout>} />
        <Route path='/addNewCar' element = { <AdminLayout><AddNewCar/> </AdminLayout>} />
        <Route path='/addUsedOrBankCar' element = { <AdminLayout><AddUsedOrBankCar/> </AdminLayout>} />
        <Route path='/addNewBlog' element = { <AdminLayout><AddNewBlog/> </AdminLayout>} />
        <Route path='/getApprovedBlogs' element = { <AdminLayout><GetApprovedBlogs/> </AdminLayout>} />
        <Route path='/getAllQueries' element = { <AdminLayout><GetAllQueries/> </AdminLayout>} />
        <Route path='/createNewLetter' element = { <AdminLayout><CreateNewsLetter/> </AdminLayout>} />
        <Route path='/getAllMessages' element = { <AdminLayout><GetAllMessages/> </AdminLayout>} />
    </Routes>
</Router>
</ModalProvider>
  )
}