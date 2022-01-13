import React, { Component } from 'react'

const style={
    borderRadius:"5px",
    display:"inline-block",
    textDecoration:"none",
    textAlign:"center",
    padding:"5px",
    fontWeight:"normal",
}
export class information extends React.PureComponent {
    render() {
        return (
           <div>
            <div className="o-cont">
                <div className="container-fluid">
                    <div className="row row-item info-row"  data-aos="fade-up" data-aos-delay="450" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">
                        <div className="col-xs-12 col-item" >
                            <p className="info-title">HACK AND TACKLE 3.0</p>
                           <p style={{fontSize:'15px',lineHeight:'1.7em'}}>Hack & Tackle, is a 24-hour virtual hackathon and is an intra and inter-college event. It has two phases namely Ideation phase and 24-hour hackathon phase. The first edition Hack & Tackle 1.0 started in the year 2019 with a participation of nearly 150 students from various institutes. The second edition Hack & Tackle 2.0 in the year 2020 witnessed participation of 112 students from different colleges.  Due to the prevailing condition of pandemic situation the third edition Hack & Tackle 3.0 is planned online and is a first of its kind. Keeping up with the intention to offer an unhindered platform for students to develop realistic and intelligent solutions to problems prevalent in the society, the third edition of this magnificent event will be held during 15-16 March, 2021 in virtual mode.
                        </p> </div>
                    </div>
                    <div className="row row-item info-row" data-aos="fade-up" data-aos-delay="450" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">
                        <div className="col-xs-12 col-item">
                            <p className="info-title">IDEATION PHASE</p>
                           <p style={{fontSize:'15px',lineHeight:'1.7em'}}> The Phase I accepts proposals in one of the five different tracks namely, environment, healthcare, women’s safety, agriculture and social welfare. If the problem statement doesn’t fit in the given track, there is a possibility of submitting the proposal in open track. The proposal with a suitable idea or concept should aim in providing solutions to practical problems that is prevalent in the society
                            </p>
                            <br></br>
                            <br></br>
                            <p style={{fontSize:'15px',lineHeight:'1.7em'}}>Students can complete phase I registration by submitting a PPT containing a maximum of 5 slides (Title, Problem Statement, Objectives, Proposed Workflow, and Explanation/ Requirements) using the link given below:
                            </p>
                            <br></br>
                           <div style={{display:"flex",justifyContent: "center",marginBottom:"25px"}}> 
                            <a className="regibtn overlay" style={style}  href="https://forms.gle/j76wdgHcJ7CGhBr48">Register</a>
                           </div> 
                        </div>
                    </div>
                    <div className="row row-item info-row" data-aos="fade-up" data-aos-delay="450" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">
                        <div className="col-xs-12 col-item" >
                            <p className="info-title">24 HOUR HACKATHON</p>
                            <p style={{fontSize:'15px',lineHeight:'1.7em'}}>The submitted proposals from the ideation phase will undergo blind review process by the expert members and teams gets shortlisted. The selected team can then register for Phase II by paying a registration fee of Rs. 300/- per team to confirm their participation. The team size is strictly restricted to a maximum of 3 members out of which one will be the team leader. The meeting link will be shared to the registered participants upon successful completion of the Phase II registration.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
         </div> 
        )
    }
}

export default information
