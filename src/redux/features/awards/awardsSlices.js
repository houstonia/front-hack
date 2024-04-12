import { createSlice } from '@reduxjs/toolkit';
import { getAwardsByUsers } from '../../../api/awards-api';


const awardsSlice = createSlice({
    name: 'awards',
    initialState: {
        loading:false,
        awards:[]

    },
    reducers: {},
    extraReducers: (builder) => {
    builder
      .addCase(getAwardsByUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAwardsByUsers.fulfilled, (state, { payload }) => {
        state.loading=false
        state.awards=payload
      })
      .addCase(getAwardsByUsers.rejected, (state, { payload }) => {
       state.loading=false
      })
  },
});

export default awardsSlice.reducer;