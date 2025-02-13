import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    const getBooks = async() => {
      const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books');
      const bookObj = await response.json();
      setAllBooks(bookObj.books);
    }
    getBooks();
  }, [])

  return (
    <>
      <div id='homeBookDisplay'>
        {
          allBooks.map((singleBook) => {
            return (
              <Link
                to={`/books/${singleBook.id}`}
                key={singleBook.id}
                className='singleBookContainerHome'>
                  <img 
                    src={singleBook.coverimage} 
                    alt={`cover of ${singleBook.title}`} 
                    className='homeBookImages'
                  />
                  <h3>{singleBook.title}</h3>
              </Link>
            )
          })
        }
      </div>
    </>
  )
}

export default Home