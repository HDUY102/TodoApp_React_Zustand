import React from 'react'

const TodoInput = () => {
  return (
    <div className='border grid p-3 mt-5'>
        <input placeholder='Add New Task' className='border p-2'></input>
        <button className='bg-blue-500 mt-3 p-2'>Add New Task</button>
    </div>
  )
}

export default TodoInput