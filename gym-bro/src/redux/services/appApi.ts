import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseQuery";

export const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: baseQuery,
  tagTypes: [],
  endpoints: () => ({}),
});
