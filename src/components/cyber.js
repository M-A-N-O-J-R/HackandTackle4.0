import React, { Component } from 'react'
import logo from '../img/logo.png'
import logo1 from '../img/CyberSecurity.png'
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
                     <p>Cyber Security</p>
                   </div> 
              </div> 
              </div>
              <div className="agri-text" data-aos="fade-up" data-aos-delay="450" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">
                  <div className="container-fluid">
                    <div className="row row-agri">
                         <div className="col-xs-12">
                             <div className="agri-main jus-cla">
                             Cyber security is the application of technologies, processes and controls to protect systems, networks, programs, devices and data from cyber attacks.It aims to reduce the risk of cyber attacks and protect against the unauthorised exploitation of systems, networks and technologies.
</div>
                             <div className="agri-main jus-cla">
                             According to The hidden costs of cybercrime, a 2020 study carried out by McAfee and the CSIS (Centre for Strategic and International Studies), based on data collected by Vanson Bourne, the world economy loses more than $1 trillion (approximately £750 billion) each year. Political, ethical and social incentives can also drive attackers.

</div>
<div className="agri-main jus-cla">
Cyber attacks continue to grow in sophistication, with attackers using an ever-expanding variety of tactics. These include social engineering, malware and ransomware.Common cyber threats include

</div>
                             <ul className="agri-list">
                                <li>Backdoors</li>
                                <li>Formjacking</li>
                                <li>DDoS </li>
                                <li>Malware </li>
                                <li>DNS Poisoning</li>
                                <li>Man in the middle attacks</li>
                             </ul>

                             <div className="agri-body jus-cla">An idea that can effectively and efficiently address the glaring danger of cyber threats is a boon in today's digital driven world largely influenced by the internet. Do you have one?

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
