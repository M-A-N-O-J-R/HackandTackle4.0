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
            <div  id="gallery">
            <div className="gal-info">
             <div className="container-fluid">
             <p className="info-title" id="faq-title">GALLERY</p>
                <div className="row"  data-aos="fade-left" data-aos-delay="150" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">
                  <div className="col-md-5 col-xs-12  img-cont2 img-gal-1">   
                  </div>
                  <div className="col-md-5 col-xs-12 img-cont2 img-gal-2">   
                  </div>
                  <div className="col-md-5 col-xs-12 img-cont2 img-gal-3">   
                  </div>
                  <div className="col-md-5 col-xs-12 img-cont2 img-gal-4">   
                  </div>
                  <div className="col-md-5 col-xs-12 img-cont2 img-gal-5">   
                  </div>
                  <div className="col-md-5 col-xs-12 img-cont2 img-gal-6">   
                  </div>
                </div>
                </div>
            </div>
        </div>  
        )
    }
}

export default faq


