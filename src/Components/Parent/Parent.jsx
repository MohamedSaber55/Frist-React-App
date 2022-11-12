import React, { Component } from 'react'
import './Parent.css'

export default class Parent extends Component {
    

  render() {
    return (
        <>
        <div className="anotherabout ">
        <div className="container text-center">
          <h2 className='text-center text-uppercase text-white mb-5'>ABOUT</h2>
          <div class="divider-custom divider-light pb-4 d-flex justify-content-center align-items-center">
            <div class="divider-custom-line "></div>
            <div class="divider-custom-icon px-3"><i class="fas fa-star fs-2 text-white"></i></div>
            <div class="divider-custom-line"></div>
          </div>
          <div className="row">
            <div className="col-md-6 text-white">
              <p className=''>
              Freelancer is a free bootstrap theme</p><p>created by Route. The download</p><p>includes the complete source files</p><p>including HTML, CSS, and JavaScript</p><p>as well as optional SASS stylesheets</p><p> for easy customization.</p>
            </div>
            <div className="col-md-6 text-white">
              <p className=''>
              Freelancer is a free bootstrap theme </p> <p> created by Route. The download </p> <p> includes the complete source files </p> <p> including HTML, CSS, and JavaScript </p> <p> as well as optional SASS stylesheets</p><p> for easy customization.
              </p>
            </div>
          </div>
        </div>
        </div>
        </>
    )
  }
}
