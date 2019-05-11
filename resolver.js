// const bcrypt = require('bcryptjs');
const  User=require('./mongo/user');
module.exports= {
    getUser() {
        return {
            email: "rashid,pbt@gmail.com",
            password: "Hello World"
        }
    },
    createUser: async function ({UserData}) {
        const user = new User({
            _id:Math.random().toString(),
            name: UserData.name,
            email: UserData.email,
            password: UserData.password
        });
        const result = await user.save();
        console.log("result:"+result._doc.uname);
        return {
            _id:result._doc._id,
            name:result._doc.name,
            email:result._doc.email,
            password:result._doc.password
        }
    }
};


// const User = require('../models/user');

// module.exports = {
//     hello() {
//         return "Helooo";
//     }
// };
        //async function({ userInput }, req) {
    //     //   const email = args.userInput.email;
    //     const existingUser = await User.findOne({ email: userInput.email });
    //     if (existingUser) {
    //         const error = new Error('User exists already!');
    //         throw error;
    //     }
    //     const hashedPw = await bcrypt.hash(userInput.password, 12);
    //     const user = new User({
    //         email: userInput.email,
    //         name: userInput.name,
    //         password: hashedPw
    //     });
    //     const createdUser = await user.save();
    //     return { ...createdUser._doc, _id: createdUser._id.toString() };
    // }
