import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Challenges from './pages/Challenges'

const App = () => {
  return (
    <div className='bg-gray-100 h-screen'>
      <Header />
      <div className='min-h-full bg-slate-200'>
        <Routes>
          <Route path="/" element={<Challenges/>} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
