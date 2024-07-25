import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'


const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>

        </div>
        <div className="about-right">
          <h3>ABOUT UNIVERSITY</h3>
          <h2>Nurturing Tomorrow <br />Leaders Today</h2>
          <p>Embrak on the transformative educational journey with our university comprehensive education program Our cutting-edge curriculam is designed to empower with the knowlwdge, skill, and experiences needed to excel in the dynamic field of education.</p>
          <p>With a focus on innovation, hand-on learning and personalized mentorship our program prepare aspiring educators to make a meaningful impact in classroom, school, and communities.</p>
          <p>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of program offer the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
        </div>

    </div>
  )
}

export default About