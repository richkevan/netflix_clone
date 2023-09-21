import  { fileRouter } from './routes.tsx'
import { RouterProvider } from 'react-router-dom'
import Layout from './layout-wrapper/layout.tsx' 

function App() {
  
  return (
    <div className="min-h-screen w-full bg-black">
    <Layout>
    <RouterProvider router={fileRouter} />
    </Layout>
    </div>
  )
}

export default App
