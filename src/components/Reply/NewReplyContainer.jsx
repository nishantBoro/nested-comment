import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../../slices/comment";
import Reply from "./Reply";

const NewReplyContainer = ({ presetValue, currentPath, setIsReplyEnabled }) => {
  const dispatch = useDispatch();
  const [reply, setReply] = useState(presetValue);

  const handleInputChange = (e) => {
    setReply(e.target.value);
  };

  const handlePostReply = () => {
    dispatch(addComment({ currentPath, comment: reply }));
    setIsReplyEnabled(false);
  };

  return (
    <Reply
      handleInputChange={handleInputChange}
      handlePostReply={handlePostReply}
      value={reply}
    />
  );
};

export default NewReplyContainer;
