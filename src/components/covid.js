import React, { Component } from 'react'
import logo from '../img/logo.png'
import logo1 from '../img/covid.png'
export class agri extends React.PureComponent{
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
                       <img src={logo1} alt="logo" className="track-logo" width="150px" />
                   </div>
                   <div className=" title-des">
                     <p>💻 Hack and Tackle 4.0</p>
                     <p>Covid</p>
                   </div> 
              </div> 
              </div>
              <div className="agri-text" data-aos="fade-up" data-aos-delay="450" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">
                  <div className="container-fluid">
                    <div className="row row-agri">
                         <div className="col-xs-12">
                             <div className="agri-main jus-cla">
                             The COVID-19 pandemic continues to affect the world in an unprecedented manner, this hackathon helps to utilize technology to address local challenging realities of the COVID-19 situation and any pressing need affecting the targeted communities.</div>
                             <div className="agri-main jus-cla">
                             As the pandemic has not only affected health, but also exacerbated poverty and laid bare systemic inequality throughout the world, Hack and Tackle 4.0 is prioritizing immediate impact, poverty mitigation and inequality reduction through the following project areas:
</div>
                             <ul className="agri-list">
                                 <li>Food Security</li>
                                 <li>Infection Control Devices</li>
                                 <li>Information and Communications Technology (ICT)</li>
                                 <li>Medical Devices</li>
                                 <li>Personal Protective Equipment (PPE)</li>
                                 <li>Sustainable Power Sources</li>
                                 <li>Water, Sanitation, and Hygiene</li>
                             </ul>

                             <div className="agri-body jus-cla">Are you interested to provide the solution for the COVID related issues?
</div>
                         </div>
                    </div>
                  </div>
              </div>
            </div>
            
        )
    }
}
 
export default agri
