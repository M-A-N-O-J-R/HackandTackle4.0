import React, { Component } from 'react'
import logo from '../img/logo.png'
import logo2 from '../img/ssn1.png'


    class agri extends React.PureComponent {
      constructor(props) {
        super(props)
      
        this.state = {
           teams:
           [
             {
               id:9,
               track:"Environment",
               name:"Team Titans",
               cname:"Bannari Amman Institute of Technology"
              },
              {
                id:21,
                track:"Agriculture",
                name:"Hyping Folks",
                cname:"Bannari Amman Institute of Technology"
               },
               {
                id:26,
                track:"Agriculture",
                name:"Techno team",
                cname:"St. Joseph's Institute of Technology"
               },
               {
                id:30,
                track:"Health Care",
                name:"Tech girls",
                cname:"	National Engineering College"
               },
               {
                id:36,
                track:"Open Track",
                name:"Team ReqVisit",
                cname:"National Engineering College"
               },
               {
                id:39,
                track:"	Open Track",
                name:"Team Islanders",
                cname:"St. Joseph's Institute of Technology"
               },
               {
                id:48,
                track:"Health Care",
                name:"DermaCare",
                cname:"VIT Chennai"
               },
               {
                id:51,
                track:"Open Track",
                name:"Epitomease",
                cname:"Thiagarajar College of Engineering"
               },
               {
                id:58,
                track:"Open Track",
                name:"Raptors",
                cname:"St. Joseph's College of Engineering"
               },
               {
                id:61,
                track:"Agriculture",
                name:"sieren",
                cname:"Sri Sairam Institute of Technology	"
               },
               {
                id:64,
                track:"Open Track",
                name:"The Innovators",
                cname:"St. Joseph's Institute of Technology"
               },
               {
                id:72,
                track:"Open Track",
                name:"E.T",
                cname:"VIT Chennai"
               },
               {
                id:79,
                track:"Social Welfare",
                name:"Fanatic Minds",
                cname:"Model Institute of Engineering and Technology"
               },
               {
                id:83,
                track:"Agriculture",
                name:"CULTIVONATE",
                cname:"SRM Institute of Science and Technology"
               },
               {
                id:86,
                track:"Social Welfare",
                name:"Crewmates",
                cname:"	VIT Chennai"
               },
               {
                id:92,
                track:"Health Care",
                name:"MEGAMIND",
                cname:"St. Joseph's College of engineering"
               },
               {
                id:96,
                track:"Agriculture",
                name:"Computer crew",
                cname:"Sri Ramakrishna Engineering College"
               },
               {
                id:99,
                track:"Open Track",
                name:"Techies",
                cname:"Sri Sairam Institute of Technology"
               },
               {
                id:101,
                track:"Women Safety",
                name:"AAM Team",
                cname:"Vellore Institute of Technology"
               },{
                id:110,
                track:"Social Welfare",
                name:"BIT DATA PIRATES",
                cname:"Bannari Amman Institute of Technology"
               },{
                id:116,
                track:"Health Care",
                name:"MED_SPARTANS",
                cname:"Bannari Amman Institute of Technology"
               },{
                id:117,
                track:"Health Care",
                name:"Indian",
                cname:"St. Joseph's College of Engineering"
               },{
                id:118,
                track:"Social Welfare",
                name:"Kingsman",
                cname:"S.A. Engineering College"
               },{
                id:134,
                track:"Open Track",
                name:"alphacode",
                cname:"Sri Sairam Institute of Technology"
               },{
                id:136,
                track:"Agriculture",
                name:"CURA",
                cname:"Bannari Amman Institute of technology"
               },{
                id:150,
                track:"Open Track",
                name:"SLON",
                cname:"Sri Sivasubramaniya Nadar College of Engineering"
               },{
                id:155,
                track:"Open Track",
                name:"Hypertext Wizards",
                cname:"Sri Venkateswara College of Engineering"
               },{
                id:156,
                track:"Women Safety",
                name:"The Archons",
                cname:"St. Joseph's College of Engineering"
               },{
                id:174,
                track:"Women Safety",
                name:"Trivia tramps",
                cname:"St. Joseph's College of Engineering"
               },{
                id:177,
                track:"Social Welfare",
                name:"Sand Box",
                cname:"SRM Institute of Science and Technology"
               },{
                id:184,
                track:"Open Track",
                name:"SPACE REBOOTERS",
                cname:"Sri Ramakrishna Engineering College"
               },{
                id:185,
                track:"Open Track",
                name:"ALPHA",
                cname:"S.A. Engineering College"
               },
               {
                id:190,
                track:"Social Welfare",
                name:"Stack Hackers",
                cname:"Sri Krishna College of Engineering and Technology"
               },
               {
                id:198,
                track:"Social Welfare",
                name:"A2B",
                cname:"Sri Venkateswara College of Engineering"
               },
               {
                id:200,
                track:"Open Track",
                name:"Code Linguists",
                cname:"St. Joseph's College of Engineering"
               },
               {
                id:202,
                track:"Environment",
                name:"Mind Optimizers",
                cname:"Sri Sairam Engineering College"
               },
               {
                id:209,
                track:"Agriculture",
                name:"405 Found",
                cname:"Sri Venkateswara College of Engineering"
               },
               {
                id:211,
                track:"Environment",
                name:"Environment team",
                cname:"St. Joseph's College of Engineering"
               },
               {
                id:214,
                track:"Open Track",
                name:"Vision Engineers",
                cname:"Bannari Amman Institute of Technology"
               },
               {
                id:219,
                track:"Agriculture",
                name:"Ag Fund",
                cname:"Sri Venkateswara College of Engineering"
               },
               {
                id:223,
                track:"Health Care",
                name:"PYSOLDIERS",
                cname:"PSNA COLLEGE OF ENGINEERING AND TECHNOLOGY"
               },
               {
                id:231,
                track:"Health Care",
                name:"The bug slayers",
                cname:"Kongunadu College of Engineering and Technology"
               },
               {
                id:232,
                track:"Open Track",
                name:"Nikolas",
                cname:"Rajagiri school of engineering and technology"
               },
               {
                id:233,
                track:"Open Track",
                name:"Dragon Boosters",
                cname:"Sri Venkateswara College of Engineering"
               },
               {
                id:235,
                track:"Open Track",
                name:"Aces",
                cname:"KPR Institute of Engineering and Technology"
               },
               {
                id:239,
                track:"Open Track",
                name:"Dashing Duo",
                cname:"Madras Institute Of Technology"
               },
               {
                id:240,
                track:"Agriculture",
                name:"Agropro",
                cname:"Vellore Institute of Technology"
               },
               {
                id:241,
                track:"Open Track",
                name:"Triads",
                cname:"Sri Sivasubramaniya Nadar College of Engineering"
               },
               {
                id:250,
                track:"Health Care",
                name:"Schlenkians",
                cname:"Mepco Schlenk Engineering college"
               },
               {
                id:262,
                track:"Agriculture",
                name:"Technocrats",
                cname:"Sri Sivasubramaniya Nadar College of Engineering"
               },
               {
                id:266,
                track:"Agriculture",
                name:"Insignia Encorp",
                cname:"Velammal Engineering College"
               },
               {
                id:271,
                track:"Health Care",
                name:"All Stars",
                cname:"Sri Sivasubramaniya Nadar College of Engineering"
               },
               {
                id:276,
                track:"Social Welfare",
                name:"Blitzkrieg",
                cname:"Sri Sivasubramaniya Nadar College of Engineering"
               }
          ]
        }
      }
      
        componentDidMount() {
    window.scrollTo(0, 0)
  }
render() {
  let list=<div>EMPTY</div>
  if(this.state.teams.length)
  {
     list=this.state.teams.map(team=>{
       return(
            <tr key={team.id}>
              <td className="colu-1 team-list">{team.id}</td>
              <td className="colu-2 team-list">{team.track}</td>
              <td className="colu-3 team-list">{team.name}</td>
              <td className="colu-4 team-list">{team.cname}</td>
            </tr>
       )
     })
  }
    return (
        <div className="agri" id="start">
         <div className="agri-intro">
          <div className="intro-text" data-aos="fade-down" data-aos-delay="150" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">        
          <div className="intro-text" >        
            <p className="overlay" id="clg" style={{color: "rgb(50,50,50)"}}>SRI SIVASUBRAMANIYA NADAR COLLEGE OF ENGINEERING</p>
            <p id="dpt" className="overlay" style={{color: "rgb(50,50,50)"}}>DEPARTMENT OF INFORMATION TECHNOLOGY</p>
           </div>
          <p style={{fontSize:"16px"}}>KALAVAKKAM-603110</p>
          </div> 
          <div data-aos="fade-up" data-aos-delay="150" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">
          <div className="intro-logo-div">
           <img src={logo2} alt="logo" id="event-img" width="170px"/>
           <img src={logo} alt="logo" id="event-logo" width="170px"/>    
           </div> 
               <div className=" title-des">
                 <p>💻 Hack and Tackle 3.0</p>
                 
               </div> 
          </div> 
          </div>
          <div className="timeline prize-win" id="timeline" >
                <p className="time-title" data-aos="fade-up" data-aos-delay="450" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">SHORTLISTED TEAMS</p>
                <div className="agri-text " data-aos="fade-up" data-aos-delay="450" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-once="true">
                  <div className="container-fluid">
                    <div className="row t-row">
                         <div className="col-xs-12 col-lg-12 col-md-12">
                             <table team-list>
                                 <tr>
                                     <th className="colu-1 team-list">ID</th>
                                     <th className="colu-2 team-list">TRACK</th>
                                     <th className="colu-3 team-list">TEAM NAME</th>
                                     <th className="colu-4 team-list">COLLEGE NAME</th>
                                 </tr>
                                 {list}
                             </table>
                         </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
        
    )
}
}

export default agri

