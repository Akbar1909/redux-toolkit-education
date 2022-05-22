// features/comments/commentsSlice.js

import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { fetchBooksList } from "../Books/Books.slice";
import { editComment, deleteComment } from "./Commenter.actions";

const commentsAdapter = createEntityAdapter();

export const slice = createSlice({
  name: "comments",
  initialState: commentsAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooksList.fulfilled, (state, action) => {
      // Same for the comments
      commentsAdapter.upsertMany(state, action.payload.comments);
    });

    builder.addCase(editComment.type, (state, action) => {
      commentsAdapter.upsertOne(state, action.payload);
    });

    builder.addCase(deleteComment.type, (state, action) => {
      commentsAdapter.removeOne(state, action.payload);
    });
  },
});

const reducer = slice.reducer;
export default reducer;
