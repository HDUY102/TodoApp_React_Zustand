import TodoItem from './TodoItem'
import { useTodoStore } from '@/zustand/useTodoStore'

const TodoList = () => {
    const {tasks,currentFilter} = useTodoStore()

    const currentFilteredTasks = tasks.filter(task => {
        if (task.isDeleted) return false
        if (currentFilter === 'Todo') return !task.isCompleted
        if (currentFilter === 'Done') return task.isCompleted
        return true
    })
    return (
    <div>
        {currentFilteredTasks?.map((task) => (
            <TodoItem key={task.id} task={task}/>
        ))}
    </div>
    )
}

export default TodoList
