import React, { Component } from 'react'
const style={
    color:"white",
    backgroundColor:"rgb(3, 3, 3,0.8)",
    width:"120px",
    height:"30px",
    borderRadius:"5px",
    display:"inline-block",
    textDecoration:"none",
    textAlign:"center",
    padding:"2px"

}
export class register extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             color: ['red','blue','green','yellow']
        }
    }
    render() {
        
        return (
            <div className="regis " id="prize-m">
                <div className="intro-class" >
                <div data-aos="zoom-in" data-aos-delay="150" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">
                <div className="intro-text" >        
                    <p  className="text-regi" style={{fontWeight:"bold",fontSize:"27px",color:"rgb(238,238,238)",marginBottom:"40px"}}>Win prizes worth up to INR 25,000/-.</p>
                    <p style={{fontSize:"22px",color:"rgb(238,238,238)",marginBottom:"20px"}}>Phase II Registration</p>
                </div>
                <a style={style} href="https://forms.gle/j76wdgHcJ7CGhBr48">Register</a>
              </div>
            </div>
            </div>
        )
    }
}

export default register
