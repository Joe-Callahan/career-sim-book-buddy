import { useState, useEffect } from 'react';

const UserProfile = (props) => {
  const [userInfo, setUserInfo] = useState({});

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
  })
  
  return (
    <>
      <h2>Profile Info</h2>
        <>
          {
            props.token ? (
              <section>
                <p>{`Name: ${userInfo.firstname} ${userInfo.lastname}`}</p>
                <p>{`Email: ${userInfo.email}`}</p>
                <p>Books Checked Out:</p>
              </section>
            ) : (
              <h3>User Info Not Found. Please sign in or create a profile!</h3>
            )
          }
        </>
    </>
  )
}

export default UserProfile