import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../store/appContext'
import { useNavigate } from 'react-router-dom'
import './index.scss'

const VideoCard = props => {
  const { store } = useContext(Context)
  const [videoExists, setVideoExists] = useState(true)
  const [prompt, setPrompt] = useState(null)
  let navigate = useNavigate()

  const handledelete = () => {
    setPrompt('Would you like to delete this video')
  }

  const handleNo = () => {
    setPrompt(null)
  }

  /**
   * Requests to delete video owned by user
   * @parms void 
   * @return void
   */
  const deleteVideo = async () => {
    const opts = {
      method: 'delete',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: store.token, // current foreign key (change)
        video_id: props.video['name'], // current primary key (change)
      }),
    }
    await fetch(process.env.REACT_APP_SERVICE_URI + 'api/delete_video', opts)
      .then(resp => resp.json())
      .then(resp => {
        if (resp.status === 200) {
          setVideoExists(false)
        } else {
          setPrompt('You are unauthorized to do delete this video.')
        }
      })
      .catch(error => {
        console.log('An error occured', error)
      })
  }

  return (
    <>
      {videoExists ? (
        prompt == null ? (
          <div id='videocard'>
            <h1 className='video-name'>{props.video['name']}</h1>
            <h1 className='video-type'>{props.video['event_type']}</h1>
            <video autoPlay muted src={props.video['url']} width='200px' height='125px' />
            <h1 className='video-date'>
              {props.video['date']} {props.video['time']}
            </h1>
            <button>
              <a href={props.video['url']}> Download </a>
            </button>
            <button
              onClick={() => {
                let video = props.video['url']
                video = video.split('.com/')[1]
                navigate(`/watch/${video}`)
              }}
            >
              Watch
            </button>
            <button onClick={handledelete}>Del</button>
          </div>
        ) : (
          <>
            <div id='promptcard'>
              <h1 className='prompt'>{prompt}</h1>

              <button onClick={deleteVideo}>Yes</button>
              <br />
              <button onClick={handleNo}>No</button>
            </div>
          </>
        )
      ) : null}
    </>
  )
}

export default VideoCard
