import { createSlice } from '@reduxjs/toolkit';
import { editHint, editTask, getHintById, getTaskById, getTasks, getUserCompletedTask, postHint, postTask, sendUserAnswer } from '../../../api/task-api';

const taskSlice = createSlice({
    name: 'task',
    initialState: {
        completedTasks:[],
        tasks: [],
        task: {},
        hint:{},
        postedTask:{},
        hints:[],
        postTaskError:false,
        postTaskSuccess:false,
        postLoading:false,
        postHintError:false,
        postHintSuccess:false,
        sendUserAnswerError:false,
        sendUserAnswerSuccess:false,
        editTaskError:false,
        editTaskSuccess:false,
        editLoading:false,
        editHintSuccess:false,
        editHintError:false,
        
    },
    reducers: {
        setTasks: (state, action) => {
            state.tasks = [...action.payload];
        },
        setCompletedTasks: (state, action) => {
          state.completedTasks = [...action.payload.completed_tasks];
      },
        setHint:(state,action)=>{
          state.hint=action.payload
        },
        setTask: (state, action) => {
            state.task = action.payload
        },
        addTask: (state, action) => {
            state.task.push(action.payload);
          },
    },
    extraReducers: (builder) => {
        builder
          .addCase(postTask.pending, (state) => {
            state.postTaskError = false;
            state.postLoading=true
          })
          .addCase(postTask.fulfilled, (state, { payload }) => {
            state.postedTask=payload
            state.tasks.push(payload);
            state.postTaskError = false;
            state.postTaskSuccess = true
            state.postLoading=false
          })
          .addCase(postTask.rejected, (state, { payload }) => {
            state.postTaskError = true;
            state.postTaskSuccess = false
            state.postLoading=false
          })
          .addCase(postHint.pending, (state) => {
            state.postLoading=true
            state.postHintError = false;
          })
          .addCase(postHint.fulfilled, (state, { payload }) => {
            console.log(payload)
            state.hints.push(payload);
            state.postHintError = false;
            state.postHintSuccess = true
            state.postLoading=false
          })
          .addCase(postHint.rejected, (state, { payload }) => {
            state.postHintError = true;
            state.postHintSuccess = false
            state.postLoading=false
          })
          .addCase(sendUserAnswer.pending, (state) => {
            state.sendUserAnswerError = false;
          })
          .addCase(sendUserAnswer.fulfilled, (state, { payload }) => {
            console.log(payload)
            state.hints.push(payload);
            state.sendUserAnswerError = false;
            state.sendUserAnswerSuccess = true
          })
          .addCase(sendUserAnswer.rejected, (state, { payload }) => {
            state.sendUserAnswerError = true;
            state.sendUserAnswerSuccess = false
          })
          .addCase(editTask.pending, (state) => {
            state.editTaskError = false;
            state.editTaskSuccess=false;
            state.editLoading=true;
          })
          .addCase(editTask.fulfilled, (state, { payload }) => {
            console.log(payload)
            state.hints.push(payload);
            state.editTaskError = false;
            state.editTaskSuccess = true;
            state.editLoading=false;
          })
          .addCase(editTask.rejected, (state, { payload }) => {
            state.editTaskError = true;
            state.editTaskSuccess = false
            state.editLoading=false
          })
          .addCase(editHint.pending, (state) => {
            state.editHintError = false;
            state.editLoading=true;
          })
          .addCase(editHint.fulfilled, (state, { payload }) => {
            console.log(payload)
            state.editLoading=false
            state.editHintError = false;
            state.editHintSuccess = true

          })
          .addCase(editHint.rejected, (state, { payload }) => {
            state.editHintError = true;
            state.editHintSuccess = false
            state.editLoading=false
          })
      },
});

export const { setTasks,setTask,addTask,setCompletedTasks,setHint } = taskSlice.actions;

export const getTasksAsync = () => async (dispatch) => {
    const tasks = await getTasks();
    dispatch(setTasks(tasks));
};
export const getTaskByIdAsync = (id) => async (dispatch) => {
    const task = await getTaskById(id);
    dispatch(setTask(task));
};  
export const getTaskByType = (tasks) => {
    return Object.values(tasks.reduce((acc, task) => {
        if (!acc[task.type]) {
            acc[task.type] = [];
        }
        acc[task.type].push(task);
        return acc;
    }, {}));
}

export const getCompletedTasksAsync = (id) => async (dispatch) => {
  const tasks = await getUserCompletedTask(id);
  dispatch(setCompletedTasks(tasks));
};

export const getHintByIdAsync = (id) => async (dispatch) => {
  console.log(id)
  const hint = await getHintById(id);
  console.log("completed",hint)
  dispatch(setHint(hint));
};

export default taskSlice.reducer;