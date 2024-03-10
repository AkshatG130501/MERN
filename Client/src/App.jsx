import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import HomePage from "./pages/homePage/HomePage";
import ProfilePage from "./pages/profilePage/ProfilePage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { themeSettings } from "./theme";
import './App.css'
import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import LoginPage from "./pages/loginPage/LoginPage";




function App() {

  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<LoginPage/>} />
        <Route path='/home' element={isAuth ? <HomePage/> : <Navigate to='/'/>} />
        <Route path="/profile/:userId" element={isAuth ? <ProfilePage/> : <Navigate to="/"/>}/>
      </Route>
    )
  )
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router}/>
      </ThemeProvider>
    </>
  )
}

export default App
