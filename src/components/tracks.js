import React, { Component } from 'react'
import {Link}from 'react-router-dom'
const style={
    width:"90px",
    height:"50px",
    color:"#f79303",
    textDecoration:"none",
    padding:"10px",
    borderRadius:"5px",
    fontFamily:'Roboto Mono',
}

export class tracks extends React.PureComponent {
    render() {
        return (
        <div >
            <div className="track" id="track" >
               
                <div className="container-fluid">
                <p className="info-title info-track" data-aos="fade-up" data-aos-delay="450" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">TRACKS</p>
                  <div className="row row-track">
                  
                     <div className="col-xs-12  col-sm-5 col-md-5 col-track col-lg-3" data-aos="fade-up" data-aos-delay="450" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">
                         <div className="track-img-1 track-img">
                            
                         </div>
                        <div className="link"> 
                         <Link to="/agri" style={style}>More Info</Link>
                        </div>
                     </div>
                     <div className="col-xs-12  col-sm-5 col-md-5 col-track col-lg-3" data-aos="fade-up" data-aos-delay="450" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true" >
                         <div className="track-img-2 track-img">
                            
                         </div>
                        <div className="link"> 
                         <a href="/safety" style={style}>More Info</a>
                        </div>
                     </div>
                     <div className="col-xs-12  col-sm-5 col-md-5 col-track col-lg-3" data-aos="fade-up" data-aos-delay="450" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true" >
                         <div className="track-img-3 track-img">
                            
                         </div>
                        <div className="link"> 
                         <Link to="/environment" style={style}>More Info</Link>
                        </div>
                     </div>
                     <div className="col-xs-12  col-sm-5 col-md-5 col-track col-lg-3" data-aos="fade-up" data-aos-delay="450" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">
                         <div className="track-img-4 track-img">
                            
                         </div>
                        <div className="link"> 
                         <Link to="/health" style={style}>More Info</Link>
                        </div>
                     </div>
                     <div className="col-xs-12  col-sm-5 col-md-5 col-track col-lg-3" data-aos="fade-up" data-aos-delay="450" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true" >
                         <div className="track-img-5 track-img">
                            
                         </div>
                        <div className="link"> 
                         <Link to="/social" style={style}>More Info</Link>
                        </div>
                     </div>
                     <div className="col-xs-12  col-sm-5 col-md-5 col-track col-lg-3" data-aos="fade-up" data-aos-delay="450" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">
                         <div className="track-img-6 track-img">
                            
                         </div>
                        <div className="link"> 
                         <Link to="/health" style={style}>More Info</Link>
                        </div>
                     </div>
                     <div className="col-xs-12  col-sm-5 col-md-5 col-track col-lg-3" data-aos="fade-up" data-aos-delay="450" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">
                         <div className="track-img-7 track-img">
                            
                         </div>
                        <div className="link"> 
                         <Link to="/Ar" style={style}>More Info</Link>
                        </div>
                     </div>
                     <div className="col-xs-12  col-sm-5 col-md-5 col-track col-lg-3" data-aos="fade-up" data-aos-delay="450" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">
                         <div className="track-img-8 track-img">
                            
                         </div>
                        <div className="link"> 
                         <Link to="/health" style={style}>More Info</Link>
                        </div>
                     </div>
                     <div className="col-xs-12  col-sm-5 col-md-5 col-track col-lg-3" data-aos="fade-up" data-aos-delay="450" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">
                         <div className="track-img-9 track-img">
                            
                         </div>
                        <div className="link"> 
                         <Link to="/health" style={style}>More Info</Link>
                        </div>
                     </div>
                  </div>
                  {/* <p style={{color:"red",}}>NOTE: If your solution doesn't fit in the above track, fear not. You can apply with the open track expressing any suitable idea or concept that solves a real - world problem.</p> */}
                </div>
            </div>
        </div>  
        )
    }
}

export default tracks
