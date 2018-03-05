import React from "react";

const Picture = props => {
  return (
    <div
      style={{
        backgroundImage: props.url ? `url(${props.url})` : "none"
      }}
      className={props.classes || null}
      onClick={props.clicked}
    />
  );
};

export default Picture;
