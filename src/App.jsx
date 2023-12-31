import { RouterProvider } from 'react-router-dom'
import './App.css'
import { appRouter } from './core/components/routes/AppRouter'

function App() {
  return (
    <>

        <RouterProvider router={appRouter} />
        
  </>
  )
}

export default App
