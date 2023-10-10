import React from 'react'
import ReactDOM from 'react-dom/client'

import '../index.css'
import Layout from '../layout-wrapper/layout'
import SignUpPage from './signup'
import { FirebaseAuthProvider } from '../firebase/firebase-auth-context'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FirebaseAuthProvider>
    <Layout>
      <SignUpPage />
    </Layout>
    </FirebaseAuthProvider>
  </React.StrictMode>,
)
