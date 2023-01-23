import { configureStore } from '@reduxjs/toolkit';
import { moviesApi } from '../redux/api/movies';
import { surveyApi,surveyDemographicApi,surveyQuestionsApi } from '../redux/api/survey';


export const store = configureStore({
  reducer: {
        // Add the generated reducer as a specific top-level slice
    [moviesApi.reducerPath]:moviesApi.reducer,
    [surveyApi.reducerPath]:surveyApi.reducer,
    [surveyDemographicApi.reducerPath]:surveyDemographicApi.reducer,
    [surveyQuestionsApi.reducerPath]:surveyQuestionsApi.reducer
  },
   // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware).concat(surveyDemographicApi.middleware).concat(surveyApi.middleware)
    .concat(surveyQuestionsApi.middleware),
});
