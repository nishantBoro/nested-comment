import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateComments } from "../../slices/comment";

import CommentSection from "./CommentSection";

const CommentSectionContainer = (props) => {
  const dispatch = useDispatch();

  const { replies } = useSelector((state) => state.comment);

  const getAPIResponse = async () => {
    const res = await fetch(
      "https://run.mocky.io/v3/c15a9bda-fc6a-40aa-92e1-3cefebe4ec90"
    );
    const data = await res.json();

    dispatch(updateComments(data));
  };

  return <CommentSection getAPIResponse={getAPIResponse} list={replies} />;
};

export default CommentSectionContainer;
