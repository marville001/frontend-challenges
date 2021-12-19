import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ComingSoon from './components/ComingSoon'
import Footer from './components/Footer'
import Header from './components/Header'
import Challenges from './pages/Challenges'
import TipCalculatorApp from './pages/TipCalculatorApp/TipCalculatorApp'

const App = () => {
  return (
    <div className='bg-gray-100 h-screen pb-0 m-0'>
      <Header />
      <div className='min-h-[90vh] bg-slate-200'>
        <Routes>
          <Route path="/" element={<Challenges/>} />
          <Route path="/challenge/tca1do" exact element={<TipCalculatorApp/>} />
          <Route path="/challenge/gusa2df" exact element={<ComingSoon/>} />
          <Route path="/challenge/osc3do" exact element={<ComingSoon/>} />
          <Route path="/challenge/ttd4do" exact element={<ComingSoon/>} />
          <Route path="/challenge/ipc5do" exact element={<ComingSoon/>} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
