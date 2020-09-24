const Query = {
    user: async (parent, args, { User }) => {
        return await User.findById(args.id)
    },
    users: async (parent, args, { User }) => {
        return await User.find({}).sort({'createdAt': 'desc'})
    },
    activeUser: async (parent, args, { User, activeUser }) => {
        if(!activeUser){
            return null
        }
        return await User.findOne({username: activeUser.username})
    },
    post: async (parent, args, { Post }) => {
        return await Post.findById(args.id)
    },
    posts: async (parent, args, { Post }) => {
        return await Post.find({}).sort({'createdAt': 'desc'})
    },
    new: async (parent, args, { Post }) => {
        return await Post.find({isUrl: true})
    },
    question: async (parent, args, { Post }) => {
        return await Post.find({isQuestion: true})
    }
};

module.exports = Query;