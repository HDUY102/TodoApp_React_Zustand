import { useTodoStore } from '@/zustand/useTodoStore'
import React, { useRef, useState } from 'react'

const TodoInput = () => {
    const {onSubmitTaskHandler} = useTodoStore()
    const [title, setTitle] = useState('')
    const inputRef = useRef(null)

    const keyDownSubmitHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter' && title.trim() !== '') 
        {
        onSubmitTaskHandler(title)
        setTitle('')
        }
    }
    return (
        <div className='mt-5 border p-4'>
            <div className='text-center border'>
                <input ref={inputRef} value={title} onKeyDown={keyDownSubmitHandler} onChange={(e) => setTitle(e.target.value)} placeholder="Add New Task" className='w-full p-3'></input>
            </div>
            <button onClick={() => { 
            if (title.trim() !== '') {
                onSubmitTaskHandler(title)
                setTitle('')}}}
            className='bg-blue-500 w-full hover:cursor-pointer mt-3 p-3 text-white'>Add new Task</button>
        </div>
    )
}

export default TodoInput