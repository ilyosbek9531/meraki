import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "dark",
};

export const { actions: themeActions, reducer: themeReducer } = createSlice({
  name: "theme",
  initialState,
  reducers: {
    colorMode: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },
  },
});
