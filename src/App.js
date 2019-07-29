import React, {Component} from 'react';

const MAX_PIZZAS = 20;

class Controlled extends  Component{
    state = {
        pizzas: 10
    }

    render() {
        const {pizzas} = this.state;
        return (
            <button onClick={this._handleClick}>{`I have eaten ${pizzas} ${pizzas === 1 ? "pizza" :" pizzas"}`}</button>
        );
    }
    _handleClick = () => {
        this.setState(this._eatPizza);
    };

    _eatPizza = (state, props) => {
        const {pizzas} = state;
        return pizzas < MAX_PIZZAS ? {pizzas: pizzas + 1} : null;
    };

}
class App extends Component{
  render() {
    return (
        <Controlled/>
    );
  }
}

export default App;
