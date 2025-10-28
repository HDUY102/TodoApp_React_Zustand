import { initialTasks } from "@/data/initialTask";
import { Task, TypeFilter } from "@/generics/TodoGeneric";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface TodoState{
    tasks: Task[]
    currentFilter: TypeFilter

    onFilterChangeHandler: (filter: TypeFilter) => void
    onDeletedDoneTasksHandler: () => void
    onDeletedAllTasksHandler: () => void
    onToggleCompletedHandler: (id: number) => void
    onEditedTaskHandler: (id: number, title: string) => void
    onDeletedTaskHandler: (id:number) => void
    onSubmitTaskHandler: (title: string) => void
}

export const useTodoStore = create<TodoState>()(
    persist(
        (set) => ({
            tasks: initialTasks,
            currentFilter: 'All',

            onFilterChangeHandler: (filter) => set({ currentFilter: filter }),

            onDeletedDoneTasksHandler: () => {
                set((state) => ({
                    tasks: state.tasks.map(task =>
                        (task.isCompleted && !task.isDeleted) ? { ...task, isDeleted: true } : task)
                }))
            },

            onDeletedAllTasksHandler: () => {
                set((state) => ({
                    tasks: state.tasks.map(task =>
                        !task.isDeleted ? { ...task, isDeleted: true } : task)
                }))
            },

            onToggleCompletedHandler: (id) => {
                set((state) => ({
                    tasks: state.tasks.map(task =>
                        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task)
                }))
            },

            onEditedTaskHandler: (id, title) => {
                set((state) => ({
                    tasks: state.tasks.map(task =>
                        task.id === id ? { ...task, title: title } : task)
                }))
            },

            onDeletedTaskHandler: (id) => {
                set((state) => ({
                    tasks: state.tasks.map(task =>
                        task.id === id ? { ...task, isDeleted: true } : task)
                }))
            },

            onSubmitTaskHandler: (title) => {
                set((state) => ({
                    tasks: [
                        ...state.tasks,
                        { id: state.tasks.length+1, title: title, isCompleted: false, isDeleted: false }
                    ]
                }))
            },
        }),
        { name: "todo-storage", }
    )
)