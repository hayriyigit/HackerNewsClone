module.exports = {
    createPost: async (parent, { data : {
        title,
        content,
        isUrl,
        url,
        isQuestion,
        user_id}}, { Post }) =>{

            return await new Post({
                title,
                content,
                isUrl,
                url,
                isQuestion,
                user_id
            }).save()
        }
};