import { configureStore } from '@reduxjs/toolkit';
import authSlices from './features/auth/authSlices';
import courseTypesSlices from './features/course-types/courseTypesSlices';
import storageSlice from './features/storage/storageSlice';
import taskSlices from './features/tasks/taskSlices';
import titleSlices from './features/title/titleSlices';
import toaster from './features/toaster/toaster';
export default configureStore({
  reducer: {
    title:titleSlices,
    courseType:courseTypesSlices,
    auth:authSlices,
    task:taskSlices,
    storage:storageSlice,
    toaster:toaster
  },
});