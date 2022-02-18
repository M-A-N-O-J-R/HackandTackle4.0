import React, { Component } from 'react'

export class timeline extends React.PureComponent {
    render() {
        return (
            <div className="timeline" id="timeline" >
                
                <div className="agri-text time-cont" data-aos="fade-up" data-aos-delay="450" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">
                  <div className="container-fluid">
                    <div className="row t-row">
                    <p className="time-title" data-aos="fade-up" data-aos-delay="450" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">TIMELINE</p>
                         <div className="col-xs-12 col-lg-12 col-md-12 timeline-table">
                             <table>
                               <thead>
                                 <tr className="rowu-1">
                                     <th className="colu-1">S.NO</th>
                                     <th className="colu-2">Activity</th>
                                     <th className="colu-3">Start Date</th>
                                     <th className="colu-4">End Date</th>
                                 </tr>
                                </thead>
                                <tbody>
                                 <tr>
                                     <td className="colu-1">1</td>
                                     <td className="colu-2">Phase 1 Submission(Problem statement)</td>
                                     <td className="colu-3">24-JAN-2022</td>
                                     <td className="colu-4">21-FEB-2022</td>
                                 </tr>
                                 </tbody>
                                 <tbody>
                                 <tr>
                                     <td className="colu-1">2</td>
                                     <td className="colu-2">Phase 1 Screening</td>
                                     <td className="colu-3">19-FEB-2022</td>
                                     <td className="colu-4">25-FEB-2022</td>
                                 </tr>
                                 </tbody>
                                 <tbody>
                                 <tr>
                                     <td className="colu-1">3</td>
                                     <td className="colu-2">Declaration of Shortlisted Candidates for Phase 2</td>
                                     <td className="colu-3">24-FEB-2022</td>
                                     <td className="colu-4">27-FEB-2022</td>
                                 </tr>
                                 </tbody>
                                 <tbody>
                                 <tr>
                                     <td className="colu-1">4</td>
                                     <td className="colu-2">Phase 2 Registration</td>
                                     <td className="colu-3">26-FEB-2022</td>
                                     <td className="colu-4">05-MAR-2022</td>
                                 </tr>
                                 </tbody>
                                 <tfoot>
                                 <tr>
                                     <td className="colu-1">5</td>
                                     <td className="colu-2">Hack and Tackle 4.0</td>
                                     <td className="colu-3">10-MAR-2022</td>
                                     <td className="colu-4">11-MAR-2022</td>
                                 </tr>
                                 </tfoot>
                             </table>
                         </div>
                         <div style={{color:'#f79303',marginTop:'55px'}}>
                            *submission deadline has been extended
                         </div>
                         
                    </div>
                  </div>
              </div>
            </div>
        )
    }
}

export default timeline

