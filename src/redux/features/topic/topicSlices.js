import { createSlice } from '@reduxjs/toolkit';
import { getTasksFromHub, getTopics } from '../../../api/topic-api';

const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: [],
        tasksHub:[]
    },
    reducers: {
        setTopics: (state, action) => {
            state.topics = [...action.payload];
        },
        setTasksHub: (state, action) => {
            state.tasksHub = [...action.payload];
        },
    },
    extraReducers: (builder) => {},
});

export const { setTopics,setTasksHub } = topicsSlice.actions;



export const getTopicsAsync = () => async (dispatch) => {
    const topics = await getTopics();
    console.log(topics)
    dispatch(setTopics(topics));
};
export const getTasksHubsAsync = () => async (dispatch) => {
    const tasks = await getTasksFromHub();
    console.log(tasks)
    dispatch(setTasksHub(tasks));
};


export default topicsSlice.reducer;