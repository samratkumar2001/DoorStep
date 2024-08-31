import React, { useState } from 'react'
import Card from './Card'
import './Test.css'

const Test = () => {
  const [showComponent, setShowComponent] = useState(false);
  const handleClick = () => {
    setShowComponent(true);
  };

  

  return (
    
    <>
      <div className='box-container'>
        <button onClick={handleClick}>Click Me</button>
        {showComponent && <Card />}
      </div>
    </>
  )
}

export default Test