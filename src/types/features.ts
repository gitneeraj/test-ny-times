import { type SnackbarOrigin } from '@mui/material'
import { type ReactNode } from 'react'
import { type PostsResponse } from './services'

export type SnackbarPayload = {
  show: boolean
  message: string | ReactNode
  type: string
  position?: SnackbarOrigin
  autoHide?: boolean
}

export type CommonInitialState = {
  snackbar: SnackbarPayload
}

export type PostsInitialState = {
  posts: PostsResponse | null
}
