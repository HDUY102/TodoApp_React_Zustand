import React from 'react'

const TodoFooter = () => {
  return (
    <div className='grid grid-rows-1 grid-cols-3'>
        <button className='bg-red-500 hover:bg-red-400 p-2 hover:cursor-pointer'>Delete Done Task</button>
        <button className='bg-red-500 hover:bg-red-400 p-2 col-start-3 hover:cursor-pointer'>Delete Done Task</button>
    </div>
  )
}

export default TodoFooter