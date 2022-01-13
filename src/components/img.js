import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';

import React, { Component } from 'react'

export class img extends React.PureComponent {
    render() {
        return (
            <div className="img-slider">
                <p className="info-title ga-class" id="faq-title"  style={{color:"black"}}>GALLERY</p>
                <ImageSlider slides={SliderData} />
            </div>
        )
    }
}

export default img
