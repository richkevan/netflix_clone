import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { FirebaseAuthProvider } from './firebase/firebase-auth-context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FirebaseAuthProvider>
    <App />
    </FirebaseAuthProvider>
  </React.StrictMode>,
)
