const express = require("express");
const fs = require("fs");
const graphqlHttp = require("express-graphql");
const mySchema = require("./schema");
const myResolve = require("./resolver");
const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT);

app.use(express.static("public"));
app.use(
  "/graphql",
  graphqlHttp({
    schema: mySchema,
    rootValue: myResolve,
    graphiql: true
  })
);
