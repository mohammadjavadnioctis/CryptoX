import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
  
import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'

const MRoutes = () => {
    return (
<>
        {/* <BrowserRouter > */}
            <Routes>
                <Route path="/main" element={
                    <Dashboard />

                }/>
                <Route path="/account" element={
                    <Customers />
                }/>
            </Routes>
        {/* </BrowserRouter> */}
{/* 
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/customers' component={Customers}/>
        </Switch> */}
</>
    )
}

export default MRoutes
