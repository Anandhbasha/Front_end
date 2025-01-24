import React from 'react'
import Sidebar from './Components/Sidebar/Sidebar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Profile from './Pages/Profile/Profile'
import Reports from './Pages/Reports/Reports'
import Settings from './Pages/Settings/Settings'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
      <Sidebar />
      <div className='main_Contents'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/reports' element={<Reports/>}/>
          <Route path='/settings' element={<Settings/>}/>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App