import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type RootState } from '../store'
import { type PostsInitialState } from '@/types/features'
import { postsAPI } from '../services/posts'
import { type PostsResponse } from '@/types/services'

const initialState: PostsInitialState = {
  posts: null,
}

const slice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      postsAPI.endpoints.getPosts.matchFulfilled,
      (state, action: PayloadAction<PostsResponse>) => {
        state.posts = action.payload
      },
    )
  },
})

export default slice.reducer

export const postsSelector = (state: RootState): PostsResponse => state.posts.posts
