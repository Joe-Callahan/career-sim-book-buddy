import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const BookDetails = (props) => {
  const [selectedBook, setSelectedBook] = useState({});
  const {bookId} = useParams();

  useEffect(() => {
    const getBook = async() => {
      const response = await fetch (`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${bookId}`);
      const bookObj = await response.json();
      setSelectedBook(bookObj.book);
    }
    getBook();
  })


  const checkout = async(e) => {
    const response = await fetch (`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${bookId}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${props.token}`
      },
      body: JSON.stringify({
        available: false
      })
    });
    const checkedOutBook = await response.json();
    alert(`${checkedOutBook.book.title} has been checked out!`);
  }

  return (
    <>
      <div className='singleBookContainer'>
        <img 
          src={selectedBook.coverimage} 
          alt={`cover of ${selectedBook.title}`}
          className='bookDetailsImage' />
          <div className='bookDetailsWritten'>
            <h2>{selectedBook.title}</h2>
            <h3>{`by ${selectedBook.author}`}</h3>
            <section>{selectedBook.description}</section>
            <>
              {
                props.token ? (
                  selectedBook.available ? (
                    <button onClick={checkout}>Checkout This Book</button>
                  ) : (
                    <p>Sorry. This book is currently checked out.</p>
                  )
                ) : (
                  <p>Please sign in or create an account to see a book's availability.</p>
                )
              }
            </>
          </div>
      </div>
    </>
  )
}

export default BookDetails