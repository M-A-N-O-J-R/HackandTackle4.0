import React, { Component,Link } from 'react'
import logo from '../img/ssn1.png'
import logo1 from '../img/ieeel.png'
import logo2 from '../img/logom.png'
import * as AiIcons from 'react-icons/ai';
import * as FiIcons from "react-icons/fi";
import * as FaIcons from "react-icons/fa";
export class contact extends React.PureComponent{
    render() {
        return (
           <div id="contact" >
               <div className="container-fluid">
                   <div className="row row1" >
                       <div className="col-lg-3 col-md-3 col-sm-3 logo-div col-6" >
                         <img src={logo} alt="logo" id="ssn-img"  width="100px"/>
                         <img src={logo2} alt="logo" id="hack"  width="110px"/>
                         {/* <img src={logo1} alt="logo" id="ieee-img"  width="100px"/> */}
                       </div>
                   </div>
                   <div className="row row2" >
                       <div className="col-lg-4 col-md-4 col-sm-4  col-xs-4 col-6 add-div" >
                         <p style={{color:"#f79303"}}>SSN College of Engineering<br></br>
                            Old Mahabalipuram Road<br></br>
                         Kalavakkam - 603 110<br></br>
                         Tamil Nadu, India</p>
                       </div>
                       {/* <div className="col-lg-4 col-md-4 col-sm-4 col-6 number-div" >
                            <p style={{color: '#eeeeee'}}>Dr. T. Sree Sharmila<br></br>
                            <span style={{color: '#f79303',fontSize:'17px',fontFamily:'Helvetica'}}>+91 - 9940582630</span></p>
                            <p style={{color: '#eeeeee'}}>Dr. V. Thanikachalam<br></br>
                            <span style={{color: '#f79303',fontFamily:'Helvetica'}}>+91 - 9962453600</span></p>
                            <p style={{color: '#eeeeee'}}>Ms. J. K. Josephine Julina<br></br>
                            <span style={{color: '#f79303',fontFamily:'Helvetica'}}>+91 - 9962580503</span></p>
                       </div> */}
                       {/* <div className="col-lg-3 col-md-4 col-sm-4 list-cont col-6 add-div" style={{textAlign: "justify"}}>
                       <ul className="ul-list2">
                        <li><a href="/#beg" className="nav-item-2" >Home</a></li>
                        <li><a href="/#about" className="nav-item-2" >About</a></li>
                        <li><a href="/#track" className="nav-item-2">Tracks</a></li>
                        <li><a href="/#timeline" className="nav-item-2">Timeline</a></li>
                        <li><a href="/#sponsor" className="nav-item-2">Sponsors</a></li>
                        <li><a href="/#faq" className="nav-item-2">FAQs</a></li>

        </ul>
                       </div>  */}
                       <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 col-3 icon-div" >
                            <div className="icon-cont">
                             <a href="https://www.instagram.com/ieee_ssn/" id="insta"><AiIcons.AiOutlineInstagram /></a>
                            </div>
                            <div className="icon-cont">
                                <a href="https://www.facebook.com/ssnieee/" id="face"><FaIcons.FaFacebookF /></a>
                            </div>
                            <div className="icon-cont">
                                <a href="mailto:hackathon.ssnieee@gmail.com" id="mail"><FiIcons.FiMail /></a>
                            </div>
                            <div className="icon-cont">
                                <a href="" id="what"><AiIcons.AiOutlineWhatsApp /></a>
                            </div> 
                       </div>
                   </div>
                   <div className="dev-name">
                       
                            
                       <p>Copyright © 2022 SSN. All rights reserved</p>
                   </div>
                      
                   
                  
               </div>
           </div>
        )
    }
}

export default contact
