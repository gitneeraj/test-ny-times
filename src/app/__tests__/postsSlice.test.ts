import reducer, { postsSelector } from '../features/postsSlice'

test('should return the initial state', () => {
  expect(reducer(undefined, { type: 'unknown' })).toEqual({ posts: null })
  postsSelector({ posts: { posts: null } })
})
