import { setSnackbar } from '@/app/features/commonSlice'
import { isRejectedWithValue } from '@reduxjs/toolkit'
import type { MiddlewareAPI, Middleware } from '@reduxjs/toolkit'

export const rtkQueryErrorLogger: Middleware = (api: MiddlewareAPI) => (next) => (action: any) => {
  if (isRejectedWithValue(action)) {
    const error = action?.payload?.error || action?.payload?.data?.message || action?.error?.message
    const code = action?.payload?.data?.code ? action?.payload?.data?.code + ': ' : ''
    const message = `${code} ${error}`

    // TODO: make `show: true` once BE is fixed
    api.dispatch(setSnackbar({ show: true, message, type: 'error' }))
  }

  return next(action)
}
