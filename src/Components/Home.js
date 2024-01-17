import React from 'react'
import '../Styles/Home.css'
import techWoman from '../videos/techWoman.mp4'

function Home() {
  return (
    <>
      <div id="home" className="intro route bg-image"  >
        <div className="overlay-itro" />
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">I'm Salima DAOUAME</h1>
              <p className="intro-subtitle">Web Developer</p>
            </div>
          </div>
        </div>
        <video src={techWoman} autoPlay loop muted />
      </div>

    </>
  )
}

export default Home;
