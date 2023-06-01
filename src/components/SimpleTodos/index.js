import {Component} from 'react'
import './index.css'
import TodoItems from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {todoListItems: initialTodosList}

  onDelete = id => {
    console.log('simple Todo')
    console.log(id)

    this.setState(preState => ({
      todoListItems: preState.todoListItems.filter(each => each.id !== id),
    }))
  }

  render() {
    const {todoListItems} = this.state
    console.log(todoListItems)
    return (
      <div className="app-container">
        <div className="bg-container">
          <h1 className="heading">Simple Todos</h1>
          <ul className="todo-Items-container">
            {todoListItems.map(each => (
              <TodoItems
                key={each.id}
                todoItem={each}
                onDeleteFunction={this.onDelete}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
