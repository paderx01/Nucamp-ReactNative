import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    toggleFavortie: (favorites, action) => {
      if (favorites.includes(action, payload)) {
        return favorites.filter((favorite) => favorite !== action.payload);
      } else {
        favorites.push(action.payload);
      }
    },
  },
});
