const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { importSchema } = require("graphql-import");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

// Resolvers
const resolvers = require("./graphql/resolvers/index");
// Models
const User = require("./models/User");

const Post = require("./models/Post");

const server = new ApolloServer({
  typeDefs: importSchema("./graphql/schema.graphql"),
  resolvers,
  context: ({ req }) => ({
    User,
    Post,
    activeUser: req.activeUser,
  }),
});

app.use(async (req, res, next) => {
  const token = req.headers["authorization"];

  if (token && token !== "null") {
    try {
      const activeUser = await jwt.verify(token, process.env.SECRET_KEY);
      req.activeUser = activeUser;
    } catch (e) {
      console.log(e);
    }
  }

  next();
});

server.applyMiddleware({ app });

mongoose
  .connect(process.env.DB_URI, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected..."))
  .catch((e) => console.log(e));

const PORT = process.env.PORT || 5002;

app.listen({ port: PORT }, () => {
  console.log(`Server ready at http://localhost:5002${server.graphqlPath}`);
});
