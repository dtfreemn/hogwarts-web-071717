import React from 'react';
import Hog from './Hog'

const HogList = (props) => {
  return (
    <div className='ui sixteen wide column'>
      {props.hogs.map(hog => <Hog key={hog.name} hogDetails={hog}/>)}
    </div>
  )
}

export default HogList;