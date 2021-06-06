import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../../features/count/slice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})
