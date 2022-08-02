// import {createStore} from 'redux'
// import rootReducer from './reducer';
// import { composeWithDevTools } from 'redux-devtools-extension'

// const composedEnheancers = composeWithDevTools()
// const store = createStore(rootReducer, composedEnheancers);

// export default store

import { configureStore } from '@reduxjs/toolkit'
import todoListSlice from '../components/TodoList/reducer';

const store = configureStore({
    reducer: todoListSlice.reducer
})
export type RootState = ReturnType<typeof store.getState>

export default store