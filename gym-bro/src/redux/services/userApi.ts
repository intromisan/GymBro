import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { IUserResponse, IUserRegistration } from "../../shared/interfaces";
import { baseQuery } from "./baseQuery";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: baseQuery,
  tagTypes: ["User"],
  endpoints: (build) => ({
    createUser: build.mutation<IUserResponse, IUserRegistration>({
      query: (body) => ({
        url: "/account/register",
        method: "POST",
        body: body,
      }),
    }),
    login: build.mutation<IUserResponse, Partial<IUserRegistration>>({
      query: (body) => ({
        url: "/account/login",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useCreateUserMutation, useLoginMutation } = userApi;
