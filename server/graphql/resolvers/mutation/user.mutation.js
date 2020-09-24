const token = require('../../../helpers/token');
const bcrypt = require('bcrypt');

module.exports = {
    createUser: async (parent, {data: {username, password}}, { User }) => {
        const user = await User.findOne({username});

        if(user) throw new Error("User already exist!");

        const newUser = await new User({
            username,
            password
        }).save();

        return { token: token.generate(newUser, '1h')}
    },
    signIn : async (parent, { data: {username, password }}, { User }) => {
        const user = await User.findOne({ username });
        if(!user) throw new Error('User not found!');

        const validPassword = await bcrypt.compare(password, user.password);
        if(!validPassword) throw new Error('Wrong password');

        return { token: token.generate(user, '1h')}
    }
};