import React, { useState } from 'react'



const navbar = () => {


const [menu, setmenu]= useState('');

const showmenu=()=>{
  console.log(menu)
  if(menu === ''){
    setmenu('letshow')
  }
  else{
    setmenu('')
  }
}


console.log(menu)


  return (
    <div className='grid'>
  <div className="logo">
      <img src="https://www.sciastra.com/Assets/Images/new_logo_sci(1).png" alt="" />
    </div>
    <nav className={menu}>
    <a href="#">home</a>
    <a href="#">courses</a>
    <a href="#">blogs</a>
    <a href="#">materials</a>
    <a href="#">team</a>
    <a href="#">tss</a>
    <a href="#">contact us</a>
    <a href="#">login</a>
    </nav>
    <button className='menu' onClick={()=>{showmenu()}}>
    <svg fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
    </button>
    </div>
  
  )
}

export default navbar