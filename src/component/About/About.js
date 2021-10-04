import React, { useEffect, useState } from 'react';
import Footer from '../../Footer/Foter';
import Header from '../Header/Header';
import './About.css'
// import logo3 from '../../img/logo3.png'
const About = () => {

    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="row about-container my-3">
                        <div className="col-sm-12 col-lg-6" >
                            <h2 className="my-5 p-5 h2-text text-center">We <span className="text-danger">Belive</span> in skill, if you have <span className="text-danger">skill</span> <span className="text-danger">you can</span> shine in life</h2>
                    </div>
                </div>
              

                <div  className="row about-quote">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                       
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h2 className="h2-text1 my-5 p-5 ">More then 10 thowsand student learned from us and they are in corporate life now</h2>
                    </div>
                    
                </div>

                <div className="my-3" >
                        <p className="text-center">We help organizations of all types and sizes prepare for the path ahead — wherever it leads. Our curated collection of business and technical courses help companies, governments, and nonprofits go further by placing learning at the center of their strategies.</p>
                </div>
            </div>
            <Footer className=""></Footer>
        </div>
    );
};

export default About;