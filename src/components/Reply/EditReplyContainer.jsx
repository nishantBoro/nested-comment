import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { updateComment } from "../../slices/comment";

import Reply from "./Reply";

const EditReplyContainer = ({ presetValue, currentPath, setIsEditEnabled }) => {
  const dispatch = useDispatch();
  const [reply, setReply] = useState(presetValue);

  const handleInputChange = (e) => {
    setReply(e.target.value);
  };

  const handlePostReply = () => {
    dispatch(updateComment({ comment: reply, currentPath }));
    setIsEditEnabled(false);
  };

  return (
    <Reply
      handleInputChange={handleInputChange}
      handlePostReply={handlePostReply}
      value={reply}
    />
  );
};

export default EditReplyContainer;
