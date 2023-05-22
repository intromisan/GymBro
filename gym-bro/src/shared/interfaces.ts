export interface IUserRegistration {
  email: string;
  password: string;
  name?: string;
}

export interface IUserResponse {
  email: string;
  token: string;
}

export interface IWorkout {
  id: string;
  name: string;
  exercises: IWorkoutExercise[];
}

export interface IExercise {
  id: string;
  name: string;
  description: string;
  imageLink: string;
  videoLink: string;
}

export interface IWorkoutExercise {
  id: string;
  reps: number;
  sets: number;
  weight?: number;
  restSeconds: number;
  weekday: number;
  exercise: IExercise;
}
