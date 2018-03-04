import React from "react";
import moment from "moment";

import Picture from "../../Form/Gallery/Picture/Picture";

const Post = props => {
  const { title, text, date, imageUrl } = props.data;
  let textShortened = text
    .split("")
    .slice(0, 150)
    .join("");

  return (
    <div className="Post" onClick={props.fullPostClicked}>
      <Picture classes="Post__img" url={imageUrl} />
      <div className="Post__body">
        <h1 className="Post__title">{title}</h1>
        <p className="Post__date">{moment(date).fromNow()}</p>
        <p className="Post__text">{textShortened + "..."}</p>
      </div>
    </div>
  );
};

export default Post;
