import React, { Component } from 'react'
import logo from '../img/logo.png'
import logo1 from '../img/Environment.png'
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
                       <img src={logo1} alt="logo" className="track-logo" width="110px" />
                   </div>
                   <div className=" title-des">
                     <p>💻 Hack and Tackle 3.0</p>
                     <p>🌏Environment</p>
                   </div> 
              </div> 
              </div>
              <div className="agri-text" data-aos="fade-up" data-aos-delay="450" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">
                  <div className="container-fluid">
                    <div className="row row-agri">
                         <div className="col-xs-12">
                             <div className="agri-main jus-cla">
                             Humanity is facing a crippling problem that has been destroying its home. The environment is collapsing due to global warming, pollution, climate changes, etc. We are responsible for the environment we live in. Now, more than ever, the advent of new technology has the potential to transform environmental protection. Our next course of action is to technologically transform the field of environment protection and conservation to ensure a sustainable environment for the future. Some of the major environmental concerns in India is grappling with today
                             </div>
                             <ul className="agri-list">
                                 <li>Air pollution is one of the worst scourges to have affected India</li>
                                 <li>Rapidly depleting levels of groundwater is one of the biggest threats to food security and livelihood in the country</li>
                                 <li>Increasingly tormenting heat waves in the past years</li>
                                 <li>Unrestrained use of plastics</li>
                                 <li>Garbage Disposal and Sanitation</li>
                                 <li>Loss of Biodiversity</li>
                                 <li>Unpredictable rainfall patterns</li>
                             </ul>
                             <div className="agri-body jus-cla">We look forward to the younger generations of the nation to remain conscientious and act in the best interests of future generations by providing ideas to improve the Environment.</div>
                         </div>
                    </div>
                  </div>
              </div>
            </div>
            
        )
    }
}
 
export default agri
