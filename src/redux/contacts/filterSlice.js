import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    filterContacts: (state, action) => {
      state.filter = action.payload;
    },
  },
});
export const { filterContacts } = filterSlice.actions;
export const getFilter = state => state.filter.filter;
export const filterReducer = filterSlice.reducer;
