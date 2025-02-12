import { Link } from 'react-router-dom'

const BookDetails = (props) => {
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
            <h4>{props.selectedBook.available ? `Available!` : `Checked Out`} </h4>
            <section>{props.selectedBook.description}</section>
          </div>
      </div>
    </>
  )
}

export default BookDetails