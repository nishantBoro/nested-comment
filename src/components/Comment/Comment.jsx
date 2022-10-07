import React from "react";

import CommentContainer from "./CommentContainer";
import { EditReplyContainer, NewReplyContainer } from "../Reply";

const Comment = (props) => {
  const {
    author,
    comment,
    replies,
    handleEdit,
    handleDelete,
    handleReply,
    isEditEnabled,
    isReplyEnabled,
    currentPath,
    setIsEditEnabled,
    setIsReplyEnabled,
  } = props;

  return (
    <div style={{ paddingLeft: "24px" }}>
      {isEditEnabled ? (
        <EditReplyContainer
          currentPath={currentPath}
          presetValue={comment}
          setIsEditEnabled={setIsEditEnabled}
        />
      ) : (
        <p>{comment}</p>
      )}

      <span onClick={handleEdit}>Edit</span>
      <span onClick={handleDelete}>Delete</span>
      <span onClick={handleReply}>Reply</span>

      {replies &&
        Object.values(replies).map((item) => {
          return <CommentContainer currentPath={currentPath} item={item} />;
        })}

      {isReplyEnabled && (
        <NewReplyContainer
          currentPath={currentPath}
          setIsReplyEnabled={setIsReplyEnabled}
        />
      )}
    </div>
  );
};

export default Comment;
