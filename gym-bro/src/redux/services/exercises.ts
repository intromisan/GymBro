import { IExercise } from "../../shared/interfaces";
import { appApi } from "./appApi";

const exercisesApi = appApi.injectEndpoints({
  endpoints: (build) => ({
    getExercises: build.query<IExercise[], void>({
      query: () => "/exercise",
      providesTags: ["Exercises"],
    }),
    getExercise: build.query<IExercise, string>({
      query: (id) => `/exercise/${id}`,
      providesTags: ["Exercises"],
    }),
  }),
});

export const {
  useGetExercisesQuery,
  useGetExerciseQuery,
} = exercisesApi;
