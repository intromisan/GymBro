import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Config from "react-native-config"

export const baseQuery = fetchBaseQuery({
  baseUrl: "https://gymbro-app.azurewebsites.net/api",
  prepareHeaders: async (headers) => {
    const accessToken = await AsyncStorage.getItem("accessToken");

    if (accessToken) {
      headers.set("authorization", `Bearer ${accessToken}`);
    }

    const refreshToken = await AsyncStorage.getItem("refreshToken");

    if (refreshToken) {
      headers.set("x-refresh", refreshToken);
    }

    return headers;
  },
});
