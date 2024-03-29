import {createSlice} from "@reduxjs/toolkit";
import {addTask, completeTask, deleteAllTasks, deleteTaskById, fetchAllTasks, flagTask} from "../thunk/taskThunk";

export const taskSlice = createSlice({
   name: "task",
   initialState: {
	  tasks: [],
	  tasksFiltered: [],
	  loading: true,
	  searchMode: false,
	  userInput: '',
	  completed: 0,
   },
   reducers: {
	  setSearchMode: (state) => {
		 state.searchMode = !state.searchMode
	  },
	  changeUserInput: (state, action) => {
		 state.userInput = action.payload
	  },
	  setFilteredTasks: (state, action) => {
		 state.tasksFiltered = action.payload
	  }
   },
   extraReducers: (builder) => {
	  builder.addCase(fetchAllTasks.pending, (state) => {
		 state.loading = true
	  })
	  builder.addCase(fetchAllTasks.fulfilled, (state, action) => {
		 state.loading = false
		 console.log(action.payload)
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
	  builder.addCase(flagTask.fulfilled, (state, action) => {
		 state.tasks = action.payload
	  })
	  builder.addCase(deleteAllTasks.fulfilled, (state, action) => {
		 state.tasks = action.payload
	  })
   }
})

export const {setSearchMode, changeUserInput, setFilteredTasks} = taskSlice.actions
export default taskSlice.reducer
