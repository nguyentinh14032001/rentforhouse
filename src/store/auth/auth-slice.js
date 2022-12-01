const { createSlice } = require("@reduxjs/toolkit");

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
  },
  reducers: {
    authLogin: (state, action) => ({
      ...state,
      user: action.payload,
    }),
    getUser() {},
  },
});
export const { authLogin, getUser } = authSlice.actions;
export default authSlice.reducer;
