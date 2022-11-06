import {createSlice} from "@reduxjs/toolkit";
import {fetchAllTasks} from "../thunk/taskThunk";

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
		 state.tasks = [...state.tasks, ...action.payload]
	  })
	  builder.addCase(fetchAllTasks.rejected, (state) => {
		 state.loading = false
	  })
   }
})

export default taskSlice.reducer
