import gql from 'graphql-tag';
import {NOTE_FRAGMENT} from "./fragments";
export const defaults = {
    notes: [{
        __typename: "Note",
        id: 1,
        title: "First",
        content: "Second"
    },{
        __typename: "Note",
        id: 2,
        title: "First2",
        content: "Second2"
    }]
};

export const typeDefs = [
    gql`
        schema {
            query: Query
            mutation: Mutation
        }
        type Query {
            notesss: [Note]!
            noteee(id: Int!): Note!
        }
        type Mutation {
            createNote(title: String!, content: String!): Note
            editNote(id: Int!, title: String!, content: String!): Note
        }
        type Note {
            id: Int!
            title: String!
            content: String!
        }
    `,
];

export const resolvers = {
    Query: {
        note: (_, variables, {cache}) => {
            const id = cache.config.dataIdFromObject({
                __typename: "Note",
                id: variables.id
            });
            const note = cache.readFragment({fragment: NOTE_FRAGMENT, id});
            return note;
        }
    },
    Mutation: {},
};
