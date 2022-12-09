import React, { useEffect, useContext } from 'react'
import Header from '../../components/NavBar'
import Footer from '../../components/Footer'
import './index.scss'
import { Context } from '../../store/appContext'

const Home = () => {
  return (
    <>
      <Header />
      <div className='home-page'>
        <h1 className='title'>Cloud Storage</h1>
        <div className='home'>
          <p>
            AWS website that hosts cloud footage to record lightning strikes. The following project utilizes AWS free tier for an EC2 instance
            connected to an S3 bucket as well as an AWS RDS SQL database. The code below uses the Flask framework to combine HTML/CSS design with
            machine learning in Python to create a weather tracking application on the cloud.
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
