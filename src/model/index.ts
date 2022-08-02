export interface Action {
    type: string
    payload: Item
}

export interface Item {
    id: string
    name: string
    completed: boolean
}

export interface typeState {
    status: string
    todoList: Item[]
}
