import React, { useEffect } from 'react'
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import {  AdminHome, DistributionReport, CollectionReport, MilkBarSalesReport,AddManger } from './components/admin'
import{ManagerHome,ViewEachEvent, ManageEvents, BookTickets, EachEventTickets, Customers, ManageTickets, CreateNewEvent, EditEachEvent, EditEvents, QuickTickets, ManagePresetTicket} from "./components/manager"
import { ToastContainer } from 'react-toastify'

const App = () => {
  useEffect(() => {
    if (localStorage.theme === 'dark' || !('theme' in localStorage) ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  },[])
  
  return (
    <div>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path="/admin/home" element={<AdminHome />} />
          <Route path="/admin/distribution-report" element={<DistributionReport />} />
          <Route path="/admin/milk-bar-sales" element={<MilkBarSalesReport />} />
          <Route path="/admin/collection-report" element={<CollectionReport />} />
          <Route path="/admin/add-manager" element={<AddManger />} />


          <Route path="/manager/home" element={<ManagerHome />} />
          <Route path="/manager/manage-events" element={<ManageEvents />} />
          <Route path="/manager/manage-events/create" element={<CreateNewEvent />} />
          <Route path="/manager/manage-events/edit" element={<EditEvents/>} />
          <Route path="/manager/manage-events/edit/event" element={<EditEachEvent/>} />
          <Route path="/manager/manage-events/view" element={<ViewEachEvent />} />

          <Route path='/manager/book-tickets/quick-tickets' element={<QuickTickets />} />
          <Route path='/manager/book-tickets/manage-preset-tickets' element={<ManagePresetTicket />} />
          <Route path="/manager/book-tickets" element={<BookTickets />} />
          <Route path="/manager/customers" element={<Customers />} />
          <Route path="/manager/manage-tickets" element={<ManageTickets />} />
          <Route path='/manager/manage-tickets/view' element={<EachEventTickets/>} />

          

        </Routes>
      </Router>
      
    </div>
  )
}

export default App
