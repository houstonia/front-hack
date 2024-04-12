import axios from 'axios'

const backendURL = 'https://api.infotecshack.duckdns.org';

export const getUsers = async () => {
    let config = {}
    const token = localStorage.getItem("userToken")
    if (token) {
        config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
    }
    const { data } = await axios.get(`${backendURL}/api/user`,config);
    return data;
}

export const getUserById = async (id) => {
    let config = {}
    const token = localStorage.getItem("userToken")
    if (token) {
        config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
    }
    const { data } = await axios.get(`${backendURL}/api/user/${id}`,config);
    return data;
}


export const getCurrentUser = async () => {
    let config = {}
    const token = localStorage.getItem("userToken")
    if (token) {
        config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
    }
    const { data } = await axios.get(`${backendURL}/api/user/me`,config);
    return data;
}

export const putCurrentUser = async (updated) => {
    let config = {}
    const token = localStorage.getItem("userToken")
    if (token) {
        config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
    }
    const { data } = await axios.put(`${backendURL}/api/user/me`,updated,config);
    return data;
}
export const putUserPassword = async (updatedPsw) => {
    let config = {}
    const token = localStorage.getItem("userToken")
    if (token) {
        config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
    }
    const { data } = await axios.put(`${backendURL}/api/user/password`,updatedPsw,config);
    return data;
}
