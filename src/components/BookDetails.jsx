import { Link, useParams } from 'react-router-dom';

const BookDetails = (props) => {
  // const { id } = useParams();

  // const checkout = async() => {
  //   const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/:id`, {
  //     method: 'PATCH',
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Authorization": `Bearer ${props.token}`
  //     },
  //     body: JSON.stringify({
  //       available: false
  //     })
  //   });
  //   const result = await response.json();
  //   console.log(result);
  // }

  return (
    <>
    <Link to='/'>Back</Link>
      <div className='singleBookContainer'>
        <img 
          src={props.selectedBook.coverimage} 
          alt={`cover of ${props.selectedBook.title}`}
          className='bookDetailsImage' />
          <div className='bookDetailsWritten'>
            <h2>{props.selectedBook.title}</h2>
            <h3>{`by ${props.selectedBook.author}`}</h3>
            <section>{props.selectedBook.description}</section>
            <>
              {
                props.selectedBook.available ? (
                  <button onClick={checkout}>Checkout This Book</button>
                  ) : (
                  <p>Sorry. This book is currently checked out.</p>
                )
              }
            </>
          </div>
      </div>
    </>
  )
}

export default BookDetails