const { createSlice } = require("@reduxjs/toolkit");

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: undefined,
  },
  reducers: {
    login: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    register: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
});
export const { login, register } = authSlice.actions;
export default authSlice.reducer;
