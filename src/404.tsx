import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode> 
      <div className="min-h-screen w-full">
      <div className="h-screen w-full flex flex-col justify-center items-center">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <div>You have reached a page that does not exist please use the back button to return to the previous page or return to my <a href="https://richkevan.com">PORTFOLIO</a></div>
      </div>
    </div>
  </React.StrictMode>,
)