import { type PostsResponse, type PostsPayload } from '@/types/services'
import { api } from './api'

export const postsAPI = api.injectEndpoints({
  endpoints: (build) => ({
    // Get all posts
    getPosts: build.query<PostsResponse, PostsPayload | void>({
      query: (payload) => {
        const { duration = 1 } = payload || {}

        return {
          url: `svc/mostpopular/v2/viewed/${duration}.json?api-key=${process.env.REACT_APP_API_KEY}`,
          method: 'GET',
        }
      },
    }),
  }),
})

export const { useGetPostsQuery } = postsAPI

export const {
  endpoints: { getPosts },
} = postsAPI
