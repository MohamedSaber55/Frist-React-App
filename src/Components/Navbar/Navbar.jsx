import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark py-4">
          <div className="container">
            <a className="navbar-brand fw-bolder fs-2">
              START REACT
            </a>
            <button
              className="navbar-toggler py-3 text-white border"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <div>
                <p className="fs-6 fw-bold m-0">MENU <i class="fa-solid fa-bars"></i></p>
              </div>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5 text-uppercase fw-bold">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to=''>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='Portfolio'>PORTFOLIO</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='Parent'>About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='Contact'>Contact</Link>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
