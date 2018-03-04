const moment = require("moment");
const posts = [
  {
    id: 6,
    title: "A Complicated Hello World",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac varius est, aliquam venenatis nunc. Aliquam quis pellentesque nulla, id interdum tellus. In ac augue eget urna eleifend scelerisque. Nunc varius eu ipsum id ullamcorper. Sed eget felis neque. Donec augue libero, aliquet tincidunt purus quis, imperdiet tincidunt nunc. Proin dignissim aliquam iaculis. Ut id sem leo. Curabitur suscipit purus erat, nec pellentesque eros laoreet nec. Ut eleifend eu velit eu aliquet. Aliquam porttitor justo id ullamcorper porta.",
    date: "2018-03-01T17:23:53.151",
    imageUrl:
      "https://images.unsplash.com/photo-1518409274682-1cb2fe2955a8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b6ce2d94a6218709710dd8f604c62425&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 5,
    title: "Connections: A Gateway to Your Future",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac varius est, aliquam venenatis nunc. Aliquam quis pellentesque nulla, id interdum tellus. In ac augue eget urna eleifend scelerisque. Nunc varius eu ipsum id ullamcorper. Sed eget felis neque. Donec augue libero, aliquet tincidunt purus quis, imperdiet tincidunt nunc. Proin dignissim aliquam iaculis. Ut id sem leo. Curabitur suscipit purus erat, nec pellentesque eros laoreet nec. Ut eleifend eu velit eu aliquet. Aliquam porttitor justo id ullamcorper porta.",
    date: "2018-03-01T12:23:53.151",
    imageUrl:
      "https://images.unsplash.com/photo-1420177743490-15ee9ba8c78f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2480ea8944122e749541d6b25fb6bebf&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 4,
    title: "React and AJAX",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac varius est, aliquam venenatis nunc. Aliquam quis pellentesque nulla, id interdum tellus. In ac augue eget urna eleifend scelerisque. Nunc varius eu ipsum id ullamcorper. Sed eget felis neque. Donec augue libero, aliquet tincidunt purus quis, imperdiet tincidunt nunc. Proin dignissim aliquam iaculis. Ut id sem leo. Curabitur suscipit purus erat, nec pellentesque eros laoreet nec. Ut eleifend eu velit eu aliquet. Aliquam porttitor justo id ullamcorper porta.",
    date: "2018-03-01T09:23:53.151",
    imageUrl:
      "https://images.unsplash.com/photo-1497445462247-4330a224fdb1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=300889032f35d149002c7f9805f2904b&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 3,
    title: "How to Use CSS Variables",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac varius est, aliquam venenatis nunc. Aliquam quis pellentesque nulla, id interdum tellus. In ac augue eget urna eleifend scelerisque. Nunc varius eu ipsum id ullamcorper. Sed eget felis neque. Donec augue libero, aliquet tincidunt purus quis, imperdiet tincidunt nunc. Proin dignissim aliquam iaculis. Ut id sem leo. Curabitur suscipit purus erat, nec pellentesque eros laoreet nec. Ut eleifend eu velit eu aliquet. Aliquam porttitor justo id ullamcorper porta.",
    date: "2018-02-28T17:23:53.151",
    imageUrl:
      "https://images.unsplash.com/photo-1507667522877-ad03f0c7b0e0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d9740ec30e869b5e79682658b348e82c&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 2,
    title: "Just Another Day",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac varius est, aliquam venenatis nunc. Aliquam quis pellentesque nulla, id interdum tellus. In ac augue eget urna eleifend scelerisque. Nunc varius eu ipsum id ullamcorper. Sed eget felis neque. Donec augue libero, aliquet tincidunt purus quis, imperdiet tincidunt nunc. Proin dignissim aliquam iaculis. Ut id sem leo. Curabitur suscipit purus erat, nec pellentesque eros laoreet nec. Ut eleifend eu velit eu aliquet. Aliquam porttitor justo id ullamcorper porta.",
    date: "2018-02-26T17:23:53.151",
    imageUrl:
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e75df7c9c10ae6d3d0a73a03f1dccce7&auto=format&fit=crop&w=1050&q=80"
  },
  {
    id: 1,
    title: "A Meaningful Title",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac varius est, aliquam venenatis nunc. Aliquam quis pellentesque nulla, id interdum tellus. In ac augue eget urna eleifend scelerisque. Nunc varius eu ipsum id ullamcorper. Sed eget felis neque. Donec augue libero, aliquet tincidunt purus quis, imperdiet tincidunt nunc. Proin dignissim aliquam iaculis. Ut id sem leo. Curabitur suscipit purus erat, nec pellentesque eros laoreet nec. Ut eleifend eu velit eu aliquet. Aliquam porttitor justo id ullamcorper porta.",
    date: "2018-01-25T17:23:53.151",
    imageUrl:
      "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=78847a9d49e94466dd2ab32d7031cd68&auto=format&fit=crop&w=1000&q=60"
  }
];

let id = 7;

const addPost = (req, res) => {
  let { title, text, imageUrl } = req.body;
  posts.unshift({
    id: id,
    title,
    text,
    imageUrl,
    date: moment()
  });
  id++;
  res.status(200).send(posts);
};

const getPosts = (req, res) => {
  res.status(200).send(posts);
};

const getPost = (req, res) => {
  res.status(200).send(posts[posts.length - req.params.id]);
};

const updatePost = (req, res) => {
  let index = posts.findIndex(post => post.id === parseInt(req.params.id));
  if (index === -1) {
    res.status(400).json({ message: "Post Not Found." });
  } else {
    posts[index].title = req.body.title || posts[index].title;
    posts[index].text = req.body.text || posts[index].text;
    posts[index].imageUrl = req.body.imageUrl || posts[index].imageUrl;
    res.status(200).send(posts);
  }
};

const deletePost = (req, res) => {
  let index = posts.findIndex(post => post.id === parseInt(req.params.id));
  if (index === -1) {
    res.status(400).json({ message: "Post Not Found." });
  } else {
    posts.splice(index, 1);
    posts.forEach((post, index) => {
      post.id = posts.length - index;
    });
    id = posts.length + 1;
    res.status(200).send(posts);
  }
};

module.exports = {
  addPost,
  getPosts,
  getPost,
  updatePost,
  deletePost
};
