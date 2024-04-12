
import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const backendURL = 'https://api.infotecshack.duckdns.org'

export const userLogin = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      const { data } = await axios.post(
        `${backendURL}/api/auth/login`,
        { email, password },
        config
      )
      localStorage.setItem('userToken', data.accessToken)

      return data
    } catch (error) {
      if (error.response && error.response.data.error_message) {
        return rejectWithValue(error.response.data.error_message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

export const registerUser = createAsyncThunk(
  'user/register',
  async ({ username, email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      await axios.post(
        `${backendURL}/api/auth/register`,
        { username, email, password },
        config
      )
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)



export const getUserMe = async () => {
  let config = {}
  const token = localStorage.getItem("userToken")
  if (token) {
    config = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
  }
  const { data } = await axios.get(`${backendURL}/api/user/me`, config);
  return data;
}

export const editUserMe = createAsyncThunk(
  'user/edit', async (edited) => {
    try {
      let config = {}
      const token = localStorage.getItem("userToken")
      if (token) {
        config = {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      }
      const { data } = await axios.put(`${backendURL}/api/user/me`, edited, config);
      return data;
    }
    catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  })


  export const editUserMePassword = createAsyncThunk(
    'user/password', async (edited) => {
      try {
        let config = {}
        const token = localStorage.getItem("userToken")
        if (token) {
          config = {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }
        }
        const { data } = await axios.put(`${backendURL}/api/user/password`, edited, config);
        return data;
      }
      catch (error) {
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message)
        } else {
          return rejectWithValue(error.message)
        }
      }
    })


    