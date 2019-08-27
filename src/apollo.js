import { ApolloClient} from 'apollo-client'
import {InMemoryCache} from "apollo-cache-inmemory";
import {ApolloLink} from "apollo-link";
import {withClientState} from "apollo-link-state";
import {defaults, resolvers, typeDefs} from "./clientState";


const cache = new InMemoryCache();
const clientState = withClientState({
    cache,
    typeDefs,
    defaults,
    resolvers

});

const client = new ApolloClient({
    cache,
    link: ApolloLink.from([clientState])
})

export default client;