import React from "react";

export default function About() {
    return (
      <>
        <div className=" p-5 bg-success p-5 d-flex justify-content-center align-items-center flex-column text-white">
          <h2 className="fs-1 pt-5">ABOUT</h2>
          <div>
            <i class="fa-solid fa-star fa-xl"></i>
          </div>
          <div className="d-flex lh-lg justify-content-center py-3 fs-5 pb-5 row">
            <p className="w-25 col-md-3">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
            <p className="w-25 col-md-3">
              You can create your own custom avatar for the masthead, change the
              icon in the dividers, and add your email address to the contact
              form to make it fully functional!
            </p>
          </div>
        </div>
      </>
    );
}
