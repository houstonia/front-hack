import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

const backendURL = 'https://storage.infotecshack.duckdns.org';


export const postStorage = createAsyncThunk(
    'postStorage',
    async ({ bucket, formData }, { rejectWithValue }) => {
        try {
            let config = {}
            const token = localStorage.getItem("userToken")
            if (token) {
                config = {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        "Content-Type": "multipart/form-data",
                        "accept": "application/json"
                    }
                }
            }
            const { data } = await axios.post(`${backendURL}/storage/${bucket}`, formData, config)
            return data
        }
        catch (error) {
            if (error.response && error.response.data.error_message) {
                return rejectWithValue(error.response.data.error_message)
            } else {
                return rejectWithValue(error.message)
            }
        }

    }
)
export const getStorage = createAsyncThunk("getStorage", async ({ bucket, id }, { rejectWithValue }) => {
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
        const { data } = await axios.get(`${backendURL}/storage/${bucket}/${id}`, config);
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
