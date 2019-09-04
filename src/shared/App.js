import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {Home, About, Posts} from "../pages";
import Menu from "../components/Menu";

class App extends Component{
    state = {
        SplitMe: null
    };
    _handleClick = () => {
        import('../components/SplitMe').then(({default: SplitMe}) => {
            this.setState({
                SplitMe
            });
        });
    }

    render() {
        const {SplitMe} = this.state;
        return (
            <div>
                <Menu/>
                { SplitMe && <SplitMe/>}
                <button onClick={this._handleClick}>Click This!</button>
                <Route exact path="/" component={Home}/>
                <Route path="/posts" component={Posts}/>
                <Switch>
                    <Route path="/about/:name" component={About}/>
                    <Route path="/about" component={About}/>
                </Switch>
            </div>
        );
    }
}

export default App;
