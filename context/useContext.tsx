'use client'
import useTodo from '@/hooks/Todo/useTodo'
import { createContext } from 'react'

type TodoContextType = ReturnType<typeof useTodo>

const TodoContext = createContext<TodoContextType | null>(null)

const useContext = ({children} : {children:React.ReactNode}) => {
    const [todo] = useTodo()
    <TodoContext.Provider value={todo}>
        {children}
    </TodoContext.Provider>
}

export 