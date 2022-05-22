import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPostsList } from "../../Data/Provider/PostProvider";
// First, create the thunk
export const fetchPostsList = createAsyncThunk(
  "posts/getPostsList",
  async () => {
    const response = await getPostsList();

    return response.data;
  }
);

// Then, handle actions in your reducers:
const postsSlice = createSlice({
  name: "posts",
  initialState: { entities: [], status: "idle", reason: "" },
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchPostsList.fulfilled, (state, action) => {
      state.entities.push(...action.payload);
      state.status = "success";
    });

    builder.addCase(fetchPostsList.pending, (state, action) => {
      state.status = "pending";
    });

    builder.addCase(fetchPostsList.rejected, (state, action) => {
      state.status = "error";
      state.reason = "blah blah";
    });
  },
});

const { actions, reducer } = postsSlice;

export default reducer;
