import {
  createAsyncThunk,
  createSlice,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { schema, normalize } from "normalizr";
import { getBooksList } from "../../Data/Provider/BookProvider";
import { deleteComment as deleteAction } from "./Books.actions";
import { deleteComment as selfDeleteComment } from "../Comments/Commenter.actions";

const user = new schema.Entity("users");
const comment = new schema.Entity("comments", {
  commenter: user,
});

const book = new schema.Entity("books", {
  comments: [comment],
  author: user,
});

const booksSchema = [book];

export const booksAdapter = createEntityAdapter();

export const fetchBooksList = createAsyncThunk(
  "books/getBooksList",
  async () => {
    const { data } = await getBooksList();

    const { entities, result } = normalize(data, booksSchema);

    return entities;
  }
);

// Then, handle actions in your reducers:
const booksSlice = createSlice({
  name: "books",
  initialState: booksAdapter.getInitialState(),
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooksList.fulfilled, (state, action) => {
      booksAdapter.upsertMany(state, action.payload.books);
    });

    builder.addCase(deleteAction.type, (state, action) => {
      booksAdapter.upsertOne(state, action.payload);
    });
  },
});

export const deleteComment = (org, repo) => async (dispatch) => {
  dispatch(deleteAction(org.book));

  dispatch(selfDeleteComment(org.commentId));
};

const { actions, reducer } = booksSlice;

export const {
  selectById: selectBookById,
  selectIds: selectBookIds,
  selectEntities: selectBookEntities,
  selectAll: selectAllBooks,
  selectTotal: selectTotalBooks,
} = booksAdapter.getSelectors((state) => state.books);

export default reducer;
