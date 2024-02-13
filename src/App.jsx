import React from 'react'
import './App.css'
import Display from './Component/Display'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      Todo: [],
      TodoItem: { key: "", Description:"" }
    }
  }

  handleDelete = (key)=>{
    const filteredItems = this.state.Todo.filter(currItem=>
      currItem.key!==key);
      this.setState({
        Todo:filteredItems
      })
  }

  handleUpdate = (newDescription, key)=>{
    const listOfItems = this.state.Todo

    listOfItems.map(currItem=>{
      if(currItem.key===key){
        currItem.Description = newDescription;
      }
    })
    this.setState({
      Todo:listOfItems
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newItem = this.state.TodoItem
    if (newItem.Description != "") {
      const Item = [...this.state.Todo, newItem]

      this.setState({
        Todo: Item,
        TodoItem: {key: " ", Description: ""}
      })
    }
  }

  handleInput = (e) => {
    this.setState ({
      TodoItem: {
        key: Date.now(),
        Description: e.target.value
      }
    })
  }

  render() {
    return (
      <div className='container'>
      <form onSubmit={this.handleSubmit}>
        <input type='text' placeholder='Type here' onChange={this.handleInput} value={this.state.TodoItem.Description} />

        <button className='button' type="submit">Add Item</button>
      </form>
      <p>{this.state.TodoItem.Description}</p>
      <Display TodoItem = {this.state.Todo} handleUpdate = {this.handleUpdate} handleDelete = {this.handleDelete}/>
      </div>
    )
  }
}

export default App
