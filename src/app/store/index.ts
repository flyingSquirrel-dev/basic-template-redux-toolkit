import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../../feature/count/slice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})
