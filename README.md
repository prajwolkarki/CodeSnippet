Code Snippet App

Welcome to the Code Snippet App! This application allows users to register and log in to save their code snippets in a Firebase database. This README will guide you through setting up the project, understanding the code, and running the application.
Features

    User Registration: Users can create an account using their email and password.
    User Login: Registered users can log in with their credentials.
    Save Code Snippets: Logged-in users can save their code snippets to the Firebase database.
    Retrieve Code Snippets: Users can retrieve their saved snippets from the database.

Prerequisites

Before running the project, ensure you have the following:

    Node.js and npm installed on your machine.
    Firebase project set up with Firestore and Authentication enabled.
    Basic understanding of JavaScript and Firebase.

Installation

Clone the Repository:
      git clone https://github.com/prajwolkarki/code-snippet-app.git
      cd code-snippet-app

Install Dependencies:

npm install

Set Up Firebase:

    Go to the Firebase Console.
    Create a new project (or use an existing one).
    Enable Email/Password Authentication in the Authentication section.
    Create a Firestore database.

Add Firebase Configuration:

Create a .env file in the root directory and add your Firebase configuration details:

env

REACT_APP_API_KEY=your_api_key <br/>
REACT_APP_AUTH_DOMAIN=your_auth_domain  <br/>
REACT_APP_PROJECT_ID=your_project_id <br/>
REACT_APP_STORAGE_BUCKET=your_storage_bucket <br/>
REACT_APP_MESSAGING_SENDER_ID=your_messaging_sender_id <br/>
REACT_APP_APP_ID=your_app_id

Running the Application

To run the application locally, use:

npm start

This will start the development server, and you can access the app at http://localhost:4200.
