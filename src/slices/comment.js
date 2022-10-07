import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "comment",
  initialState: {
    replies: {},
    lastIDCount: 100,
  },
  reducers: {
    updateComments(state, { payload }) {
      state.replies = payload;
    },
    updateComment(state, { payload }) {
      const { comment, currentPath } = payload;
      const currentPathSplitted = currentPath.split("-");

      let currentStateLevel = state;

      currentPathSplitted.forEach((item) => {
        currentStateLevel = currentStateLevel.replies[item];
      });

      currentStateLevel.comment = comment;
    },
    addComment(state, { payload }) {
      const { comment, currentPath } = payload;
      const currentPathSplitted = currentPath.split("-");

      let currentStateLevel = state;

      currentPathSplitted.forEach((item) => {
        currentStateLevel = currentStateLevel.replies[item];
      });

      const lastIDCount = state.lastIDCount;
      const newId = lastIDCount + 1;

      state.lastIDCount = newId;

      if (currentStateLevel.replies) {
        currentStateLevel.replies[newId] = {
          id: newId,
          name: "New User",
          comment,
        };

        return;
      }

      currentStateLevel.replies = {
        [newId]: {
          id: newId,
          name: "New User",
          comment,
        },
      };
    },
    deleteComment(state, { payload }) {
      const { currentPath } = payload;
      let currentPathSplitted = currentPath.split("-");
      let nodeToDelete = currentPathSplitted.pop();

      let currentStateLevel = state;

      currentPathSplitted.forEach((item) => {
        currentStateLevel = currentStateLevel.replies[item];
      });

      console.log("path", currentPath);

      delete currentStateLevel.replies[nodeToDelete];
    },
  },
});
export default slice.reducer;

export const { updateComment, addComment, deleteComment, updateComments } =
  slice.actions;
