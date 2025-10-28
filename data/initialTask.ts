import { Task, TaskFilter } from "@/generics/TodoGeneric";

export const initialTasks:Task[] = [
    {id:1, title: 'A', isCompleted: true, isDeleted: false},
    {id:2, title: 'B', isCompleted: false, isDeleted: false},
    {id:3, title: 'C', isCompleted: true, isDeleted: true},
]

export const initialButtonTask:TaskFilter[] = [
    {id: 1, label: 'All Todo Tasks', type:"All"},
    {id: 2, label: 'Done Todo Tasks', type:"Done"},
    {id: 3, label: 'Todo Tasks', type:"Todo"},
]