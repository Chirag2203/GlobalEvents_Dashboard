import React, { useEffect } from 'react'
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import {  AdminHome, DistributionReport, CollectionReport, MilkBarSalesReport,AddManger } from './components/admin'
import{ManagerHome, ManageEvents, BookTickets, Customers, ManageTickets} from "./components/manager"
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
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin/home" element={<AdminHome />} />
          <Route path="/admin/distribution-report" element={<DistributionReport />} />
          <Route path="/admin/milk-bar-sales" element={<MilkBarSalesReport />} />
          <Route path="/admin/collection-report" element={<CollectionReport />} />
          <Route path="/admin/add-manager" element={<AddManger />} />


          <Route path="/manager/home" element={<ManagerHome />} />
          <Route path="/manager/manage-events" element={<ManageEvents />} />
          <Route path="/manager/book-tickets" element={<BookTickets />} />
          <Route path="/manager/customers" element={<Customers />} />
          <Route path="/manager/manage-tickets" element={<ManageTickets />} />

          

        </Routes>
      </Router>
      
    </div>
  )
}

export default App
