import React from "react";
import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div className="loading">
      <ReactLoading type={"spin"} color={"#fff"} height={467} width={175} />
    </div>
  );
};

export default Loading;
