import React, {Component} from 'react';
import gql from "graphql-tag";
import Mutation from "react-apollo/Mutation";
import Editor from "../../Components/Editor/Editor";
import {ADD_NOTE} from "../../queries";

class Add extends Component{
    _onSave = (title, content) => {
        const {
            history: {push}
        } = this.props;
        if (title !== "" && content !== "") {
            this.addNote({variables:{title, content}});
            push("/")
        }
    }
    render() {
        return (
            <Mutation mutation={ADD_NOTE}>
                {addNote => {
                    this.addNote = addNote;
                    return (<Editor onSave={this._onSave}/>)
                }}
            </Mutation>
        );
    }
}

export default Add;
