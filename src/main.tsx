import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { FirebaseAuthProvider } from './firebase/firebase-auth-context'
import HomePage from './index'
import Layout from './layout-wrapper/layout'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FirebaseAuthProvider>
    <Layout>
      <HomePage />  
    </Layout>
    </FirebaseAuthProvider>
  </React.StrictMode>,
)
