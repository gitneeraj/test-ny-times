export const numberOfLines = (lines: number = 3) => ({
  display: '-webkit-box',
  overflow: 'hidden',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: lines,
})
