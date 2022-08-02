import React from 'react'
import { Typography } from 'antd'

const TodoHeader = () => {
  const { Title } = Typography
  return (
    <>
    <Title style={{ textAlign: 'center' }} level={2}>TODO APP</Title>
    </>
  )
}

export default TodoHeader