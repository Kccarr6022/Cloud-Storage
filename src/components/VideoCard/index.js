import React, { useContext, useEffect } from 'react'
import { Context } from '../../store/appContext'
import './index.scss'
import { Button } from '@material-ui/core'

const VideoCard = props => {
  const { store } = useContext(Context)

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
  }

  return (
    <div id='videocard'>
      <h1 className='videoname'>{props.video['name']}</h1>
      <video autoPlay muted src={props.video['url']} width='200px' height='125px' />
      <h1 className='videoname'>{props.video['date']}</h1>
      <button>
        <a href={props.video['url']}> Download </a>
      </button>
      <button>Watch</button>
      <button onClick={deleteVideo}>Del</button>
    </div>
  )
}

export default VideoCard
