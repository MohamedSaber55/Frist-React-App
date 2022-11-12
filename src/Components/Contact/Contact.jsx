import React, { Component } from 'react'
import './Contact.css'
export default class Contact extends Component {
  render() {
    return (
      <>
        <div className="contact mb-5">
          <div className="container">
            <h2 className='text-center text-uppercase text-black mb-3'>CONTACT ME</h2>
            <div class="divider-custom divider-light pb-4 d-flex justify-content-center align-items-center">
            <div class="divider-custom-line bg-black"></div>
            <div class="divider-custom-icon px-3"><i class="fas fa-star fs-2"></i></div>
            <div class="divider-custom-line bg-black"></div>
          </div>
            <div className="row">
              <div className="form-group">
                <div className="col-md-8 mx-auto ">
                  <input className='inputstyle w-100 fs-5 p-4 mb-3' placeholder='Name' type="text" />
                  <input className='inputstyle w-100 fs-5 p-4 mb-3' placeholder='Email Adress' type="emial" />
                  <input className='inputstyle w-100 fs-5 p-4 mb-3' placeholder='Phone Number' type="text" />
                  <textarea className='inputstyle w-100  p-4 mb-3' rows="4" placeholder='Message' type="text"></textarea>
                  <button className='btnstyle px-4 py-3 fs-5' type='submit'>Send</button>

                </div>

              </div>

            </div>
          </div>
        </div>
      </>
    )
  }
}
