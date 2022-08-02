import React, { useState } from 'react'
import { Col, Input, Button } from 'antd'
import { useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid'
// import { addTodo } from '../../redux/actions'
import todoListSlice, { addNewTodo } from '../TodoList/reducer'

const TodoForm = () => {
    const [todoName, setTodoName] = useState('')
    const dispatch = useDispatch();
    const handleAddButtonClick = () => {
        // dispatch(
        //     todoListSlice.actions.addTodo({
        //     id: uuid(),
        //     name: todoName,
        //     completed: false
        // }))
        dispatch<any>(addNewTodo(
            {
                id: uuid(),
                name: todoName,
                completed: false
            }
        ))
        setTodoName('')
    }
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodoName(e.target.value)
    }
    return (
        <Col span={24}>
            <Input.Group style={{ display: 'flex', marginTop: '20px' }} compact>
                <Input value={todoName} name='input-todo' onChange={handleInputChange} />
                <Button type='primary' name='submit-button' className='button-submit' style={{ background: '#2DEB56', borderColor: '#2DEB56', color: 'white' }} onClick={handleAddButtonClick}>
                    Add
                </Button>
            </Input.Group>
        </Col>
    )
}

export default TodoForm