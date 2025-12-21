# Auth Controller Documentation

This document explains the functions inside `auth.controllers.ts` located in the `Backend/src/controllers` directory. These functions handle user authentication logic for the MERN Chat App backend.

## Functions Overview

### 1. `signup`

**Purpose:**  
Handles new user registration.

**How it works:**  
- Receives `fullName`, `email`, and `password` from the request body.
- Validates that all fields are present and the password is at least 6 characters.
- Checks if a user with the given email already exists.
- Hashes the password using bcrypt.
- Creates a new user document and saves it to the database.
- Generates a JWT token for the new user.
- Returns a success response with the new user's ID and name, or an error message if registration fails.

---

### 2. `login`

**Purpose:**  
Authenticates an existing user.

**How it works:**  
- Receives `email` and `password` from the request body.
- Validates that both fields are present.
- Finds the user by email.
- Compares the provided password with the stored hashed password using bcrypt.
- If authentication succeeds, generates a JWT token.
- Returns a success response with the user's ID and name, or an error message if login fails.

---

### 3. `logout`

**Purpose:**  
Logs out the current user.

**How it works:**  
- Clears the authentication token by setting the `jwt` cookie to an empty value.
- Returns a success response indicating the user has been logged out.

---

### 4. `editProfile`

**Purpose:**  
Allows the authenticated user to update their profile picture.

**How it works:**  
- Retrieves the user's ID from the request (set by authentication middleware).
- Receives `profilePicture` from the request body.
- Validates that a picture is provided.
- Uploads the new profile picture to Cloudinary.
- Updates the user's `profilePic` field in the database with the new image URL.
- Returns the updated user document or an error message if the update fails.

---

## Usage

These controller functions are typically used in Express routes to handle authentication endpoints, such as `/api/auth/signup`, `/api/auth/login`, `/api/auth/logout`, and `/api/auth/edit-profile`.

---

## Notes

- All functions handle errors gracefully and return appropriate HTTP status codes.
- Passwords are securely hashed before storage.
- JWT tokens are used for authentication and session management.
- Profile pictures are uploaded and stored using Cloudinary.

---

For more details, refer to the code in `Backend/src/controllers/auth.controllers.ts`.