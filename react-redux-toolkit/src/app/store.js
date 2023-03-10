import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import postsSlice from '../features/posts/postsSlice';
import userSlice from '../features/users/userSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsSlice,
    users: userSlice,
  },
});
