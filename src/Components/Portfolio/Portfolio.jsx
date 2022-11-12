// import React, { Component } from 'react'
// import imgitem1 from '../../images/cabin.png'
// import imgitem2 from '../../images/cake.png'
// import imgitem3 from '../../images/circus.png'
// import imgitem4 from '../../images/game.png'
// import imgitem5 from '../../images/submarine.png'
// import imgitem6 from '../../images/safe.png'
// import './Portfolio.css'



// export default class About extends Component {
//   render() {

//     return (
//       <>
//         <div className="container p-5">
//           <h1 className='text-center text-uppercase mt-5 mb-5'>PORTFOLIO</h1>
//           <div class="divider-custom divider-light pb-4 d-flex justify-content-center align-items-center">
//             <div class="divider-custom-line bg-black"></div>
//             <div class="divider-custom-icon px-3"><i class="fas fa-star fs-2"></i></div>
//             <div class="divider-custom-line bg-black"></div>
//           </div>
//           <div className="row justify-content-center">
//             <div className="col-md-4 mb-5">
//               <div className="imgitem position-relative ">
//                 <img className='w-100 rounded height-auto' src={imgitem1} />
//                 <div className="img-layer w-100 h-100 position-absolute d-flex justify-content-center align-items-center">
//                   <div className="text-layer text-white text-center ">
//                     <i className='fa-solid fa-plus fa-3x '></i>

//                   </div>
//                 </div>
//               </div>

//             </div>
//             <div className="col-md-4 mb-5">
//               <div className="imgitem position-relative overflow-hidden">
//                 <img className='w-100' src={imgitem2} />
//                 <div className="img-layer w-100 h-100 position-absolute d-flex justify-content-center align-items-center">
//                   <div className="text-layer text-white text-center ">
//                     <i className='fa-solid fa-plus fa-3x '></i>

//                   </div>
//                 </div>
//               </div>

//             </div>
//             <div className="col-md-4 mb-5">
//               <div className="imgitem position-relative overflow-hidden">
//                 <img className='w-100' src={imgitem3} />
//                 <div className="img-layer w-100 h-100 position-absolute d-flex justify-content-center align-items-center">
//                   <div className="text-layer text-white text-center ">
//                     <i className='fa-solid fa-plus fa-3x '></i>

//                   </div>
//                 </div>
//               </div>

//             </div>
//             <div className="col-md-4 mb-5">
//               <div className="imgitem position-relative overflow-hidden">
//                 <img className='w-100' src={imgitem4} />
//                 <div className="img-layer w-100 h-100 position-absolute d-flex justify-content-center align-items-center">
//                   <div className="text-layer text-white text-center ">
//                     <i className='fa-solid fa-plus fa-3x '></i>

//                   </div>
//                 </div>
//               </div>

//             </div>
//             <div className="col-md-4 mb-5">
//               <div className="imgitem position-relative overflow-hidden">
//                 <img className='w-100' src={imgitem5} />
//                 <div className="img-layer w-100 h-100 position-absolute d-flex justify-content-center align-items-center">
//                   <div className="text-layer text-white text-center ">
//                     <i className='fa-solid fa-plus fa-3x '></i>

//                   </div>
//                 </div>
//               </div>

//             </div>
//             <div className="col-md-4 mb-5">
//               <div className="imgitem position-relative overflow-hidden">
//                 <img className='w-100' src={imgitem6} />
//                 <div className="img-layer w-100 h-100 position-absolute d-flex justify-content-center align-items-center">
//                   <div className="text-layer text-white text-center ">
//                     <i className='fa-solid fa-plus fa-3x '></i>

//                   </div>
//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>

//         <div className="light-box  text-center py-5">
//           <div className="container bg-light rounded-4 shadow-lg my-5 py-3 position-relative">
//             <button className="border-0 fs-3 rounded-2 position-absolute end-0 top-0 m-4 text-bg-danger"><i class="fas fa-times fa-fw "></i></button>
//             <div className="row flex-column justify-content-center align-items-center">
//               <h2 className="fw-bold fs-1 py-3">LOG CABIN</h2>
//               <div class="divider-custom divider-light pb-4 d-flex justify-content-center align-items-center">
//                 <div class="divider-custom-line bg-black"></div>
//                 <div class="divider-custom-icon px-3"><i class="fas fa-star fs-2"></i></div>
//                 <div class="divider-custom-line bg-black"></div>
//               </div>
//               <div className="image-box w-75 py-3">
//                 <img className='w-100' src={imgitem1} />
//               </div>
//               <p className="w-75 py-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
//               <button class="btn btn-danger w-25  my-5">
//                 <i class="fas fa-times fa-fw"></i>
//                 Close Window
//               </button>
//             </div>
//           </div>
//         </div>

//       </>
//     )
//   }

// }







// modal by bootstrap

import React, { Component } from 'react'
import imgitem1 from '../../images/cabin.png'
import imgitem2 from '../../images/cake.png'
import imgitem3 from '../../images/circus.png'
import imgitem4 from '../../images/game.png'
import imgitem5 from '../../images/submarine.png'
import imgitem6 from '../../images/safe.png'
import './Portfolio.css'
export default class Portfolio extends Component {
  render() {
    return (
      <>
        <section id="protofolio" className="my-5">
          <h1 className="text-center pt-4">PROTOFOLIO</h1>
          <div className="image p-3">
            <div className="line bg-black" />
            <svg
              className="svg-inline--fa fa-star fa-w-18"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="star"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              data-fa-i2svg
            >
              <path
                fill="currentColor"
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
              ></path>
            </svg>
            <div className="line bg-black" />
          </div>
          <div className="container">
            <div className="row gy-2">
              <div className="col-md-4">
                <div className="item1  position-relative">
                  <img src={imgitem1} className="w-100" />
                  <div
                    className="layer "
                    data-bs-toggle="modal"
                    data-bs-target="#cabin"
                  >
                    <i className="fas fa-plus" />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="item1  position-relative">
                  <img src={imgitem2} className="w-100" />
                  <div
                    className="layer"
                    data-bs-toggle="modal"
                    data-bs-target="#cake"
                  >
                    <i className="fas fa-plus" />
                  </div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="item1 position-relative">
                  <img src={imgitem3} className="w-100" />
                  <div
                    className="layer"
                    data-bs-toggle="modal"
                    data-bs-target="#circus"
                  >
                    <i className="fas fa-plus" />
                  </div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="item1 position-relative">
                  <img src={imgitem4} className="w-100" />
                  <div
                    className="layer"
                    data-bs-toggle="modal"
                    data-bs-target="#game"
                  >
                    <i className="fas fa-plus" />
                  </div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="item1 position-relative ">
                  <img src={imgitem5} className="w-100" />
                  <div
                    className="layer"
                    data-bs-toggle="modal"
                    data-bs-target="#safe"
                  >
                    <i className="fas fa-plus" />
                  </div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="item1 position-relative">
                  <img src={imgitem6} className="w-100" />
                  <div
                    className="layer"
                    data-bs-toggle="modal"
                    data-bs-target="#submarine"
                  >
                    <i className="fas fa-plus" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div>
          {/* modaal cabin  */}
          <div
            className="modal fade"
            id="cabin"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex={-1}
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog ">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <h1 className="text-center">LOG CABIN</h1>
                  <div className="image p-3">
                    <div className="line bg-black" />
                    <svg
                      className="svg-inline--fa fa-star fa-w-18"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      data-fa-i2svg
                    >
                      <path
                        fill="currentColor"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                      ></path>
                    </svg>
                    <div className="line bg-black" />
                  </div>
                  <img src={imgitem1} className="w-100" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Mollitia neque assumenda ipsam nihil, molestias magnam,
                    recusandae quos quis inventore quisquam velit asperiores,
                    vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                    Nam.
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    <i class="fas fa-times fa-fw"></i> Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* modal cake */}
          <div
            className="modal fade"
            id="cake"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex={-1}
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog ">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <h1 className="text-center">TASTY CAKE</h1>
                  <div className="image p-3">
                    <div className="line bg-black" />
                    <svg
                      className="svg-inline--fa fa-star fa-w-18"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      data-fa-i2svg
                    >
                      <path
                        fill="currentColor"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                      ></path>
                    </svg>
                    <div className="line bg-black" />
                  </div>
                  <img src={imgitem2} className="w-100" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Mollitia neque assumenda ipsam nihil, molestias magnam,
                    recusandae quos quis inventore quisquam velit asperiores,
                    vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                    Nam.
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    <i class="fas fa-times fa-fw"></i> Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* modal circus */}
          <div
            className="modal fade"
            id="circus"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex={-1}
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog ">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <h1 className="text-center">CIRCUS TENT</h1>
                  <div className="image p-3">
                    <div className="line bg-black" />
                    <svg
                      className="svg-inline--fa fa-star fa-w-18"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      data-fa-i2svg
                    >
                      <path
                        fill="currentColor"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                      ></path>
                    </svg>
                    <div className="line bg-black" />
                  </div>
                  <img src={imgitem3} className="w-100" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Mollitia neque assumenda ipsam nihil, molestias magnam,
                    recusandae quos quis inventore quisquam velit asperiores,
                    vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                    Nam.
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    <i class="fas fa-times fa-fw"></i> Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* modal game */}
          <div
            className="modal fade"
            id="game"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex={-1}
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog ">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <h1 className="text-center">CONTROLLER</h1>
                  <div className="image p-3">
                    <div className="line bg-black" />
                    <svg
                      className="svg-inline--fa fa-star fa-w-18"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      data-fa-i2svg
                    >
                      <path
                        fill="currentColor"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                      ></path>
                    </svg>
                    <div className="line bg-black" />
                  </div>
                  <img src={imgitem4} className="w-100" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Mollitia neque assumenda ipsam nihil, molestias magnam,
                    recusandae quos quis inventore quisquam velit asperiores,
                    vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                    Nam.
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    <i class="fas fa-times fa-fw"></i> Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* modal safe */}
          <div
            className="modal fade"
            id="safe"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex={-1}
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog ">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <h1 className="text-center">LOCKED SAFE</h1>
                  <div className="image p-3">
                    <div className="line bg-black" />
                    <svg
                      className="svg-inline--fa fa-star fa-w-18"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      data-fa-i2svg
                    >
                      <path
                        fill="currentColor"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                      ></path>
                    </svg>
                    <div className="line bg-black" />
                  </div>
                  <img src={imgitem5} className="w-100"/>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Mollitia neque assumenda ipsam nihil, molestias magnam,
                    recusandae quos quis inventore quisquam velit asperiores,
                    vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                    Nam.
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    <i class="fas fa-times fa-fw"></i> Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="submarine"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex={-1}
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog ">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <h1 className="text-center">SUBMARINE</h1>
                  <div className="image p-3">
                    <div className="line bg-black" />
                    <svg
                      className="svg-inline--fa fa-star fa-w-18"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      data-fa-i2svg
                    >
                      <path
                        fill="currentColor"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                      ></path>
                    </svg>
                    <div className="line bg-black" />
                  </div>
                  <img src={imgitem6} className="w-100" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Mollitia neque assumenda ipsam nihil, molestias magnam,
                    recusandae quos quis inventore quisquam velit asperiores,
                    vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                    Nam.
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    <i class="fas fa-times fa-fw"></i> Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}