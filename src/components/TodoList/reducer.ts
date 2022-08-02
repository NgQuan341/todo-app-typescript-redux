import { Action, Item, typeState } from "../../model"
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import todoAPI from "../../api/todoApi";

// const initState:Item[] = []

// const todoListReducer = (state = initState, action:Action):Item[] =>{
//     switch(action.type){
//         case 'todoList/addTodo':
//             return [ ...state, action.payload ]
//         case 'todoList/updateTodo':
//             return state.map(todo=>{
//                 if(todo.id === action.payload.id){
//                     todo = action.payload
//                 }
//                 return todo
//             })
//         case 'todoList/removeTodo':
//             return state.filter(todo=>todo.id!==action.payload.id)
//         default :
//             return state
//     }
// }
// export default todoListReducer
export type typeStateTodoList = {
    status:string
    todoList:[]
}

const todoListSlice = createSlice({
    name: 'todoList',
    initialState: {status:'idle', todoList:[]},
    reducers: {
        addTodo: (state: typeState, action: PayloadAction<Item>) => {
            state.todoList.push(action.payload)
        },
        updateTodo: (state: typeState, action: PayloadAction<Item>) => {
            let index = state.todoList.findIndex(todo => todo.id === action.payload.id)
            if (index > -1) {
                state.todoList[index] = action.payload
            }
        },
        removeTodo: (state: typeState, action: PayloadAction<Item>) => {
            let index = state.todoList.findIndex(todo => todo.id === action.payload.id)
            if (index > -1) {
                state.todoList.splice(index, 1);
            }
        }
    },
    extraReducers: (builder) =>{
        builder
        .addCase(fetchTodos.pending, (state:typeState, action)=>{
            state.status = 'loading'
        })
        .addCase(fetchTodos.fulfilled, (state:typeState, action)=>{
            state.todoList = action.payload
            state.status = 'idle'
        })
        .addCase(addNewTodo.fulfilled, (state:typeState, action)=>{
            state.status = 'idle'
            state.todoList.push(action.payload) 
        })
        .addCase(updateATodo.fulfilled, (state:typeState, action) =>{
            state.status = 'idle'
            let index = state.todoList.findIndex(todo => todo.id === action.payload.id)
            if (index > -1) {
                state.todoList[index] = action.payload
            }
        })
        .addCase(removeATodo.fulfilled, (state:typeState, action) => {
            state.status = 'idle'
            let index = state.todoList.findIndex(todo => todo.id === action.payload.id)
            if (index > -1) {
                state.todoList.splice(index, 1);
            }
        })
    }
}
);

export const {addTodo} = todoListSlice.actions
export default todoListSlice

export const fetchTodos = createAsyncThunk ('todoList/fetchTodos', async ()=>{
    const res = await todoAPI.getAll()
    const data = res.data
    return data
})

export const addNewTodo = createAsyncThunk('todoList/addNewTodo', async (newTodo:Item)=>{
    const res = await todoAPI.add(newTodo)
    const data = res.data
    return data
})
export const updateATodo = createAsyncThunk('todoList/updateATodo', async (todo:Item)=>{
    const res = await todoAPI.update(todo)
    const data = res.data
    return data
})
export const removeATodo = createAsyncThunk('todoList/removeATodo', async (todo:Item)=>{
    const res = await todoAPI.remove(todo)
    const data = res.data
    return data
})
