import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './AboutMe.css'

function AboutMe() {
  const [aboutMeData, setAboutMeData] = useState({})
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/about`)
      .then(response => {
        setAboutMeData(response.data.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error)
      })
  }, [])

  return (
    <div className="about-me-container">
      <h1>{aboutMeData.name}</h1>
      <img
        src={aboutMeData.pic_url}
        alt="Profile Pic"
        className="profile-pic"
      />
      <p><strong>About Me:</strong> {aboutMeData.about}</p>
    </div>
  )
}

export default AboutMe
