import React from 'react'
import { Col, Row} from 'antd';
import { useSelector } from 'react-redux';
import { todoListSelector } from '../../redux/selector';
import TodoItem from '../TodoItem'
import TodoForm from '../TodoForm';

const TodoList = () => {
  const todoList = useSelector(todoListSelector)  
  return (
    <>
      <Row style={{ height: 'calc(100% - 130px)' }}>
        <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'scroll' }}>
          {
            todoList.map(todo=><TodoItem key={todo.id} item={todo}/>)
          }
        </Col>
        <TodoForm />
      </Row>
    </>
  )
}

export default TodoList