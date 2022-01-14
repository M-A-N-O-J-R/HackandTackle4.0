import React, { PureComponent } from 'react'
import img1 from '../img/ssn1.png'
import img2 from '../img/8-IEEE SSN SB.png'
import img3 from '../img/7-IEEE CS SSN SB CHAPTER.png'
import img4 from '../img/9-IEEE YP MADRAS SECTION.png'
import img5 from '../img/spon.png'
export class sponsor extends PureComponent {
    render() {
        return (
            <div className="spons" id ="sponsor">
                <div className="s-cont">
                <p className="info-title" id="faq-title">SPONSORS</p>
                <div className="row row-spon">
                
                    <div className="col-5 col-sm-3 col-md-3 col-lg-2 spon-1 spon" data-aos="fade-up" data-aos-delay="450" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">
                         <img src={img1} className="spon-img" alt="ssn-logo" width='100px'></img>
                    </div>
                    <div className="col-5 col-sm-3 col-md-3 col-lg-2 spon-1 spon" data-aos="fade-up" data-aos-delay="450" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">
                    <img src={img2} className="spon-img" alt="ssn-logo" width='100px'></img>
                    </div>
                    <div className="col-5 col-sm-3 col-md-3 col-lg-2 spon-1 spon" data-aos="fade-up" data-aos-delay="450" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">
                    <img src={img3} className="spon-img" alt="ssn-logo" width='120px'></img>
                    </div> 
                
                    <div className="col-5 col-sm-3 col-md-3 col-lg-2 spon-1 spon" data-aos="fade-up" data-aos-delay="450" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">
                    <img src={img5} className="spon-img" alt="ssn-logo" width='120px'></img>
                    </div>                          
                </div>
                </div>
            </div>
        )
    }
}

export default sponsor
