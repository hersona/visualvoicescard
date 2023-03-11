import { configureStore } from '@reduxjs/toolkit';
import { moviesApi } from '../redux/api/movies';
import { cardTokenApi,cardVerifyCodeApi } from '../redux/api/survey';


export const store = configureStore({
  reducer: {
        // Add the generated reducer as a specific top-level slice
    [moviesApi.reducerPath]:moviesApi.reducer,
    [cardVerifyCodeApi.reducerPath]:cardVerifyCodeApi.reducer,
    [cardTokenApi.reducerPath]:cardTokenApi.reducer
  },
   // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware).concat(cardTokenApi.middleware)
   .concat(cardVerifyCodeApi.middleware),
});
