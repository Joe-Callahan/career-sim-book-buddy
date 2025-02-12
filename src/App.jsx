import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home.jsx';
import BookDetails from './components/BookDetails.jsx';
import Register from './components/Register.jsx';
import LogIn from './components/LogIn.jsx';
import UserProfile from './components/UserProfile.jsx';

const App = () => {
  const [selectedBook, setSelectedBook] = useState({});
  const [token, setToken] = useState(localStorage.getItem('token'));
  
  return (
    <>
      <h1>Book Buddy</h1>
      <>
        { 
          token ? (
            <nav>
              <Link to='/'>Home</Link>
              <Link to='/profile'>Profile Info</Link>
            </nav>
          ) : (
            <nav>
              <Link to='/'>Home</Link>
              <Link to='/register'>Sign Up</Link>
              <Link to='/login'>Sign In</Link>
            </nav>
          )
        }
      </>
      

      <Routes>
        <Route path='/' element={<Home setSelectedBook={setSelectedBook} />} />
        <Route path='/books/:id' element={<BookDetails selectedBook={selectedBook} />} />
        <Route path='/register' element={<Register setToken={setToken} />} />
        <Route path='/login' element={<LogIn setToken={setToken} />} />
        <Route path='/profile' element={<UserProfile token={token} />} />
      </Routes>
    </>
  )
}

export default App