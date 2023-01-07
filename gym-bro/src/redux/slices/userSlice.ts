import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  userToken: string | null;
}

const initialState: UserState = {
  userToken: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    onSignIn: (state, action: PayloadAction<string>) => {
      state.userToken = action.payload;
    },
    onSignOut: (state) => {
      state.userToken = null;
    },
  },
});

export const { onSignIn, onSignOut } = userSlice.actions;

export default userSlice.reducer;
