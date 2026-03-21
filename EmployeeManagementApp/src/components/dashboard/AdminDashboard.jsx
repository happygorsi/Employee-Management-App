import React from 'react'
import Header from '../empContent/Header'
import CreateTask from '../admContent/CreateTask'
import AllTask from '../admContent/AllTask'

const AdminDashboard = () => {
    return (
        <div className=' h-screen w-full p-7 bg-black'>
            <Header />   
            <CreateTask />
            <AllTask />
        </div>
    )
}

export default AdminDashboard
