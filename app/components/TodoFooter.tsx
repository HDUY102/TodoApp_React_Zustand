import { useTodoStore } from "@/zustand/useTodoStore"

const TodoFooter = () => {
    const onDeletedDoneTasksHandler = useTodoStore(state => state.onDeletedDoneTasksHandler)
    const onDeletedAllTasksHandler = useTodoStore(state => state.onDeletedAllTasksHandler)
    return (
        <div className='grid grid-cols-[45%_10%_45%] m-5 text-white'>
            <button onClick={onDeletedDoneTasksHandler} className="p-2 hover:bg-red-400 cursor-pointer bg-red-500">
                Delete Done Tasks
            </button>
            <button onClick={onDeletedAllTasksHandler} className="col-start-3 p-2 hover:bg-red-400 cursor-pointer  bg-red-500">
                Delete All Tasks
            </button>
        </div>
    )
}

export default TodoFooter