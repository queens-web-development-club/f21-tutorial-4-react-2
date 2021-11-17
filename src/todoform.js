// Import react, and hook useState as we need to manage state in this component
import React, { useState } from 'react'
// Importing task component. The ./ means to look in the same file level and for js files, the extension is not necessary
import Task from './task'
// Import uuid library
const { v4: uuidv4 } = require('uuid')

function Form () {
  // Keeps track of all the tasks in an array of strings, with some default tasks
  // const [tasks, updateTasks] = useState(['Walk the dog', 'Feed the cat'])
  // Update to include ids:
  const [tasks, updateTasks] = useState([
    { id: uuidv4(), task: 'Walk the dog' },
    { id: uuidv4(), task: 'Feed the cat' }
  ])
  // Keeps track of the input, with the default being an empty string
  const [input, updateInput] = useState('')

  const handleSubmit = e => {
    // Must prevent default form submission action (page refreshes)
    e.preventDefault()
    // Uses updateTasks function to make a new array consisting of the old tasks spread out, with the newest task added
    updateTasks([...tasks, input])
    // Update input to be an empty string again
    updateInput('')
  }

  return (
    <div className='todo-container'>
      {/* Since the form element wraps the input, label, and button, when the button is clicked, 
        onSubmit will call our handleSubmit function */}
      <form onSubmit={handleSubmit}>
        {/* htmlFor (react version of "for") links label to the input with same id */}
        <label htmlFor='todo'>Enter task here:</label>
        {/* Setting the value attribute to input connects the two. 
        When something changes in the input box (e.g. text is entered) onChange is called, 
        executing the updateInput function that updates the value/input*/}
        <input
          type='text'
          placeholder='Task'
          id='todo'
          value={input}
          onChange={e => updateInput(e.target.value)}
        />
        <button>Create Task</button>
      </form>
      <div className='list-container'>
        <h1>To Do List:</h1>
        {/* Maps over every element in the tasks array. 
        For each task, we will render a Task component with the contents of the task passed in as props*/}
        {tasks.map(taskInState => {
          return <Task task={taskInState.task} key={taskInState.id} />
        })}
      </div>
    </div>
  )
}

// Must export function to be able to use it in other components
export default Form
