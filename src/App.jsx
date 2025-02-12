import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './components/Home.jsx'
import BookDetails from './components/BookDetails.jsx'



const App = () => {
  const [selectedBook, setSelectedBook] = useState({});

  console.log(selectedBook);
  
  return (
    <>
      <h1>Book Buddy</h1>

      <Routes>
        <Route path='/' element={<Home setSelectedBook={setSelectedBook} />} />
        <Route path='/books/:id' element={<BookDetails selectedBook={selectedBook} />} />
      </Routes>
    </>
  )
}

export default App