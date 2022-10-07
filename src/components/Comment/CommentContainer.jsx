import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteComment } from "../../slices/comment";

import Comment from "./Comment";

const CommentContainer = (props) => {
  const dispatch = useDispatch();

  const { item, currentPath } = props;
  const { author, comment, replies, id } = item;

  const [isEditEnabled, setIsEditEnabled] = useState(false);
  const [isReplyEnabled, setIsReplyEnabled] = useState(false);

  const handleEdit = () => {
    setIsEditEnabled(true);
  };

  const handleDelete = () => {
    dispatch(deleteComment({ currentPath }));
  };

  const handleReply = () => {
    setIsReplyEnabled(true);
  };

  const updatedPath = currentPath ? `${currentPath}-${id}` : `${id}`;

  return (
    <Comment
      isEditEnabled={isEditEnabled}
      isReplyEnabled={isReplyEnabled}
      author={author}
      comment={comment}
      replies={replies}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
      handleReply={handleReply}
      currentPath={updatedPath}
      setIsEditEnabled={setIsEditEnabled}
      setIsReplyEnabled={setIsReplyEnabled}
    />
  );
};

export default CommentContainer;
