import { configureStore, type ConfigureStoreOptions } from '@reduxjs/toolkit'
import { rtkQueryErrorLogger } from './error'

import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { api } from '@/app/services/api'
import common from '../app/features/commonSlice'

export const createStore = (options?: ConfigureStoreOptions['preloadedState'] | undefined) =>
  configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
      common,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware, rtkQueryErrorLogger),
    ...options,
  })

export const store = createStore()

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppStore = ReturnType<typeof createStore>

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
