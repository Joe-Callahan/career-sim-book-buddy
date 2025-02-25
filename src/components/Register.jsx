import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = (props) => {
  const [firstNameInput, setFirstNameInput] = useState('');
  const [lastNameInput, setLastNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const navigate = useNavigate();

  const createUser = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          firstname: firstNameInput,
          lastname: lastNameInput,
          email: emailInput,
          password: passwordInput
        })
      });

      const newUser = await response.json();

      if(newUser.error) {
        alert('Something is wrong. Please try again.');
      } else {
        alert(newUser.message);
        setFirstNameInput('');
        setLastNameInput('');
        setEmailInput('');
        setPasswordInput('');
        props.setToken(newUser.token);
        localStorage.setItem('token', newUser.token);
        navigate('/');
      }
    } catch(err) {
      alert(`Error`, err);
    }
  }

  return (
    <>
      {
        props.token? (<main><p>You're Already Signed In!</p></main>) : (
          <>
          <main>
            <h2>Register New User</h2>
      
            <form onSubmit={createUser}>
              <input
                placeholder='First Name'
                onChange={(e) => {setFirstNameInput(e.target.value)}}
                value={firstNameInput} />
              <input
                placeholder='Last Name'
                onChange={(e) => {setLastNameInput(e.target.value)}}
                value={lastNameInput} />
              <input 
                placeholder='email' 
                type='email'
                onChange={(e) => {setEmailInput(e.target.value)}}
                value={emailInput} />
              <input
                placeholder='Choose a Password'
                type='password' 
                onChange={(e) => {setPasswordInput(e.target.value)}}
                value={passwordInput}/>
              <button>Sign Me Up</button>
            </form>

            <h4>Already Have An Account?</h4>
            <Link to='/login'>Sign In Here</Link>
            </main>
          </>
        )
      }
    </>
  )
}

export default Register