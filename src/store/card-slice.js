import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
  loadCards: false,
  error: false,
  errorMessage: "",
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addCards(state, action) {
      state.cards = action.payload.cards;
    },
    loadCards(state, action) {
      state.loadCards = true;
    },
    setErrorMessage(state, action) {
      state.errorMessage = action.payload.errorMessage;
      state.error = action.payload.error;
    },
  },
});

export const cardSliceActions = cardSlice.actions;

export default cardSlice.reducer;
