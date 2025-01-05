# Community Website

This is a simple community website built with React that allows users to register, log in, and view members after authentication.

## Live Link

You can access the live version of the project here:

[Community Website Live](https://community-mu-three.vercel.app/)

## Features

- **Registration**: New users can sign up with their name, email, and password.
- **Login**: Registered users can log in using their email and password.
- **Members Directory**: Only logged-in users can access the members' directory, which lists all registered users.
- **Logout**: Users can log out, which removes their authentication token and redirects them to the homepage.

## Technologies Used

- React
- React Router
- Axios for HTTP requests
- Tailwind CSS (for styling)

## API Endpoints

- **POST `/register`**: Registers a new user.
- **POST `/login`**: Logs in a user and returns an authentication token.
- **GET `/members`**: Fetches the list of members (requires authentication).
