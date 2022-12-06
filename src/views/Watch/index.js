import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../../components/NavBar'
import './index.scss'

const Watch = () => {
  console.log('working')
  const [videoObject, setVideoObject] = useState(null)
  const { video } = useParams()

  const getVideo = async () => {
    const opts = {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        video: video,
      }),
    }
    try {
      const resp = await fetch(process.env.REACT_APP_SERVICE_URI + 'api/get_video', opts)
      if (resp.status !== 200) {
        alert('There has been an error')
        return false
      }
      const data = await resp.json()
      setVideoObject(data)
      console.log(videoObject)
      return true
    } catch (error) {
      console.log('There was an error', error)
    }
  }

  useEffect(() => {
    getVideo()
  }, [])

  return (
    <>
      <NavBar />
      {videoObject ? (
        <div className='watch-page'>
        <h1 className='title'>Watching {videoObject != null && videoObject.name}</h1>
        <div className='watch-container'>
          {videoObject && <video autoPlay controls src={videoObject.url}></video>}
          <div className='meta-data'>
            <h3>
            Date: {videoObject.date} Duration: {videoObject.duration}
            </h3>
          </div>
        </div>
      </div>
      ) : null}
    </>
  )
}

export default Watch
