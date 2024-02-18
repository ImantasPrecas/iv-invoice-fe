import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './error-page.tsx'
import AuthenticationPage from './routes/AuthenticationPage.tsx'
import { RegisterAction } from './actions/registerAction.ts'

const routes = [
  {
    path: '/',
    element: <AuthenticationPage/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: 'login',
    element: <AuthenticationPage/>
  },
  {
    path: 'register',
    action: RegisterAction
  }
]

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
