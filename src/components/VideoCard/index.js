import React, { useContext, useEffect } from 'react'
import { Context } from '../../store/appContext'
import './index.scss'
import { Button } from '@material-ui/core'

const VideoCard = props => {
  const { store } = useContext(Context)

  return (
    <div id='videocard'>
      <h1 className='videoname'>{props.video['name']}</h1>
      <video autoPlay muted src={props.video['url']} width='200px' height='125px'/>
      <h1 className='videoname'>{props.video['date']}</h1>
      <button>
        <a href={props.video['url']}> Download </a>
      </button>
      <button>Watch</button>
      <button>Del</button>
    </div>
  )
}

export default VideoCard
