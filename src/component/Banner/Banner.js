import React from 'react';
import logo from '../../img/logo.jpeg'
import './Banner.css'
const Banner = () => {
    return (
        <div className="container d-flex row banner-container my-2">
             
              <div className="col-lg-6 col-sm-12 ">
                <img className=" logos " src={logo} alt=""/>
              </div>
              <div className="col-lg-6 col-sm-12  quots ">
              <h2 className="mt-5 text-center text-danger">Creative It Institute<br/></h2><h3 className="text-center">is always with you to learn something new</h3>
                  <p className="mb-3 text-center">Come to us <br/> Learn with passion, make skill, do hardwork <br />make success your life</p>
              </div>
        </div>
    );
};

export default Banner;