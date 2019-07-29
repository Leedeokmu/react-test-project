import React, {Component, Fragment} from 'react';
import {createPortal} from 'react-dom';

const BoundaryHOC = ProtectedComponent =>{
  return class Boundary extends Component {
    state = {
      hasError: false
    };
    componentDidCatch = (error, errorInfo) => {
      this.setState({
        hasError: true
      });
    };
    render() {
      const {hasError} = this.state;
      if(hasError){
        return <ErrorFallback/>;
      }else{
        return <ProtectedComponent/>;
      }
    }
  }
}

class ErrorMaker extends Component {
  state = {
    friends: [
      'jisu', 'dal', 'fm', 'sisu'
    ]
  };
  componentDidMount = () => {
    setTimeout(() => {
          this.setState({
            friends: undefined
          })
        }, 2000
    );
  };

  render() {
    const {friends} = this.state;
    return friends.map(friend => ` ${friend} `);
  }
}
const PErrorMaker = BoundaryHOC(ErrorMaker);

class Portals extends  Component{
  render() {
    return (
        createPortal(
            <Message/>,
            document.getElementById('touchme')
        )
    );
  }
}
const EPortals = BoundaryHOC(Portals);

const Message = () => 'just touched it!';

class ReturnTypes extends Component {
  render() {
    return (
        "Hello"
    );
  }
}

const ErrorFallback = () => 'Sorry something went wrong!';

class App extends Component{
  render() {
    return (
        <Fragment>
          <ReturnTypes/>
          <EPortals />
          <PErrorMaker />
        </Fragment>
    );
  }
}

export default BoundaryHOC(App);
