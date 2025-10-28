import { Task } from '@/generics/TodoGeneric'
import { useTodoStore } from '@/zustand/useTodoStore'
import { useEffect, useState } from 'react'
import { FaPencil, FaRegTrashCan } from 'react-icons/fa6'

const TodoItem = ({task}:{ task: Task }) => {
    const {onToggleCompletedHandler, onEditedTaskHandler, onDeletedTaskHandler} = useTodoStore()
    const [isEditing, setIsEditing] = useState(false)
    const [editTask, setEditTask] = useState(task.title)

    useEffect(() => {
        if (isEditing)  setEditTask(task.title)
    }, [isEditing, task.title])

    const editSaveHandler = () => {
        onEditedTaskHandler(task.id, editTask)
        setIsEditing(false)
    }
    
    const cancelEditHandler = () => {
        setEditTask(task.title)
        setIsEditing(false)
    }

    const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') editSaveHandler()
        else if (e.key === 'Escape') cancelEditHandler()
    }

    return (
    <div className='flex justify-between border p-2 m-3'>
        <div className='ml-4 '>
            {isEditing ? 
                (<input value={editTask} onChange={(e) => setEditTask(e.target.value)}
                    onKeyDown={keyDownHandler} autoFocus className='p-1 border focus:border-blue-500 focus:outline-none focus:rounded-md'/>) 
            : (task?.isCompleted ? 
                <span className='line-through text-red-500'>{task?.title}</span> : <span>{task?.title}</span>)}
        </div>
        <div>
            <button className="pl-2 text-red-300">
                <input checked={task?.isCompleted} onChange={() => onToggleCompletedHandler(task.id)} type="checkbox" />
            </button>
            <button onClick={() => {setIsEditing(!isEditing) }}  className="pl-2 text-yellow-500 hover:cursor-pointer hover:text-yellow-400">
                <FaPencil />
            </button>
            <button onClick={() => onDeletedTaskHandler(task.id)} className="pl-2 text-red-500 hover:cursor-pointer hover:text-red-400">
                <FaRegTrashCan />
            </button>
        </div>
    </div>
    )
}

export default TodoItem