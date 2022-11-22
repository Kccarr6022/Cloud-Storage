import React, { useContext, useEffect } from 'react'
import { Context } from '../../store/appContext'
import Header from '../../components/NavBar'
import Footer from '../../components/Footer'
import VideoCard from '../../components/VideoCard'
import Error401 from '../Error401'
import './index.scss'

const Archive = () => {
  const { store, actions } = useContext(Context)

  useEffect(() => {
    if (store.token) {
      actions.getVideos()
    } else {
      actions.getPublicVideos()
    }
  }, [])

  return store.token == null ? (
    <>
      <Header />
      <div className='archive-page'>
        <h1 className='title'>Archive</h1>
        <div className='videos'>
          <h2 className='videos-header'>Videos</h2>
          <div className='videocard-container'>{store.videos ? store.videos.map(video => <VideoCard video={video} />) : <h1>No videos</h1>}</div>
        </div>
      </div>
      <Footer />
    </>
  ) : store.videos ? (
    <>
      <Header />
      <div className='archive-page'>
        <h1 className='title'>Archive</h1>
        <div className='videos'>
          <h2 className='videos-header'>Videos</h2>
          <div className='videocard-container'>
            {store.videos.map(video => (
              <VideoCard video={video} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <h1 className='title'>Loading...</h1>
  )
}

export default Archive
