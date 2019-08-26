import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import client from './apolloClient'
import { ApolloProvider } from '@apollo/react-hooks';
import Home from './Home'
import Detail from './Detail'
import {GlobalStyle} from "./globalStyles";

class App extends Component{
    render (){
        return (
            <Fragment>
                <GlobalStyle/>
                <ApolloProvider client={client}>
                     <Router>
                        <Route exact={true} path={"/"} component={Home}/>
                        <Route path={"/details/:movieId"} component={Detail}/>
                    </Router>
                </ApolloProvider>
            </Fragment>
        );
    }
}

export default App;
