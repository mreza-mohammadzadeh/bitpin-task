
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cryptoData: [],
  currentPage: 1,
  totalPages: 1,
  resultsPerPage: 20,
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    setCryptoData: (state, action) => {
      state.cryptoData = action.payload.results;
      state.totalPages = Math.ceil(action.payload.count / state.resultsPerPage); // 20 items per page
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setCryptoData, setCurrentPage } = cryptoSlice.actions;

export default cryptoSlice.reducer;
