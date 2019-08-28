import React, {Component} from "react";
import styled from "styled-components";
import MarkdownRenderer from "react-markdown-renderer";
import TextareaAutosize from "react-textarea-autosize";

const TitleInput = styled.textarea`
  font-size: 40px;
  font-weight: 600;
  width: 100%;
`;


export default class Editor extends Component {
    render() {

        return (
            <>
                <TitleInput
                    placeholder={"Untitled...."}
                />
            </>
        );
    }
}
