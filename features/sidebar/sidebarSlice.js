import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  is_open: false,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: initialState,
  reducers: {
    togglehandler: (state) => {
      state.is_open = !state.is_open;
    },
  },
});

export const { togglehandler } = sidebarSlice.actions;

export default sidebarSlice.reducer;
