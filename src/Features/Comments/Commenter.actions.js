import { createAction } from "@reduxjs/toolkit";
const editComment = createAction("EDIT_COMMENT");
const deleteComment = createAction("COMMENTS/DELETE_COMMENT");

export { editComment, deleteComment };
