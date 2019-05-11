const express=require('express');
const fs=require('fs');
const graphqlHttp=require('express-graphql');
const mySchema=require('./schema');
const myResolve=require('./resolver');
const app=express();
const PORT=process.env.port || 3000;
app.listen(PORT);


app.use('/graphql', graphqlHttp({
    schema: mySchema,
    rootValue: myResolve,
    graphiql: true,
}));
// app.get('/',(req,res,next)=>{
//     res.render('');
// });
app.get('/', (req, res) => {
    fs.readFile(__dirname + '/index.html', 'utf8', (err, text) => {
        res.send(text);
    });
});
