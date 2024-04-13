import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

const backendURL = 'https://tasks.infotecshack.duckdns.org';

export const getTasks = async () => {
    let config = {}
    const token = localStorage.getItem("userToken")
    if (token) {
        config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
    }
    
    const { data } = await axios.get(`${backendURL}/task`, config);
    return data;
}
export const getTaskById = async (id) => {
    let config = {}
    const token = localStorage.getItem("userToken")
    if (token) {
        config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
    }
    const { data } = await axios.get(`${backendURL}/task/${id}`, config);
    return data;
}


export const postTask = createAsyncThunk("postTask", async (newTask, { rejectWithValue }) => {
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
        const { data } = await axios.post(`${backendURL}/task`, newTask, config);
        return data;
    }
    catch (error) {
        if (error.response && error.response.data.error_message) {
            return rejectWithValue(error.response.data.error_message)
        } else {
            return rejectWithValue(error.message)
        }
    }
})

export const postHint = createAsyncThunk("postHint", async (newTask, { rejectWithValue }) => {
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
        const { data } = await axios.post(`${backendURL}/hint`, newTask, config);
        return data;
    }
    catch (error) {
        if (error.response && error.response.data.error_message) {
            return rejectWithValue(error.response.data.error_message)
        } else {
            return rejectWithValue(error.message)
        }
    }
})


export const sendUserAnswer = createAsyncThunk("sendUser", async ({taskId,answer}, { rejectWithValue }) => {
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
        const { data } = await axios.post(`${backendURL}/users/submit-task/${taskId}`,answer, config);
        return data;
    }
    catch (error) {
        if (error.response && error.response.data.error_message) {
            return rejectWithValue(error.response.data.error_message)
        } else {
            return rejectWithValue(error.message)
        }
    }
})


export const getUserCompletedTask=async (id)=>{
    let config = {}
    const token = localStorage.getItem("userToken")
    if (token) {
        config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
    }
    const { data } = await axios.get(`${backendURL}/users/${id}`, config);
    return data;
}



export const getHintById=async (id)=>{
    let config = {}
    const token = localStorage.getItem("userToken")
    if (token) {
        config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
    }
    const { data } = await axios.get(`${backendURL}/hint/by-task/${id}`, config);
    return data;
}



export const editTask = createAsyncThunk("editTask", async ({id,editTask}, { rejectWithValue }) => {
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
        const { data } = await axios.patch(`${backendURL}/task/${id}`, editTask, config);
        return data;
    }
    catch (error) {
        if (error.response && error.response.data.error_message) {
            return rejectWithValue(error.response.data.error_message)
        } else {
            return rejectWithValue(error.message)
        }
    }
})

export const editHint = createAsyncThunk("editHint", async ({id,editHint}, { rejectWithValue }) => {
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
        const { data } = await axios.patch(`${backendURL}/hint/by-task/${id}`, editHint, config);
        return data;
    }
    catch (error) {
        if (error.response && error.response.data.error_message) {
            return rejectWithValue(error.response.data.error_message)
        } else {
            return rejectWithValue(error.message)
        }
    }
})
