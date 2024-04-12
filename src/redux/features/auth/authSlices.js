import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { editUserMe, editUserMePassword, getUserMe, registerUser, userLogin } from '../../../api/auth-api';

const userToken = localStorage.getItem('userToken') || null;

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthed: false,
    loading: false,
    userToken,
    error: false,
    success: false,
    currentUser: {},
    editError:false,
    editSuccess:false,
    editLoading:false
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem('userToken');
      state.loading = false;
      state.userToken = null;
      state.error = false;
    },
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
    },
    setCurrUser: (state, action) => {
      state.currentUser = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        console.log(payload)
        state.loading = false;
        state.userToken = payload.accessToken;
        state.isAuthed = true
        state.error = false
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = true;
        state.isAuthed = false
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(editUserMe.pending, (state) => {
        state.editLoading=true
        state.editError=false
        state.editSuccess=false

      })
      .addCase(editUserMe.fulfilled, (state) => {
        state.editLoading=false
        state.editError=false
        state.editSuccess=true
      })
      .addCase(editUserMe.rejected, (state, { payload }) => {
        state.editLoading=false
        state.editError=true
        state.editSuccess=false
      })
      .addCase(editUserMePassword.pending, (state) => {
        state.editLoading=true
        state.editError=false
        state.editSuccess=false
      })
      .addCase(editUserMePassword.fulfilled, (state) => {
        state.editLoading=false
        state.editError=false
        state.editSuccess=true
      })
      .addCase(editUserMePassword.rejected, (state, { payload }) => {
        state.editLoading=false
        state.editError=true
        state.editSuccess=false
      });
  },
});

export const { logout, setCredentials, setCurrUser } = authSlice.actions;

export const getCurrentUser = () => async (dispatch) => {
  const user = await getUserMe();
  dispatch(setCurrUser(user));
  return user
}

export default authSlice.reducer;

