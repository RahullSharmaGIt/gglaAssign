import './App.css'
import FacialExpression from './Components/FacialExpression'
import {createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom';
import Admin from './Components/Admin'
import AuthPage from './Components/AuthPage'
import ProtectedRoute from './Components/ProtectedRoute'
import { clearSession, setSession } from './utils/auth'
import { getToken, getUser } from './utils/auth'

function App() {
  let routes=createBrowserRouter([
    {
      path:"/",
      element:getToken() ? <Navigate to={(getUser()?.role === "admin" ? "/wp-admin" : "/player")} replace /> : <AuthPage onAuth={(token, user) => {
        setSession(token, user);
        window.location.href = user.role === "admin" ? "/wp-admin" : "/player";
      }}/>
    },
    {
      path:"/player",
      element:<ProtectedRoute><FacialExpression onLogout={() => {
        clearSession();
        window.location.href = "/";
      }}/></ProtectedRoute>
    },
    {
      path:"/wp-admin",
      element:<ProtectedRoute roles={["admin"]}><Admin onLogout={() => {
        clearSession();
        window.location.href = "/";
      }}/></ProtectedRoute>
    },
    {
      path:"*",
      element:<Navigate to="/" replace />
    }
  ])

  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
