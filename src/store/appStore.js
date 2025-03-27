import { configureStore } from '@reduxjs/toolkit'
import videoReducer from './videoSlice'

export const appStore = configureStore({
    reducer: {
        video: videoReducer
    }
})
