import { createSlice } from '@reduxjs/toolkit';

const courseTypeSlice = createSlice({
  name: 'courseType',
  initialState: {
    type: [],
    coast:[],
    level:[]
  },
  reducers: {
    setType: (state, action) => {
      state.type.push(action.payload)
    },
    removeType:(state,action)=>{
      state.type=state.type.filter(tp => tp !== action.payload);
    },
    clearTypes:(state)=>{
      state.type=[]
    },
    setCoast:(state,action)=>{
        state.coast.push(action.payload)
    },
    setLevel:(state,action)=>{
        state.level,push(action.payload)
    }
  },
});

export const { setType, setCoast,setLevel,removeType,clearTypes } = courseTypeSlice.actions;

export default courseTypeSlice.reducer;