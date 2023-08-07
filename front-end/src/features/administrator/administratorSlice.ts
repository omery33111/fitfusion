import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { deleteCallback, getCallbacks } from "./administratorAPI";
import { AdministratorState } from "../../models/Administrator";



const initialState: AdministratorState = {
    callbacks: []
  };



export const getCallbacksAsync = createAsyncThunk(
    'administrator/getCallbacks',
    async () => {
      const response = await getCallbacks();
      return response.data;
    }
  );

  
  export const deleteCallbackAsync = createAsyncThunk(
    'administrator/deleteCallback',
    async (id: string) => { await deleteCallback(id);
    return { id };
    }
  );



  export const administratorSlice = createSlice({
    name: 'administrator',
    initialState,
    reducers: {
      do: (state) => {
      },
  
      },
    extraReducers: (builder) => {
      builder
        .addCase(getCallbacksAsync.fulfilled, (state, action) =>
        {
          state.callbacks = action.payload;
        })
        .addCase(deleteCallbackAsync.fulfilled, (state, action) => {
          state.callbacks = state.callbacks.filter(callback => callback.id !== action.payload.id)
        })
    },
  });




export const selectAllCallbacks = (state: RootState) => state.administrator.callbacks;

export default administratorSlice.reducer;