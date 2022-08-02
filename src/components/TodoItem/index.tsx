import React, { useState } from 'react'
import { Row, Checkbox, Button, Modal, Input, Typography, Divider, Col } from 'antd';
import { useDispatch } from 'react-redux'
// import { removeTodo, updateTodo } from '../../redux/actions';
import todoListSlice, { removeATodo, updateATodo } from '../TodoList/reducer';
import { Item } from '../../model';
import { EditOutlined, CloseOutlined } from '@ant-design/icons'


export interface todoItemProps {
    item: Item
}

const TodoItem = ({ item }: todoItemProps) => {
    const dispatch = useDispatch()
    const [itemUpdate, setItemUpdate] = useState(item)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [checked, setChecked] = useState(item.completed)

    const onChangeUpdate = (e: React.ChangeEvent<HTMLInputElement>) => { setItemUpdate({ ...itemUpdate, name: e.target.value }) }
    const handleUpdate = (data: Item) => {
        dispatch(todoListSlice.actions.updateTodo(data)) 
        dispatch<any>(updateATodo(data))
    }
    const handleRemove = (data: Item) => {
        dispatch(todoListSlice.actions.removeTodo(data)) 
        dispatch<any>(removeATodo(data))
    }

    const toggleCheckbox = () => {
        setChecked(!checked)
        handleUpdate({ ...itemUpdate, completed: !checked })
    }
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        if (itemUpdate.name !== '') {
            handleUpdate(itemUpdate)
        }
        else {
            setItemUpdate(item)
        }
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setItemUpdate(item)
        setIsModalVisible(false);
    };
    return (
        <>
            <Row
                justify='space-between'
                style={{
                    marginBottom: 3,
                }}
            >
                <Col span={18} style={{ ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}) }}>
                    <Checkbox checked={checked} onChange={toggleCheckbox} style={{ display: 'flex' }}>
                        {item.name}
                    </Checkbox>
                    <Modal
                        visible={isModalVisible}
                        onOk={handleOk}
                        onCancel={handleCancel}
                    >
                        <Typography>Update Todo</Typography>
                        <Divider />
                        <Input value={itemUpdate.name} onChange={(e) => onChangeUpdate(e)} />
                    </Modal>
                </Col>
                <Col span={4}>
                    <Row justify="space-around">
                        <Button type='primary' icon={<EditOutlined />} onClick={showModal} disabled={checked} 
                        style={{ ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}) }} />
                        <Button type='primary' danger icon={<CloseOutlined />} onClick={() => handleRemove(item)} style={{ opacity: 1 }} />
                    </Row>
                </Col>

            </Row>

        </>
    )
}
export const TypeOfTodoItem = typeof TodoItem

export default TodoItem
