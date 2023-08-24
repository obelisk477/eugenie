const path = require('path');
const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { authMiddleware } = require('./middleware/auth');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();



const BASIC_LOGGING = {
  requestDidStart(requestContext) {
      console.log("request started");
      console.log(requestContext.request.query);
      console.log(requestContext.request.variables);
      return {
          didEncounterErrors(requestContext) {
              console.log("an error happened in response to query " + requestContext.request.query);
              console.log(requestContext.errors);
          }
      };
  },

  willSendResponse(requestContext) {
      console.log("response sent", requestContext.response);
  }
};


const server = new ApolloServer({
  typeDefs,
  resolvers,
  // plugins: [BASIC_LOGGING]
});

const startApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use('/graphql', expressMiddleware(server, { context: authMiddleware }));

  // if we're in production, serve client/dist as static assets
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

startApolloServer();
