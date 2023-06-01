// Write your code here

import './index.css'

const TodoItems = props => {
  const {todoItem, onDeleteFunction} = props
  console.log(todoItem.title)

  const onDeleteTodo = () => {
    onDeleteFunction(todoItem.id)
  }
  return (
    <li className="each-todo-container">
      <p className="todo-description">{todoItem.title}</p>
      <button onClick={onDeleteTodo} className="delete-btn" type="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItems
