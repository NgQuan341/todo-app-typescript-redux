import { Action, Item } from "../model"

export const addTodo = (data:Item):Action =>{
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}
export const updateTodo = (data:Item):Action =>{
    return {
        type: 'todoList/updateTodo',
        payload: data
    }
}
export const removeTodo = (data:Item):Action =>{
    return {
        type: 'todoList/removeTodo',
        payload: data
    }
}