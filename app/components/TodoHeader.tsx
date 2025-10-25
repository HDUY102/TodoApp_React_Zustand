import React from 'react'

const TodoHeader = () => {
  return (
    <div className='flex justify-evenly'>
       <button className="p-4 bg-blue-500 hover:bg-blue-400 hover:cursor-pointer">All Tasks</button>
       <button className="p-4 bg-blue-500 hover:bg-blue-400 hover:cursor-pointer">Done Tasks</button>
       <button className="p-4 bg-blue-500 hover:bg-blue-400 hover:cursor-pointer">Todo Tasks</button> 
    </div>
  )
}

export default TodoHeader