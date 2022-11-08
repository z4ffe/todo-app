import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const HOST_URL = process.env.REACT_APP_SERVER || '/'

export const fetchAllTasks = createAsyncThunk('Task/fetchAllTasks', async (data) => {
   try {
	  const response = await axios.get(`${HOST_URL}/api/tasks`)
	  return response.data
   } catch (error) {
	  throw error
   }
})

export const addTask = createAsyncThunk('Task/addTask', async (data) => {
   try {
	  const response = await axios.post(`${HOST_URL}/api/add`, {
		 task: data
	  })
	  return response.data
   } catch (error) {
	  throw error
   }
})

export const completeTask = createAsyncThunk('Task/completeTask', async (data) => {
   try {
	  const response = await axios.patch(`${HOST_URL}/api/complete`, {
		 _id: data._id
	  })
	  return response.data
   } catch (error) {
	  throw error
   }
})

export const flagTask = createAsyncThunk('Task/flagTask', async (data) => {
   try {
	  const response = await axios.patch(`${HOST_URL}/api/flag`, {
		 _id: data._id
	  })
	  return response.data
   } catch (error) {
	  throw error
   }
})

export const deleteTaskById = createAsyncThunk('Task/deleteTaskById', async (data) => {
   try {
	  const response = await axios.delete(`${HOST_URL}/api/remove`, {
		 data: {
			_id: data._id
		 }
	  })
	  return response.data
   } catch (error) {
	  throw error
   }
})

export const deleteAllTasks = createAsyncThunk('Task/deleteAllTasks', async (data) => {
   try {
	  const response = await axios.delete(`${HOST_URL}/api/removeall`, {})
	  return response.data
   } catch (error) {
	  throw error
   }
})
