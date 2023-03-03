import { IWorkout } from "../../shared/interfaces";
import { appApi } from "./appApi";

const workoutsApi = appApi.injectEndpoints({
  endpoints: (build) => ({
    getWorkouts: build.query<Omit<IWorkout, "exercises">[], void>({
      query: () => "/workout",
      providesTags: ["Workouts"],
    }),
    getWorkout: build.query<IWorkout, string>({
      query: (id) => `/workout/${id}`,
      providesTags: ["Workouts"],
    }),
    createWorkout: build.mutation<IWorkout, Pick<IWorkout, "name">>({
      query: (body) => {
        return {
          url: "/workout",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Workouts"],
    }),
    updateWorkout: build.mutation<
      void,
      Partial<IWorkout> & Pick<IWorkout, "id">
    >({
      query: ({ id, ...patch }) => ({
        url: `/workout/${id}`,
        method: "PUT",
        body: patch,
      }),
      invalidatesTags: ["Workouts"],
    }),
    deleteWorkout: build.mutation<void, string>({
      query: (id) => {
        return {
          url: `/workout/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Workouts"],
    }),
  }),
});

export const {
  useGetWorkoutQuery,
  useGetWorkoutsQuery,
  useCreateWorkoutMutation,
  useUpdateWorkoutMutation,
  useDeleteWorkoutMutation,
} = workoutsApi;
