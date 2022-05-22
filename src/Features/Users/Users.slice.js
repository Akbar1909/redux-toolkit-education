import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { fetchBooksList } from "../Books/Books.slice";

const usersAdapter = createEntityAdapter();

export const slice = createSlice({
  name: "users",
  initialState: usersAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooksList.fulfilled, (state, action) => {
      // And handle the same fetch result by inserting the users here
      usersAdapter.upsertMany(state, action.payload.users);
    });
  },
});

export const {
  selectById: selectUserById,
  selectIds: selectUserIds,
  selectEntities: selectUserEntities,
  selectAll: selectAllUsers,
  selectTotal: selectTotalUsers,
} = usersAdapter.getSelectors((state) => state.users);

const reducer = slice.reducer;
export default reducer;
