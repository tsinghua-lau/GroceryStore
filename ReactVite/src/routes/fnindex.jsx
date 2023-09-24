import { Navigate } from 'react-router-dom'
import Home from '../Interchange/Home'
import About from '../Interchange/About'
import Message from '../Interchange/FnComponent'
import News from '../Interchange/FnComponent2.jsx'

const routes = [
  {
    path: '/',
    element: <Navigate to="about" />
  },
  {
    path: '/home',
    element: <Home />,
    children: [
      {
        path: 'news',
        element: <News />
      },
      {
        path: 'message',
        element: <Message />
      }
    ]
  },
  {
    path: '/about/:id/:name',
    element: <About />
  }
]

export default routes