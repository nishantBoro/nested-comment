import React from "react";
import { useState } from "react";

const Reply = (props) => {
  const { value = "", handleInputChange, handlePostReply } = props;

  return (
    <div>
      <input value={value} onChange={handleInputChange} />
      <button onClick={handlePostReply}>Submit</button>
    </div>
  );
};

export default Reply;
