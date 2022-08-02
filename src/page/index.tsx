import React from 'react'
import { Divider } from 'antd';
import TodoHeader from '../components/TodoHeader'
import TodoList from '../components/TodoList'

const TodoContainer = () => {
    return (
        <>
            <div
                style={{
                    width: 500,
                    margin: '10vh auto',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'white',
                    padding: 20,
                    boxShadow: '0 0 10px 4px #bfbfbf',
                    borderRadius: 5,
                    height: '80vh',
                }}
            >
                <TodoHeader />
                <Divider />
                <TodoList />
            </div>
        </>
    )
}

export default TodoContainer