const express=require('express');
const graphqlHttp=require('express-graphql');
const mySchema=require('./schema');
const myResolve=require('./resolver');
const app=express();
app.listen(8080);


app.use('/graphql', graphqlHttp({
    schema: mySchema,
    rootValue: myResolve,
    graphiql: true,
}));
app.get('/',(req,res,next)=>{
    res.send(result);
});

