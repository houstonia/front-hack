import { createSlice } from '@reduxjs/toolkit';
import { getTopics } from '../../../api/topic-api';

const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: [],
    },
    reducers: {
        setTopics: (state, action) => {
            state.topics = [...action.payload];
        },
    },
    extraReducers: (builder) => {},
});

export const { setTopics } = topicsSlice.actions;



export const getTopicsAsync = () => async (dispatch) => {
    const topics = await getTopics();
    console.log(topics)
    dispatch(setTopics(topics));
};

export default topicsSlice.reducer;