import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Home from './Pages/Home/Home'
import AuthProvider from './providers/AuthProvider'
import ThemeProvider from './providers/ThemeProvider'
import MyReviews from './Pages/MyReviews/MyReviews'
import EditProfile from './Pages/EditProfile/EditProfilePage'
import EditProfilePage from './Pages/EditProfile/EditProfilePage'
import ChangePassPage from './Pages/ChangePAss/ChangePassPage'

function App() {

  return (
   <div>
    <ThemeProvider>
      <AuthProvider> 
        <Routes>
          <Route
              path='/'
              element={<Navigate to='/login' />}
            />
              <Route
              path='login'
              element={<Login />}
            />
            <Route 
              path='register'
              element={<Register/>}
            />
            <Route
              path='home'
              element={<Home/>}
            />
            <Route
              path='myReviews'
              element={<MyReviews/>}
            />
            <Route
              path='editProfile'
              element={<EditProfilePage/>}
            />
             <Route
              path='changePass'
              element={<ChangePassPage/>}
            />

         
        </Routes>
       </AuthProvider>
    </ThemeProvider> 
   </div>
  )
}

export default App
