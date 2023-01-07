import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  MiddlewareAPI,
  isRejectedWithValue,
  Middleware,
} from "@reduxjs/toolkit";
import { onSignOut } from "../slices/userSlice";

/**
 * Log a warning and show a toast!
 */
export const unauthorisedError: Middleware =
  (api: MiddlewareAPI) => (next) => async (action) => {
    // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
    if (isRejectedWithValue(action)) {
      if (
        action.payload?.originalStatus === 401 ||
        action.payload?.originalStatus === 403
      ) {
        await AsyncStorage.removeItem("accessToken");
        await AsyncStorage.removeItem("refreshToken");
        const { dispatch } = api;
        dispatch(onSignOut());
      }
    }

    return next(action);
  };
