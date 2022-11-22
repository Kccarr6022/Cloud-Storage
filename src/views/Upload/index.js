import React, { useContext, useState } from 'react'
import { Context } from '../../store/appContext'
import Header from '../../components/NavBar'
import Footer from '../../components/Footer'
import Error401 from '../Error401'
import './index.scss'
import AWS from 'aws-sdk'

AWS.config.update({
  accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
})

const myBucket = new AWS.S3({
  params: { Bucket: process.env.REACT_APP_S3_BUCKET },
  region: process.env.REACT_APP_REGION,
})

const Upload = () => {
  const { store, actions } = useContext(Context)
  const [id, setId] = useState(null)
  const [name, setName] = useState(null)
  const [eventType, setEventType] = useState(null)
  const [duration, setDuration] = useState(null)
  const [fps, setFps] = useState(null)
  const [originalFps, setOriginalFps] = useState(null)
  const [date, setDate] = useState(null)
  const [time, setTime] = useState(null)
  const [size, setSize] = useState(null)
  const [width, setWidth] = useState(null)
  const [height, setHeight] = useState(null)
  const [filename, setFileName] = useState(null)
  const [progress, setProgress] = useState(0)
  const [selectedFile, setSelectedFile] = useState(null)

  const handleEventTypeInput = e => {
    setEventType(e.target.value)
    console.log(e.target.value)
  }

  const handleResolutionInput = e => {
    const { value } = e.target
    if (value === '4k') {
      console.log('4k')
      setWidth('3820')
      setHeight('2160')
    } else if (value === '1080p') {
      console.log('1080p')
      setWidth('1920')
      setHeight('1080')
    } else {
    }
  }

  const handleFileInput = e => {
    setSelectedFile(e.target.files[0])
    setFileName(e.target.files[0].name)
  }

  const uploadFile = file => {
    const params = {
      ACL: 'public-read',
      Body: file,
      Bucket: process.env.REACT_APP_S3_BUCKET,
      Key: file.name,
    }

    myBucket
      .putObject(params)
      .on('httpUploadProgress', evt => {
        setProgress(Math.round((evt.loaded / evt.total) * 100))
      })
      .send(err => {
        if (err) console.log(err)
      })
  }

  const handleSubmission = async () => {
    console.log('handleSubmission')
    const opts = {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: store['token'],
        name: name,
        event_type: eventType,
        duration: duration,
        fps: fps,
        original_fps: originalFps,
        date: date,
        time: time,
        size: size,
        width: width,
        height: height,
        url: `https://cloudstoragebuckets3.s3.amazonaws.com/${filename}`,
      }),
    }

    try {
      uploadFile(selectedFile)
      const resp = await fetch('http://localhost:5000/api/add_video', opts)
      if (resp.status !== 200) {
        alert('There has been an error')
        return false
      }
      return true
    } catch (error) {
      console.log('There was an error', error)
    }
  }

  return store.token == null ? (
    <>
      <Error401 />
    </>
  ) : (
    <>
      <Header />
      <div className='upload-page'>
        <h1 className='title'>Upload</h1>
        <div className='upload-form'>
          <label htmlFor='name'>Name of video: </label>
          <input
            id='name'
            type='name'
            onChange={e => {
              setName(e.target.value)
            }}
          />
          <br />

          <label>Event Type: </label>
          <select id='event-type' name='event-type' size='1' onChange={handleEventTypeInput}>
            <option value='Intracloud'> Intracloud </option>
            <option value='Cloud-to-Ground'> Cloud to Ground </option>
            <option value='Cloud-to-Cloud'> Cloud to Cloud </option>
            <option value='Spider'> Spider </option>
            <option value='Upward'> Upward </option>
          </select>
          <br />

          <label htmlFor='date'>Date Recorded: </label>
          <input
            id='date'
            type='date'
            onChange={e => {
              setDate(e.target.value)
            }}
          />
          <br />
          <label htmlFor='time'>Time Recorded: </label>
          <input
            id='time'
            type='time'
            onChange={e => {
              setDuration(e.target.value)
            }}
          />
          <br />

          <label htmlFor='duration'>Duration: </label>
          <input
            id='duration'
            type='number'
            onChange={e => {
              setFps(e.target.value)
            }}
          />
          <br />

          <label htmlFor='fps'>Current FPS: </label>
          <input
            id='fps'
            type='number'
            onChange={e => {
              setFps(e.target.value)
            }}
          />
          <br />

          <label htmlFor='fps'>Original FPS: </label>
          <input
            id='fps'
            type='number'
            onChange={e => {
              setOriginalFps(e.target.value)
            }}
          />
          <br />

          <label htmlFor='fps'>File Size: </label>
          <input
            id='fps'
            type='number'
            onChange={e => {
              setSize(e.target.value)
            }}
          />
          <br />

          <label>Resolution: </label>
          <div onChange={handleResolutionInput}>
            <input type='radio' id='4k' name='resolution' value='4k' />
            <label htmlFor='4k'>4k</label>
            <input type='radio' id='1080' name='resolution' value='1080p' />
            <label htmlFor='1080'>1080p</label>
          </div>
          <br />

          <div>Native SDK File Upload Progress is {progress}%</div>
          <input type='file' onChange={handleFileInput} />
          <br />
          <button onClick={handleSubmission}> Upload to S3</button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Upload
