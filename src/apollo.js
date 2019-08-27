import { ApolloClient} from 'apollo-client'
import {InMemoryCache} from "apollo-cache-inmemory";
import {defaults, resolvers, typeDefs} from "./clientState";
import {withClientState} from "apollo-link-state";
import {ApolloLink} from "apollo-link";

const cache = new InMemoryCache();

const clientState = withClientState({
    cache,
    defaults,
    typeDefs,
    resolvers,
})
const client = new ApolloClient({
    cache,
    link: ApolloLink.from([clientState])
});

export default client;