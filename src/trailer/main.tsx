import React from 'react'
import ReactDOM from 'react-dom/client'

import '../index.css'
import Layout from '../layout-wrapper/layout'
import TrailerInfo from './[trailerId]'
import { FirebaseAuthProvider } from '../firebase/firebase-auth-context'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FirebaseAuthProvider>
    <Layout>
      <TrailerInfo />
    </Layout>
    </FirebaseAuthProvider>
  </React.StrictMode>,
)
