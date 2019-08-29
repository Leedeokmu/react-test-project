import React, {Component} from 'react';
import gql from 'graphql-tag'
import Editor from "../../Components/Editor/Editor";
import Mutation from "react-apollo/Mutation";
import {Query} from "react-apollo";
import {EDIT_NOTE, GET_NOTE} from "../../queries";

class Edit extends Component {

    render() {
        const {
            match: {
                params: {id}
            }
        } = this.props;
        return (
            <Query query={GET_NOTE} variables={{id}}>
                {({data}) => (
                    data.note ? (
                        <Mutation mutation={EDIT_NOTE}>
                            {editNote => {
                                this.editNote = editNote;
                                return (<Editor
                                    title={data.note.title}
                                    content={data.note.content}
                                    id={data.note.id}
                                    onSave={this._onSave}
                                />)
                            }}
                        </Mutation>
                    ) : null)
                }
            </Query>
        );
    }
    _onSave = (title, content, id) => {
        if (title !== '' && content !== '' && id) {
            const { history: {push}} = this.props;
            this.editNote({variables: {title, content, id}});
            push(`/`);
        }
    };
}

export default Edit;
