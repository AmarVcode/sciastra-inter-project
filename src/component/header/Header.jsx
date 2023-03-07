import React from 'react';
import Navbar from './Navbar';

const header = () => {
  return (
    <header>
      <Navbar />
      <video  className="mainbg" playsInline="" autoPlay="" muted="" loop="">
                <source src="https://www.sciastra.com/video_2023-02-23_19-22-35.mp4" type="video/webm" />
            </video>

        <div className="content">
          <h2>
          SciAstra
          </h2>
          <p>
          For the love of Science
          </p>
          <button>
            Get your free material here
          </button>
        </div>
    </header>
  )
}

export default header