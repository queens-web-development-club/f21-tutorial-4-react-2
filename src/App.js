import './App.css'
import Form from './todoform'
import Page from './random'
import { Routes, Route, Navigate, Link } from 'react-router-dom'

function App () {
  // Standard
  return (
    <div>
      <Form />
    </div>
  )
  
  // Implementing Router
  // return (
  //   <div>
  //     <Link to="/todo">ToDo</Link>
  //     <Link to="/page">SomeRandomComponent</Link>
  //     <Routes>
  //       <Route path='/todo' element={<Form/>}  />
  //       <Route path='/page' element={<Page/>}  />
  //     </Routes>
  //   </div>
  // )
}

export default App
