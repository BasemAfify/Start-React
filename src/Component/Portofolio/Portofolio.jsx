import React from 'react'
import img1 from '../.././images/cabin.png'
import img2 from '../.././images/cake.png'
import img3 from '../.././images/circus.png'
import img4 from '../.././images/game.png'
import img5 from '../.././images/safe.png'
import img6 from '../.././images/submarine.png'

export default function Portofolio() {
  return (
    <>
      <div className="container mb-5 pb-5">
        <div className="d-flex flex-column justify-content-center align-items-center pb-5">
          <h2 className=" mt-5  text-center p-2 fs-1">Portofolio</h2>
          <i class="fa-solid fa-star fa-xl"></i>
        </div>
        <div className="row gy-4">
          <div className="col-md-4 contain overflow-hidden position-relative pointer">
            <img className="w-100 rounded-2   " src={img1} alt="" />
          </div>
          <div className="col-md-4 contain overflow-hidden position-relative pointer pointer">
            <img className="w-100 rounded-2  " src={img2} alt="" />
          </div>
          <div className="col-md-4 contain overflow-hidden position-relative pointer">
            <img className="w-100 rounded-2  " src={img3} alt="" />
          </div>
          <div className="col-md-4 contain overflow-hidden position-relative pointer">
            <img className="w-100 rounded-2  " src={img4} alt="" />
          </div>
          <div className="col-md-4 contain overflow-hidden position-relative pointer">
            <img className="w-100 rounded-2  " src={img5} alt="" />
          </div>
          <div className="col-md-4 contain overflow-hidden position-relative pointer">
            <img className="w-100 rounded-2  " src={img6} alt="" />
          </div>
        </div>
      </div>
    </>
  );
  
}
