import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import LoginPage from './pages/loginPage/LoginPage.jsx'
import HomePage from './pages/homePage/HomePage.jsx'
import ProfilePage from './pages/profilePage/ProfilePage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<LoginPage/>} />
      <Route path='/home' element={<HomePage/>} />
      <Route path='/profile/:userId' element={<ProfilePage/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
