import { Link, useNavigate } from 'react-router-dom';

const NavigationBar = (props) => {
  const navigate = useNavigate();
  
  const signOut = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    props.setToken('');
    navigate('/login');
  }

  return (
    <>
      <header>
        <h1>Book Buddy</h1>
        {
          props.token ? (
            <nav>
              <Link to='/'>Home</Link>
              <Link to='/profile'>Profile Info</Link>
              <Link to='/login' onClick={signOut}>Sign Out</Link>
            </nav>
          ) : (
            <nav>
              <Link to='/'>Home</Link>
              <Link to='/register'>Sign Up</Link>
              <Link to='/login'>Sign In</Link>
            </nav>
          )
        }
      </header>
    </>
  )
}

export default NavigationBar