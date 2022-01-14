import React, { Component } from 'react'
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from "react-icons/bs";
 class faq extends React.PureComponent{
    constructor(props) {
        super(props)
    
        this.state = {
            details:[]   
        }
    }
    
    
    render() {
        return (
            <div  id="about">
            <div className="gal-info">
             <div className="container-fluid">
             <p className="info-title" id="faq-title">Development Team</p>
                <div className="row team-row"  data-aos="fade-left" data-aos-delay="150" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">
                  <div className=" col-md-5 team-m">
                    <div className="img-cont3  img-t-1"></div> 
                    <div clasName="team-info">
                        <p style={{fontSize:"18px"}}>Jai Kishore R</p>
                        <p>Design & Development</p>
                        <div className="team-link">
                        <a href="https://www.instagram.com/ieee_ssn/" id="insta2"><AiIcons.AiOutlineInstagram /></a>
                        <a href="https://www.instagram.com/ieee_ssn/" id="linkedin"><AiIcons.AiFillLinkedin/></a>
                        </div>
                    </div>  

                   
                  </div>


                  <div className=" col-md-5 team-m">
                    <div className="img-cont3 img-t-2"></div> 
                    <div clasName="team-info">
                        <p style={{fontSize:"18px"}}>Manoj R</p>
                        <p>Development</p>
                        <div className="team-link">
                        <a href="https://www.instagram.com/ieee_ssn/" id="linkedin"><AiIcons.AiFillLinkedin/></a>
                        <a href="https://www.instagram.com/ieee_ssn/" id="git"><AiIcons.AiFillGithub /></a>
                        </div>
                    </div>  

                   
                  </div>
                </div>

                
                </div>
            </div>
        </div>  
        )
    }
}

export default faq


