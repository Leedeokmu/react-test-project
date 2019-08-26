import React, { Component } from 'react';
import {HashRouter, Route} from "react-router-dom";
import client from './apolloClient'
import { ApolloProvider } from '@apollo/react-hooks';

class App extends Component{
    render (){
        return (
            <ApolloProvider client={client}>
                <HashRouter>
                    <Route exact={true} path={"/"} component/>
                </HashRouter>
            </ApolloProvider>
        );
    }
}

export default App;
