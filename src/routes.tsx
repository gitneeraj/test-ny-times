import { createBrowserRouter } from 'react-router-dom'
import Layout from '@/components/Layout'
import Posts from './containers/Posts'
import PostDetails from './containers/PostsDetails'

export default createBrowserRouter([
  {
    id: 'root',
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: Posts,
      },
      {
        path: 'posts/:id',
        Component: PostDetails,
      },
    ],
  },
])
