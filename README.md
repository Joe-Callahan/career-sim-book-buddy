# Book Buddy

Deployment Link: 

## Tier I Features

- All users can:
  - See all books in the library's catalog
  - View details of an existing book
  - Log in to an existing account
  - Register a new account

## Tier II Features

- All users can 
  - check out an available book
  - return a checked out book
  - view their account information


## Additional Features

- This app stores the access token on local storage so the user can refresh the browser and stay logged in, view their book inventory, and maneuver the site.
- Logged in users cannot use the forms on '/register' and '/login'.
- Logged in users can sign out the token is removed from local storage and page renders on click
- The navigation bar updates when a user logs in or registers (removes login and register and adds account management and sign out buttons). The navigation bar also updates when a user signs out.