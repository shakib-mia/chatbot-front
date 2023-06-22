import React from "react";

const Reply = ({ reply, className }) => {
  // console.log(reply.slice(0, 2).includes('\n\n'));
  return (
    <pre className={className}>
      {/* {reply.slice(0, 2).includes('\n\n') ? reply.slice(2, reply.length) : reply} */}
    </pre>
  );
};

export default Reply;
