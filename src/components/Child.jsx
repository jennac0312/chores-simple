import React from 'react'
import Chores from './Chores'

const Child = ( {child} ) => {
  return (
    <div className='child'>
      <h1>{child.name}</h1>
      <div className='choreList'>
        { child.chores.map((chore, index) => {
            return (
                <Chores chore={chore} key={index} index={index} name={child.name}/>
            )
        }) }
      </div>
    </div>
  )
}

export default Child
