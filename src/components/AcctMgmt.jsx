import { useState, useEffect } from 'react';

const AcctMgmt = (props) => {
  const [userInfo, setUserInfo] = useState({});
  const [checkedOutBooks, setCheckedOutBooks] = useState([]);

  const getReservations = async() => {
    const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations', {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${props.token}`
      }
    })
    const reservationArr = await response.json();
    setCheckedOutBooks(reservationArr.reservation);
  }

  useEffect(() => {
    const getProfileInfo = async () => {
      const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me', {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${props.token}`
        }
      });
      const userInfoObj = await response.json();
      setUserInfo(userInfoObj);
    }
    getProfileInfo();
  }, [])

  useEffect(() => {
    getReservations();
  }, [])

  const returnBook = async(e) => {
    try {
      const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations/${e.target.value}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${props.token}`
      }
      })
      const returnObj = await response.json();
      alert(`Return successful. Thank you!`);
      getReservations();
    } catch(err) {
      alert(err);
    }
  }

  return (
    <>
      <h2>Profile Info</h2>
        <>
          {
            props.token ? (
              <section>
                <p>{`Name: ${userInfo.firstname} ${userInfo.lastname}`}</p>
                <p>{`Email: ${userInfo.email}`}</p>
                <p>{`Books Checked Out: ${checkedOutBooks.length}`}</p>
                <ul>
                  {
                    checkedOutBooks.map((singleBook) => {
                      return ( 
                        <>
                          <li key={singleBook.coverimage}>
                            {singleBook.title}</li>
                          <button 
                            key={singleBook.id}
                            value ={singleBook.id}
                            onClick={returnBook}>
                              Return This Book
                          </button>
                        </>
                      )
                    })
                  }
                </ul>
              </section>
            ) : (
              <h3>User Info Not Found. Please sign in or create a profile!</h3>
            )
          }
        </>
    </>
  )
}

export default AcctMgmt