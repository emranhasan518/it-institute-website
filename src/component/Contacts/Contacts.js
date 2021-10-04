import React from 'react';
import Footer from '../../Footer/Foter';
import Header from '../Header/Header';
import './Contacts.css'
import san from '../../img/crea-stu.jpg'
import  denver from '../../img/ayman.jpg'
import dublin  from '../../img/xm.jpg'
const Contacts = () => {
    return (
        <div className="container" >
            <Header></Header>
            <div className="">
                <div className="contact">
                    <hr />
                    <h2>Contact: 010-221-396</h2>
                    <h3>Email: creativeit1@yahoo.com</h3>
                    <h3>Facebook: www.facebook.com/creariveit</h3>
                    <h2>Address: Nahar mansion, Dhanmondi 22/A, Dhanmondi, Dhaka.</h2>
                    <hr />
                </div>
                <div>
                    <h2 className="text-center">Our Classes</h2>
                    <div className="row m-3">
                            <div className="col-lg-4 col-sm-12 col-md-6">
                                <div><img  className=" Office-img" src={san}/></div>
                                <h2 className="text-center">Oreantation</h2>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-md-6 ">
                                <div><img className="Office-img" src={denver}/></div>
                                <h2 className="text-center">Student with Ayman Sadik</h2>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-md-6 ">
                                <div><img className="Office-img" src={dublin}/></div>
                                <h2 className="text-center">ICIU exam</h2>
                            </div >
                            <div className="text-center"> <p className="text-center">For partnership and business development inquiries, please contact us at xx@Gmail.com</p>
                                <p>   Check out our Help and Support center to find quick answers to your questions.</p>
                            </div>
                           
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contacts;