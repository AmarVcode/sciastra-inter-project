import React from 'react'

const main = () => {
  return (
    <div>

<h1 className='head'>
Building the scientists of tomorrow! 
</h1>


<div className="boxflex">
  <div className="info">
    <div className='imgdiv'>
      <img src="https://files.sciastra.com/scientist-removebg-preview.png" alt="" />
    </div>
    <div>
      <h5>
      Learn from future scientists 
      </h5>
    </div>
  </div>
  <div className="info">
    <div className='imgdiv'>
      <img src="https://files.sciastra.com/brain_pic-removebg-preview.png" alt="" />
    </div>
    <div>
      <h5>
      Think Like a Scientist
      </h5>
    </div>
  </div>
  <div className="info">
    <div className='imgdiv'>
      <img src="https://files.sciastra.com/mentor-removebg-preview.png" alt="" />
    </div>
    <div>
      <h5>
      Personal Mentorship 
      </h5>
    </div>
  </div>
</div>






<div className="box1">
  <div>
  <video controls  playsInline="" autoPlay={true} muted="" loop={true}>
                                    <source src="https://sciastra.com/files_upload/svg.mp4" type="video/mp4" />
                                </video>
  </div>
  <div>
<h2 className="head exc">
Sourav Ganguly 's Message
</h2>
<p>
A good teacher is like a candle, it consumes itself to light the way for others
</p>
  </div>
</div>



<img className='rocket' src="https://www.sciastra.com/rocket.png" alt="" />
<div className="boxflex">
<div className='cardinfo'>
  <div className='proimg'>
    <div>
      <img src="https://www.sciastra.com/Admin/Homepage/Student_Rank/Uploaded_image/16665584071-removebg-preview.png" alt="" />
    </div>
    <div>Adarsh V</div>
  </div>
  <div className='contentimg'>
    <p>
    Congratulations!
    </p>
    <h5>
    AIR-1 (IAT) AIR-15 (NEST)
    </h5>
  </div>
</div>
<div className='cardinfo'>
  <div className='proimg'>
    <div>
      <img src="https://www.sciastra.com/Admin/Homepage/Student_Rank/Uploaded_image/1666396377image_2_-removebg-preview.png" alt="" />
    </div>
    <div>
Dhirtiraj Bastav
</div>
  </div>
  <div className='contentimg'>
    <p>
    Congratulations!
    </p>
    <h5>
    Rank-1 (Assam board)
    </h5>
  </div>
</div>
</div>













    </div>
  )
}

export default main