import React from 'react'
import { FaPencil, FaRegTrashCan } from 'react-icons/fa6'

const TodoItem = () => {
  return (
    <div className='flex justify-between border p-2 m-3'>
        <span>Title</span>
        <div>
            <button className="pl-2 text-red-300">
                <input type="checkbox" className="checkbox" />
            </button>
            <button className="pl-2 text-yellow-500">
                <FaPencil />
            </button>
            <button className="pl-2 text-red-500">
                <FaRegTrashCan />
            </button>
        </div>
    </div>
  )
}

export default TodoItem