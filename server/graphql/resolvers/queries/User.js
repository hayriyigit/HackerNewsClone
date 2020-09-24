const User = {
  posts: async (parent, args, { Post }) => {
    return await Post.find({ user_id: parent.id });
  },
};

module.exports = User;
