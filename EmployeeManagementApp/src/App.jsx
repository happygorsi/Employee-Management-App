import React, { useContext, useEffect, useState } from 'react'
import Login from './components/auth/Login'
import EmployeeDashboard from './components/dashboard/EmployeeDashboard'
import AdminDashboard from './components/dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
   const authData = useContext(AuthContext)

  const handleLogin = (email, password) => {

    if(email == 'admin@me.com' && password == '123') {
        setUser('admin')
    } else if (email == 'user@me.com' && password == '123') {
        setUser('employee')
    } else {
      alert("Invalid Credentials")
    }
  } 


 
 

  return (
    <div>
      <>
      {!user ? <Login handleLogin = {handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard /> : ''}
      {user == 'employee' ? <EmployeeDashboard /> : ''}

      </>
    </div>
  )
}

export default App
