import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <>
      <section className='text-center py-5  footer'>
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-5 m-lg-0 ">
              <h4 className='text-uppercase mb-4'>LOCATION</h4>
              <p>2215 John Daniel Drive </p><p> this.forceUpdate Clark, MO 65243</p>
            </div>
            <div className="col-md-4 mb-5 m-lg-0 ">
            <h4 className='text-uppercase mb-4'>AROUND THE WEB</h4>
            <i className='fa-brands  fa-facebook-f social m-1 p-3   '></i>
            <i className='fa-brands  fa-twitter social m-1 p-3   '></i>
            <i className='fa-brands  fa-linkedin-in social m-1 p-3   '></i>
            <i className='fa-brands  fa-dribbble social m-1 p-3   '></i>

            </div>
            <div className="col-md-4 mb-4 m-lg-0 ">
            <h4 className='text-uppercase mb-4'>ABOUT FREELANCER</h4>
            <p>Freelance is a free to use, MIT</p><p> licensed Bootstrap theme </p><p> created by Route</p>

            </div>
          </div>
        </div>
      </section>


        <div className=' text-center p-3 bg-dark text-white'>
            <p>Copyright © Your Website 2021</p>
        </div>
        </>
    )
  }
}
