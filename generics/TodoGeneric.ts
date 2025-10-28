export interface Task{
    id: number,
    title: string,
    isCompleted: boolean,
    isDeleted: boolean,
}

export type TypeFilter = 'All' | 'Todo' | 'Done'

export interface TaskFilter{
    id: number,
    label: string,
    type: TypeFilter
}