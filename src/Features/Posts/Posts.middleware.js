import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPostsList } from "../../Data/Provider/PostProvider";
export const fetchPostsList = createAsyncThunk(
    "posts/getPostsList",
    async () => {
      const response = await getPostsList();
  
      return response.data;
    }
  );