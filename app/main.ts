import { ApolloServer } from "apollo-server-express";
import express from "express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import http from "http";

import { Schema } from './schema';
import resolvers from "./resolvers";

async function startApolloServer(schema: any, resolvers: any) {
    const app = express();
    const httpServer = http.createServer(app);
    const server = new ApolloServer({
        typeDefs: schema,
        resolvers,

        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    }) as any;
    await server.start();
    server.applyMiddleware({ app });

    await new Promise<void>((resolve) =>
        httpServer.listen({ port: 4000 }, resolve)
    );
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer(Schema, resolvers);