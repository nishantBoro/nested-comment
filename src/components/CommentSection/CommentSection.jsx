import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { CommentContainer } from "../Comment";

const CommentSection = (props) => {
  const { getAPIResponse, list } = props;

  useEffect(() => {
    getAPIResponse();
  }, []);

  return Object.values(list).map((item) => {
    return <CommentContainer item={item} currentPath="" />;
  });
};

export default CommentSection;
