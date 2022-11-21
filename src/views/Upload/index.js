import React, { useContext, useState } from 'react'
import { Context } from '../../store/appContext'
import Header from '../../components/NavBar'
import Footer from '../../components/Footer'
import Error401 from '../Error401'
import './index.scss'
import AWS from 'aws-sdk'

const { REACT_APP_S3_BUCKET, } = process.env
const REGION = 'us-east-1'

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
  const [progress, setProgress] = useState(0)
  const [selectedFile, setSelectedFile] = useState(null)

  const handleFileInput = e => {
    setSelectedFile(e.target.files[0])
  }

  const uploadFile = file => {
    const params = {
      ACL: 'public-read',
      Body: file,
      Bucket: REACT_APP_S3_BUCKET,
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
          <label for='name'>Name of video: </label>
          <input id='name' type='name' />
          <br />
          <label for='date'>Date Recorded: </label>
          <input id='date' type='date' />
          <br />

          <label>Event Type: </label>
          <input type='radio' id='intracloud' name='event_type' value='Intracloud' />
          <label for='intracloud'>Intracloud</label>
          <input type='radio' id='cloud_to_ground' name='event_type' value='Cloud to Ground' />
          <label for='cloud_to_ground'>Cloud to Ground</label>
          <input type='radio' id='cloud_to_cloud' name='event_type' value='Cloud to Cloud' />
          <label for='cloud_to_cloud'>Cloud to Cloud</label>
          <input type='radio' id='spider' name='event_type' value='Spider' />
          <label for='spider'>Spider</label>
          <input type='radio' id='upward' name='event_type' value='Upward' />
          <label for='upward'>Upward</label>
          <br />

          <label for='fps'>Original FPS: </label>
          <input id='fps' type='number' />
          <br />

          <label for='fps'>Current FPS: </label>
          <input id='fps' type='number' />
          <br />

          <label for='fps'>File Size: </label>
          <input id='fps' type='number' />
          <br />

          <label>Resolution: </label>
          <input type='radio' id='4k' name='resolution' value='4k' />
          <label for='4k'>4k</label>
          <input type='radio' id='1080' name='resolution' value='1080' />
          <label for='1080'>1080p</label>
          <br />

          <div>Native SDK File Upload Progress is {progress}%</div>
          <input type='file' onChange={handleFileInput} />
          <button onClick={() => uploadFile(selectedFile)}> Upload to S3</button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Upload
