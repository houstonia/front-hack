import { createSlice } from '@reduxjs/toolkit';

const toasterSlice = createSlice({
  name: 'toaster',
  initialState: {
    toaster: false,
  },
  reducers: {   
    setToaster: (state, action) => {
      console.log(action.payload)
      state.toaster=action.payload
    }
  },
});

export const { setToaster } = toasterSlice.actions;



export default toasterSlice.reducer;