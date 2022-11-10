const { createSlice } = require("@reduxjs/toolkit");

const houseSlider = createSlice({
  name: "houses",
  initialState: {
    houses: [],
    loading: true,
  },
  reducers: {
    setHouses: (state, action) => ({
      ...state,
      houses: action.payload,
    }),
  },
});
