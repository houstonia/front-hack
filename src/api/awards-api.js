import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

const backendURL = 'https://achievements.infotecshack.duckdns.org';

export const getAwardsByUsers = createAsyncThunk(
    'awards/get', async (id) => {
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
            const { data } = await axios.get(`${backendURL}/awards/user/${id}`, config);
            return data;
        }
        catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

