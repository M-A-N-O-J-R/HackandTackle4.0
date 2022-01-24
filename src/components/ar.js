import React, { Component } from 'react'
import logo from '../img/logo.png'
import logo1 from '../img/arvr2.png'


export class agri extends  React.PureComponent{
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        return (
            <div className="agri">
             <div className="agri-intro">
              <div className="intro-text " data-aos="fade-down" data-aos-delay="150" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true" >        
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
                     <p>AR/VR</p>
                   </div> 
              </div> 
              </div>
              <div className="agri-text" data-aos="fade-up" data-aos-delay="450" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">
                  <div className="container-fluid">
                    <div className="row row-agri">
                         <div className="col-xs-12">
                             <div className="agri-main jus-cla" >
                             Augmented reality (AR) is an interactive experience of a real-world environment where the objects that reside in the real world are enhanced by computer-generated perceptual information. In virtual reality (VR), the users' perception of reality is completely based on virtual information. In augmented reality (AR) the user is provided with additional computer-generated information within the data collected from real life that enhances their perception of reality.
                             </div>
                             <div className="agri-main jus-cla" >
                             Today, these cutting-edge technologies have gone far beyond gaming and entertainment and have been used as applications in education, ecommerce, healthcare and construction etc.
                             </div>
                             <div className="agri-main jus-cla" >
                             The following challenges with augmented reality are negatively affecting the mainstream adoption of the technology:
                             </div>
                             <ul className="agri-list">
                                 <li>Reduce the perceived cost of implementing the new technology</li>
                                 <li>Security & Privacy Issues with Augmented Reality</li>
                                 <li>Poor Quality of Content & Use Cases</li>
                                 <li>Social Issues of Augmented Reality: Public Acceptance & Retention</li>
                                 
                             </ul>
                             <div className="agri-body jus-cla">
                             Can your idea act as a stand-alone creative application that creates reliable, high-resolution experiences for  global community?
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
