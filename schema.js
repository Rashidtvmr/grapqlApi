const {buildSchema}=require('graphql');
module.exports=buildSchema(`
        type User{
            _id:ID
            name:String!
            email:String!
            password:String!
        }
        input loginDataType{
            email:String!
            password:String!
        }
        input UserDataType{
            _id:ID
            email:String!
            name:String!
            password:String!
        }
        type RootQuery{
            getUser(loginData:loginDataType):String!
        }
        type RootMutation{
            createUser(UserData:UserDataType):User!
        }
        schema{
            query:RootQuery
            mutation:RootMutation
        }
`);