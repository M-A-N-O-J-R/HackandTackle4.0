import React, { Component } from 'react'
import logo from '../img/logo.png'
import logo1 from '../img/women safety.png'
export class agri extends React.PureComponent {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        return (
            <div className="agri" id="start">
             <div className="agri-intro">
              <div className="intro-text" data-aos="fade-down" data-aos-delay="150" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">        
              <div className="intro-text" >        
              <p className="overlay" id="clg" style={{color: "rgb(255,255,255)"}}>SRI SIVASUBRAMANIYA NADAR COLLEGE OF ENGINEERING</p>
            <p id="dpt" className="overlay" style={{color: "#f79303"}}>DEPARTMENT OF INFORMATION TECHNOLOGY</p>
           </div>
              <p className="clg-add" style={{color: "white"}}>KALAVAKKAM  ---  603110</p>
              </div> 
              <div data-aos="fade-up" data-aos-delay="150" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">
                   <div className="img-class">
                   <img src={logo} alt="logo" id="event-logo" width="180px"/>
                       <img src={logo1} alt="logo" className="track-logo" width="110px" />
                   </div>
                   <div className=" title-des">
                     <p>💻 Hack and Tackle 4.0</p>
                     <p>👧Women Safety</p>
                   </div> 
              </div> 
              </div>
              <div className="agri-text" data-aos="fade-up" data-aos-delay="450" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">
                  <div className="container-fluid">
                    <div className="row row-agri">
                         <div className="col-xs-12">
                             <div className="agri-main jus-cla">
                             Safety is a basic right that the women of today are being denied. Women's safety has become an increasingly alarming issue throughout the world. Removing the barriers of an unsafe environment allows women fulfil their potential as individuals and as contributors to work, communities and economies. Some of the most common crimes against women are given below:
                             </div>
                             <ul className="agri-list">
                                 <li>Harassment at workplace</li>
                                 <li>Dowry deaths</li>
                                 <li>Kidnapping</li>
                                 <li>Abduction leading to rape</li>
                                 <li>Family problems</li>
                                 <li>Assault on a woman</li>
                                 <li>Trafficking</li>
                                 <li>Safe social media for women</li>
                             </ul>
                             <div className="agri-body jus-cla">Can your idea supports safe guarding women and offers a helping hand in resolving harassment issues and help in achieving a sustainable society?</div>
                         </div>
                    </div>
                  </div>
              </div>
            </div>
            
        )
    }
}
 
export default agri
