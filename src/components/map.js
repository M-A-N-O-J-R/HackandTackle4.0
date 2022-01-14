import React, { Component } from 'react'

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
            <div className="map-info">
             <div className="container-fluid">
                <div className="row"  data-aos="fade-left" data-aos-delay="150" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">
                  <div className="col-md-8 col-xs-12 col-12 img-cont4 img-map-1">   
                  </div>
                </div>
                </div>
            </div>
        </div>  
        )
    }
}

export default faq


