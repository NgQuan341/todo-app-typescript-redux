import { Item } from "../model";
import axiosClient from "./axiosClient";
import todoAPI from "./todoApi";

describe('todos API testing',()=>{
    test('get list todos available', async ()=>{
        let todoListFixture = [
            {
                id:'1',
                name:'todo',
                completed:true
            }
        ]
        const mockGetAllTodos = jest.spyOn(axiosClient, 'get').mockResolvedValueOnce(todoListFixture)
        // const params = {}
        let endpoint = `/todo`
        const result = await todoAPI.getAll();
        // check url
        expect(mockGetAllTodos).toBeCalledWith(endpoint)  
        // check response      
        expect(result).toEqual(todoListFixture)
        
        // const mockGetAlltodo = jest.fn(todoAPI.getAll)
        // const result = await mockGetAlltodo();
        // console.log(result.data);
        // expect(result.data).toEqual(todoListFixture)
    })
    test('add a todo available', async () => {
        let todoAdd:Item = 
        {
            id:'1',
            name:'todo',
            completed:false
        }
        const mockPostTodo = jest.spyOn(axiosClient,'post').mockResolvedValueOnce(todoAdd)
        const result = await todoAPI.add(todoAdd)
        let endpoint = `/todo`
        // check url and params when call api
        expect(mockPostTodo).toBeCalledWith(endpoint, todoAdd)  
        // check response      
        expect(result).toEqual(todoAdd)

        // const mockPost = jest.fn(todoAPI.add)
        // const result = await mockPost(todoAdd)
        // todoAdd.id = result.data.id
        // expect(result.data).toEqual(todoAdd)
    })
    test('update a todo available', async () => {
        let todoUpdate = {
            id:'1',
            name:'todo update',
            completed:false
        }
        let endpoint = `/todo`
        const mockUpdateTodo = jest.spyOn(axiosClient,'put').mockResolvedValueOnce(todoUpdate)        
        const result = await todoAPI.update(todoUpdate)
         // check url when call api
         expect(mockUpdateTodo).toBeCalledWith(`${endpoint}/${todoUpdate.id}`,todoUpdate)  
         // check response      
         expect(result).toEqual(todoUpdate)
    })
    test('delete a todo available', async () => {
        let todoDelete = {
            id:'1',
            name:'todo delte',
            completed:false
        }
        let endpoint = `/todo`
        const mockUpdateTodo = jest.spyOn(axiosClient,'delete').mockResolvedValueOnce(todoDelete)        
        const result = await todoAPI.remove(todoDelete)
         // check url when call api
         expect(mockUpdateTodo).toBeCalledWith(`${endpoint}/${todoDelete.id}`)  
         // check response      
         expect(result).toEqual(todoDelete)
    })
})