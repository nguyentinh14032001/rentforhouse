const { createSlice } = require("@reduxjs/toolkit");

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: undefined,
  },
  reducers: {
    authLogin: (state, action) => ({
      ...state,
    }),
  },
});
export const { authLogin } = authSlice.actions;
export default authSlice.reducer;
