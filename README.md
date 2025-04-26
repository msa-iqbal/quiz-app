# Quiz App

A React-based quiz application built with Firebase and Vite. This app allows users to take quizzes, view results, and analyze their performance.

## Features

- **User Authentication**: Sign up, log in, and log out using Firebase Authentication.
- **Quiz Management**: Fetch and display quizzes dynamically from Firebase Realtime Database.
- **Progress Tracking**: Track quiz progress with a progress bar.
- **Result Analysis**: View detailed results and performance analysis after completing a quiz.
- **Responsive Design**: Fully responsive UI for mobile and desktop devices.
- **Infinite Scrolling**: Load videos dynamically with infinite scrolling.

## Tech Stack

- **Frontend**: React, React Router, CSS Modules
- **Backend**: Firebase Realtime Database
- **Build Tool**: Vite
- **State Management**: React Hooks
- **Other Libraries**:
  - `lodash` for utility functions
  - `react-infinite-scroll-component` for infinite scrolling
  - `react-player` for embedding YouTube videos

## Demo

You can view the live demo of the project [here](https://github.com/msa-iqbal/quiz-app).

## Installation

1. Clone the repository.
2. Install Dependency:

   ```bash
   yarn install
   ```

3. Set up Firebase:

   - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
   - Add your Firebase configuration to a `.env` file:
     Start the development server:

4. Start the development server:

   ```bash
   yarn dev
   ```

5. Open the app in your browser: `http://localhost:5173`

### Folder Structure

```bash
quiz-app/
├── src/
│   ├── components/       # React components
│   ├── contexts/         # Context API for authentication
│   ├── hooks/            # Custom React hooks
│   ├── styles/           # CSS Modules for styling
│   ├── assets/           # Static assets (images, etc.)
│   ├── database/         # Firebase database rules and mock data
│   └── [main.jsx](http://_vscodecontentref_/1)          # Entry point of the app
├── public/               # Public assets
├── .env                  # Environment variables
├── [vite.config.js](http://_vscodecontentref_/2)        # Vite configuration
├── [package.json](http://_vscodecontentref_/3)          # Project dependencies and scripts
└── [README.md](http://_vscodecontentref_/4)             # Project documentation
```

### Firebase Rules

Ensure your Firebase Realtime Database rules are set up as follows:

```json
{
  "rules": {
    "videos": {
      ".read": true,
      ".write": false
    },
    "quiz": {
      ".read": "auth != null",
      ".write": "auth != null"
    },
    "answers": {
      ".read": "auth != null",
      ".write": "auth != null"
    },
    "result": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid"
      }
    }
  }
}
```
