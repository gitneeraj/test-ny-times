import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type RootState } from '../store'
import { type SnackbarPayload, type CommonInitialState } from '@/types/features'

const initialState: CommonInitialState = {
  snackbar: {
    show: false,
    message: '',
    type: 'success',
  },
}

const slice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setSnackbar: (state, action: PayloadAction<SnackbarPayload>) => {
      state.snackbar = action.payload
    },
  },
})

export const { setSnackbar } = slice.actions
export default slice.reducer

export const snackbarSelector = (state: RootState) => state.common.snackbar
