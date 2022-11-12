import React, { Component } from 'react'
import avataaars from '../../images/avataaars.svg'
import './Home.css'
export default class Home extends Component {


  render() {
    return (
      <>
        <header className='backgroundhome py-5'>
          <div className="container h-100">
            <div className="row justify-content-center align-items-center h-100">
              <img className='w-25 mt-4 rounded-circle mb-3 mx-auto' src={avataaars} />
              <h1 className='mb-3 home-title'>START REACT</h1>
              <div class="divider-custom divider-light py-4 d-flex justify-content-center align-items-center">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon px-3"><i class="fas fa-star fs-2"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
              <p className='fs-5'>Graphic Artist - Web Designer - Illustrator</p>
            </div>
          </div>
        </header>
      </>
    )
  }
}
