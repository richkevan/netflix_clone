import React from 'react'
import ReactDOM from 'react-dom/client'

import '../index.css'
import Layout from '../layout-wrapper/layout'
import Login from './login'
import { FirebaseAuthProvider } from '../firebase/firebase-auth-context'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FirebaseAuthProvider>
    <Layout>
      <Login />
    </Layout>
    </FirebaseAuthProvider>
  </React.StrictMode>,
)
