import React,{ Component} from 'react'
import logo from '../img/logom.png'

const style={
   
    borderRadius:"5px",
    display:"inline-block",
    textDecoration:"none",
    textAlign:"center",
    padding:"8px",
    fontWeight:"normal",
    
    verticalAlign:"middle",

}

class intro extends React.PureComponent {
handleHover=(event)=>{
        console.log(event);
        event.preventDefault();
        event.target.classList.toggle("hover1");
    }
  render(){
    return (
        <div className="intro-class hero"  id="beg">
        {/* <marquee width="100%" direction="right" scrollamount="12" height="30%"  className="roll-text">
        * Phase I (problem statement) submission is extended till 22.02.2021 *
         </marquee> */}
          <div data-aos="fade-down" data-aos-delay="150" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">
          <div className="intro-text" >        
            <p className="overlay" id="clg">SRI SIVASUBRAMANIYA NADAR COLLEGE OF ENGINEERING</p>
            <p id="dpt" className="overlay">DEPARTMENT OF INFORMATION TECHNOLOGY</p>
           </div>
          <p   className="present">presents</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="150" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">
          <div className="intro-logo-div">
        <img src={logo} alt="logo" id="event-logo" class="evnt-lo" width="370px"/>    
           </div> 
           <div className="info-class">
              <p className="overlay" >💻 24 Hour Hackathon</p>
              <p className="overlay" >📅  15 - 16 MARCH 2021</p>
              {/* <p className="overlay" >🕗 8 AM - 8 PM</p> */}
           </div> 
            <a className="regibtn overlay" style={style}  href="https://forms.gle/j76wdgHcJ7CGhBr48">Register</a>
           </div>
        </div>
     

      
    )
  }
}

export default intro
