import React from 'react'
import YoutubeEmbed from '../components/YoutubeEmbed'
import VideoInfo from '../components/VideoInfo'


const HomePage = () => (
  <div>
    <h1 className='title is-1'>This is the Home Page</h1>
    <div className='container'>
      <div className='row justify-content-md-center my-3'>
        <div className='col-12 col-md-4'>
          <YoutubeEmbed embedId='gguozxKlWO0'></YoutubeEmbed>
        </div>
        <div className='col-12 col-md-6'>
          <VideoInfo />
        </div>
      </div>
      <hr className='solid'></hr>

      <div className='row justify-content-md-center my-3'>
        <div className='col-12 col-md-4'>
          <YoutubeEmbed embedId='gguozxKlWO0'></YoutubeEmbed>
        </div>
        <div className='col-12 col-md-6'>
          <VideoInfo />
        </div>
      </div>
    </div>
  </div>
);

export default HomePage
