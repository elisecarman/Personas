import { StrictMode } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.tsx'
import Personas from './pages/Personas.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

const router = createBrowserRouter([
  {
      path: '/Personas/',
      element: <App/>,
      // errorElement: <NotFound/>,
      children: [
        {
          path:'/Personas/',
          element: <Personas/>
        },
      ]
  }
])

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
