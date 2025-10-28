'use client'
import TodoInput from './TodoInput'
import TodoHeader from './TodoHeader'
import TodoFooter from './TodoFooter'
import TodoList from './TodoList'
import { initialButtonTask } from '@/data/initialTask'
import { useEffect, useState } from 'react'

const TodoPage = () => {
  const [animateClass, setAnimateClass] = useState('')

  useEffect(() => { // reset animation span 'Todo Task'
    setAnimateClass('animate')
  }, [])

  return (
    <div className='grid grid-cols-[250px_1fr_250px] grid-rows-[180px_1fr_180px]'>
      <div className='col-start-2 row-start-1'>
        <TodoInput/>
      </div>
      <div className='col-start-2 row-start-2'>
        <span className={`col-start-2 flex justify-center m-3 uppercase text-2xl font-extrabold text-transparent bg-clip-text ${animateClass}`} style={{
            backgroundImage:
              'linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet, red)',
            backgroundSize: '400% auto',
            WebkitBackgroundClip: 'text',
            animation: 'shake 1s infinite, rainbow 3s linear infinite',
          }}>Todo Task</span>
        <TodoHeader filters={initialButtonTask}/>
        <TodoList/>
      </div>
      <div className='col-start-2 row-start-3'>
        <TodoFooter/>
      </div>

      <style jsx>{`
        .animate {
          animation: shake 1s infinite, rainbow 3s linear infinite;
        }

        @keyframes shake {
          0% { transform: rotate(0deg) translate(0, 0); }
          10% { transform: rotate(-5deg) translate(-2px, -2px); }
          20% { transform: rotate(5deg) translate(2px, -2px); }
          30% { transform: rotate(-5deg) translate(-2px, 2px); }
          40% { transform: rotate(5deg) translate(2px, 2px); }
          50% { transform: rotate(-3deg) translate(0, -2px); }
          60% { transform: rotate(3deg) translate(2px, 0); }
          70% { transform: rotate(-2deg) translate(-1px, 1px); }
          80% { transform: rotate(2deg) translate(1px, -1px); }
          90% { transform: rotate(-1deg) translate(-1px, 1px); }
          100% { transform: rotate(0deg) translate(0, 0); }
        }

        @keyframes rainbow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  )
}

export default TodoPage