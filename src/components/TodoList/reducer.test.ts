import { Item } from "../../model";
import store from "../../redux/store";
import { addNewTodo, addTodo } from "./reducer";

describe('test actions redux',()=>{
    test('test action addtodo',()=>{
        let state = store.getState().todoList
        let initialTodo = {id:'1',name:'todo',completed:true}
        store.dispatch(addTodo(initialTodo))
        const initialTodoCount = state.length;
        // store.dispatch(addNewTodo({id:'1',name:'todo',completed:true}))
        state = store.getState().todoList
        const todoCount = state.length
        expect(todoCount).toEqual(initialTodoCount+1)
        const newTodo = state.find((todo:Item) =>todo.id === '1')      
        expect(newTodo).toEqual(initialTodo)  
    })
})