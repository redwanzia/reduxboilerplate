import React, {useState} from 'react'
import {useSpring, animated} from 'react-spring'
import img from '../assets/mern1.jpg'



const Toggle = () => {

  const [isToggled,setToggled] = useState(false)
  
  	const fade = useSpring({	
    opacity: isToggled ? 1 : 0,
    // fontSize: isToggled ? '1rem' : '10em',
    color: isToggled ? 'green' : 'green',
    transform: isToggled ? 'translate3d(0,0,0)' : 'translate3d(0,150px,150px)',
    config: {duration: 2000}
	})

  return (
    <div>
      <animated.h1 style={fade}>hello</animated.h1>
      <button onClick={()=>setToggled(!isToggled)} >Toggle</button>



      {isToggled ? 
      <animated.p style={fade}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, rerum.</animated.p>
      :null
      }
    </div>
  )
}

export default Toggle
