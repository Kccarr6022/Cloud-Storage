import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../store/appContext'
import './index.scss'
import { Button } from '@material-ui/core'

const VideoCard = props => {
  const { store } = useContext(Context)
  const [videoExists, setVideoExists] = useState(true)

  const deleteVideo = async => {
    const opts = {
      method: 'delete',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: store.token, // current foreign key (change)
        name: props.video['name'], // current primary key (change)
      }),
    }
    fetch(process.env.REACT_APP_SERVICE_URI + 'api/delete_video', opts)
      .then(resp => resp.json())
      .catch(error => {
        console.log('An error occured', error)
      })
    setVideoExists(false)
  }

  return (
    <>
      {videoExists ? (
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
          <button>Watch</button>
          <button onClick={deleteVideo}>Del</button>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

export default VideoCard
