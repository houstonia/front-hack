import { createSlice } from '@reduxjs/toolkit';
import { postStorage } from '../../../api/storage';

const storageSlice = createSlice({
    name: 'storage',
    initialState: {
        error:false,
        success:false,
        storageLoading:false
    },
    reducers: {},
    extraReducers: (builder) => {
    builder
      .addCase(postStorage.pending, (state) => {
        state.error = false;
        state.storageLoading = true;
      })
      .addCase(postStorage.fulfilled, (state, { payload }) => {
        console.log(payload)
        state.success = true;
        state.error = false
        state.storageLoading = false;
      })
      .addCase(postStorage.rejected, (state, { payload }) => {
        state.success = false;
        state.error = true;
        state.storageLoading = false;
      })
  },
});


// export const postStorageAsync = (bucket, formData) => async () => {
//     const data = await postStorage(bucket, formData);
//     console.log(data)
// };


export default storageSlice.reducer;