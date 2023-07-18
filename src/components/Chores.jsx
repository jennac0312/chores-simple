import React, { useContext } from 'react'
import { AppContext } from '../contexts/app_context'

const Chores = ( {chore, index, name} ) => {

    let { complete, setComplete, toggleComplete } = useContext(AppContext)
    let identifier = `${name}${index}`

  return (
    <div className={`choreContainer ${identifier}`} onClick={() => toggleComplete(name, chore.task)} id={chore.isComplete ? 'complete' : 'incomplete'}>
        <p className='task'>{chore.task}</p>
        <p className='description'>{chore.description}</p>
    </div>
  )
}

export default Chores
