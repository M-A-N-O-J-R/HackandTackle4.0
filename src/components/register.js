import React, { Component } from 'react'

const style={
    color:"white",
    backgroundColor:"rgb(3, 3, 3,0.8)",
    width:"100px",
    height:"20px",
    borderRadius:"5px",
    display:"inline-block",
    textDecoration:"none",
    textAlign:"center",
    padding:"2px"

}
export class register extends React.PureComponent {
    render() {
        return (
            <div className="regis" id="register" style={{marginTop:"-100px"}}>
                <div className="intro-class" >
                <div data-aos="fade-up" data-aos-delay="150" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">
                <div className="intro-text" >        
                    <p  className="text-regi">Clock is ticking. Register soon </p>
                    <p>Phase II Registration</p>
                </div>
                <a style={style} href="https://forms.gle/j76wdgHcJ7CGhBr48">Register</a>
                 
              </div>
            </div>
            </div>
        )
    }
}

export default register
