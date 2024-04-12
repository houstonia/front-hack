import axios from 'axios';
import { API_URL } from './url';

export const fetchCourses = async () => {   
    const { data } = await axios.get(`${API_URL}/api/course`);
    return data;
};

export const fetchCourseById = async (id) => {   
    const { data } = await axios.get(`${API_URL}/api/course/${id}`);
    return data;
};



export const fetchDataApi = async () => {   
  const { data } = await axios.get(`${API_URL}/ads`);
  return data;
};
export const fetchOneDataApi = async (id) => {   
    const { data } = await axios.get(`${API_URL}/ads/${id}`);
    return data;
  };
  

export const createDataApi = async (createdData) => {
  const { data } = await axios.post(`${API_URL}/ads`, createdData);
  return data;
};

export const deleteDataApi = async (id) => {
  await axios.delete(`${API_URL}/ads/${id}`);
};


