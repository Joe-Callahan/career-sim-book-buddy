import { Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import Home from './components/Home.jsx'
import BookDetails from './components/BookDetails.jsx'
import Register from './components/Register.jsx'
import LogIn from './components/LogIn.jsx'

const App = () => {
  const [selectedBook, setSelectedBook] = useState({});
  const [token, setToken] = useState('');

  console.log(`token = ${token}`);
  
  return (
    <>
      <h1>Book Buddy</h1>
      <nav>
        <Link to='/register'>Sign Up</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home setSelectedBook={setSelectedBook} />} />
        <Route path='/books/:id' element={<BookDetails selectedBook={selectedBook} />} />
        <Route path='/register' element={<Register setToken={setToken} />} />
        <Route path='/login' element={<LogIn setToken={setToken} />} />
      </Routes>
    </>
  )
}

export default App