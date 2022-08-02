import { resolve } from "path";
import { Item } from "../model";
import axiosClient from "./axiosClient";

const todoAPI = {
    getAll: async () => {
        const res = await axiosClient.get(`/todo`)
        return res
        // return new Promise((resolve)=>{
        //     return resolve({name:'111'})
        // })
    },
    add: async (item:Item) => {
        const res = await axiosClient.post(`/todo`,item)
        return res
    },
    update: async (item:Item) => {
        const res = await axiosClient.put(`/todo/${item.id}`,item)
        return res
    },
    remove: async (item:Item) => {
        const res = await axiosClient.delete(`/todo/${item.id}`)
        return res
    },
}
export default todoAPI