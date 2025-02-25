import { Link , useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LogIn = (props) => {
  const [loginEmailInput, setLoginEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const navigate = useNavigate();

  const logIn = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch ('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: loginEmailInput,
          password: passwordInput
        })
      });
      const userObj = await response.json();
      props.setToken(userObj.token);
      localStorage.setItem('token', userObj.token);
      navigate('/');
    } catch(err) {
      alert(err);
    }
  }

  return (
    <>
      {
        props.token? (<main><p>You're Already Signed In!</p></main>) : (
          <>
            <main>
              <h2>Log In</h2>
              <form onSubmit={logIn}>
                <input 
                  placeholder='email'
                  type='email'
                  onChange={(e) => {setLoginEmailInput(e.target.value)}}/>
                <input 
                  placeholder='password'
                  type='password'
                  onChange={(e) => {setPasswordInput(e.target.value)}} />
                <button>Sign In</button>
              </form>
              <h4>New to Book Buddy?</h4>
              <Link to='/register'>Create An Account Here</Link>
            </main>
          </>
        )
      }
    </>
  )
}



export default LogIn