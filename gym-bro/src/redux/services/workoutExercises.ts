import {
  ICreateWorkoutExercise,
  IWorkoutExercise,
} from "../../shared/interfaces";
import { appApi } from "./appApi";

const workoutExercisesApi = appApi.injectEndpoints({
  endpoints: (build) => ({
    getWorkoutExercises: build.query<IWorkoutExercise[], string>({
      query: (id) => `/workout/${id}/exercises`,
      providesTags: ["WorkoutExercises"],
    }),
    getWorkoutExercise: build.query<IWorkoutExercise, string>({
      query: (id) => `/workoutexercise/${id}`,
      providesTags: ["WorkoutExercises"],
    }),
    createWorkoutExercise: build.mutation<
      IWorkoutExercise,
      ICreateWorkoutExercise
    >({
      query: (body) => {
        return {
          url: "/workoutexercise",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["WorkoutExercises"],
    }),
    deleteWorkoutExercise: build.mutation<void, string>({
      query: (id) => {
        return {
          url: `/workoutexercise/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["WorkoutExercises"],
    }),
  }),
});

export const {
  useGetWorkoutExercisesQuery,
  useGetWorkoutExerciseQuery,
  useCreateWorkoutExerciseMutation,
  useDeleteWorkoutExerciseMutation,
} = workoutExercisesApi;
