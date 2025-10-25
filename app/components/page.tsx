import React from 'react'
import TodoInput from './TodoInput'
import TodoHeader from './TodoHeader'
import TodoFooter from './TodoFooter'
import TodoList from './TodoList'

const TodoPage = () => {
  return (
    <div className='grid grid-cols-[250px_1fr_250px] grid-rows-[180px_1fr_180px]'>
      <div className='col-start-2 row-start-1'>
        <TodoInput/>
      </div>
      <div className='col-start-2 row-start-2'>
        <span className='col-start-2 flex justify-center'>Todo Task</span>
        <TodoHeader/>
        <TodoList/>
      </div>
      <div className='col-start-2 row-start-3'>
        <TodoFooter/>
      </div>
    </div>
  )
}

export default TodoPage