const user=require('mongoose');
user.connect(
    `mongodb+srv://rashidtvmr:Mass94877348@mycluster-ztbvh.mongodb.net/myDatat?retryWrites=true` )
    .then(() => {
        console.log("Connected");
        //app.listen(8080);
    })
    .catch(err => {
        console.log(err);
    });
const schema=user.Schema({
    _id:String,
    name:String,
    email:String,
    password:String
});
module.exports=user.model('Model',schema);
