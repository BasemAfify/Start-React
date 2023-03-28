import React from "react";

export default function Home() {
  return (
    <>
      <div className="bg-success p-5 d-flex justify-content-center align-items-center flex-column text-white">
        <img
          className="w-25 p-5"
          src="https://routeegypt.com/start-react/assets/img/avataaars.svg"
          alt=""
        />
        <h1>START REACT</h1>
        <div>
          <i className="fa-solid fa-star fs-3"></i>
        </div>
        <p className="fs-3 pb-5">Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </>
  );
}
