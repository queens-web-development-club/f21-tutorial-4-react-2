// Import react, and hook useState as we need to manage state in this component
import React, { useState } from 'react'

// Destructure task from props
function Task ({ task }) {
  // useState hook to keep track of whether or not task is completed
  // Default to incomplete (false)
  const [completed, updateCompletion] = useState(false)

  // When the task is clicked on, handleClick will be called.
  // This function toggles the completion status by updating the state of "completed" to be the opposite of what it just was
  // This is an arrow function with no params
  const handleClick = () => {
    updateCompletion(!completed)
  }

  return (
    // Every time the list element is clicked, the handleClick function will be called
    /* Based on the state of "completed" (true or false), the css class of "complete"
     or "incomplete" will be assigned, respectively, using the ternary operator */
    <li onClick={handleClick} className={completed ? 'complete' : 'incomplete'}>
      {/* Renders the task (string parameter) passed through to component;
        JavaScript must be enclosed in curly braces in JSX*/}
      {task}
    </li>
  )
}

// Must export function to be able to use it in other components
export default Task

