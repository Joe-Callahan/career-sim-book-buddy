import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home.jsx';
import BookDetails from './components/BookDetails.jsx';
import Register from './components/Register.jsx';
import LogIn from './components/LogIn.jsx';
import UserProfile from './components/UserProfile.jsx';
import NavigationBar from './components/NavigationBar.jsx';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  return (
    <>
      <NavigationBar setToken={setToken} token={token} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books/:bookId' element={<BookDetails token={token} />} />
        <Route path='/register' element={<Register setToken={setToken} />} />
        <Route path='/login' element={<LogIn setToken={setToken} />} />
        <Route path='/profile' element={<UserProfile token={token} />} />
      </Routes>
    </>
  )
}

export default App