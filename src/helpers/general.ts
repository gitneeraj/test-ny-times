import { type MediaMetadata } from '@/types/services'

/*
 * Returns `sx` prop to clip para lines by given number
 * */
export const numberOfLines = (lines: number) => ({
  display: '-webkit-box',
  overflow: 'hidden',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: lines,
})

/*
 * Returns post image based on best image resolution
 * */
export const getPostDetailsImage = (media: MediaMetadata[]) => {
  let url: string | null = null

  if (!media || media?.length === 0) return url

  for (const image of media) {
    if (image.format === 'mediumThreeByTwo440') {
      url = image.url
    } else if (image.format === 'mediumThreeByTwo210') {
      url = image.url
    } else if (image.format === 'Standard Thumbnail') {
      url = image.url
    }
  }

  return url
}
