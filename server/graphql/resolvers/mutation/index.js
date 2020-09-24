const User = require("./user.mutation");
const Post = require("./post.mutation");

const Mutation = {
    ...User,
    ...Post
};

module.exports = Mutation;