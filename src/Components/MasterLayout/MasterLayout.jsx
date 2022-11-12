import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Home from '../Home/Home'
import Navbar from '../Navbar/Navbar'
import Parent from '../Parent/Parent'

export default class MasterLayout extends Component {
  render() {
    return (
      <>

        <Navbar />
        <div className="default-style">
          <Outlet></Outlet>
        </div>
        <Footer />


      </>
    )
  }
}
