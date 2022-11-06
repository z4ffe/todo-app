import {createSlice} from "@reduxjs/toolkit";
import {addTask, completeTask, deleteTaskById, fetchAllTasks} from "../thunk/taskThunk";

export const taskSlice = createSlice({
   name: "task",
   initialState: {
	  tasks: [],
	  loading: true
   },
   reducers: {},
   extraReducers: (builder) => {
	  builder.addCase(fetchAllTasks.pending, (state) => {
		 state.loading = true
	  })
	  builder.addCase(fetchAllTasks.fulfilled, (state, action) => {
		 state.loading = false
		 state.tasks = action.payload
	  })
	  builder.addCase(fetchAllTasks.rejected, (state) => {
		 state.loading = false
	  })
	  builder.addCase(addTask.fulfilled, (state, action) => {
		 state.tasks = action.payload
	  })
	  builder.addCase(deleteTaskById.fulfilled, (state, action) => {
		 state.tasks = action.payload
	  })
	  builder.addCase(completeTask.fulfilled, (state, action) => {
		 state.tasks = action.payload
	  })
   }
})

export default taskSlice.reducer
