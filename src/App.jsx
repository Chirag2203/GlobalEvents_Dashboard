import React from 'react'
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import {  AdminHome, DistributionReport, CollectionReport, MilkBarSalesReport,AddManger } from './components/admin'
import { ManagerConsole, ManagerHome, MilkCollection, MilkBarSales, MilkDistribution } from './components/manager'

const App = () => {
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
          <Route path="/manager/milk-collection" element={<MilkCollection />} /> 
          <Route path="/manager/milk-bar-sales" element={<MilkBarSales />} />
          <Route path="/manager/milk-distribution" element={<MilkDistribution />} />

        </Routes>
      </Router>
      
    </div>
  )
}

export default App
