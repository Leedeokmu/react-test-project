import React, {Component} from 'react';
import AppPresenter from "./AppPresenter";
import Store from 'store';

class AppContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            notifications:{
                '1': {
                    id:1,
                    text: 'Something',
                    seen: false
                },'2': {
                    id:2,
                    text: 'Something else',
                    seen: false
                },'3': {
                    id:3,
                    text: 'Something else but different',
                    seen: false
                },
            },
            deleteNotification: this._deleteNotification,
            seeNotifications: this._seeNotificaiton
        }
    }
    _deleteNotification = (id) => {
        this.setState((currentState) => {
            let newState = delete currentState.notifications[id];
            return newState;
        });
    }
    _seeNotificaiton = (id) => {
        this.setState(currentState => {
            return {
                ...currentState,
                notifications:{
                    ...currentState.notifications,
                    [id]:{
                        ...currentState.notifications[id],
                        seen: true
                    }
                }
            }
        })
    };


    render() {
        return (
            <Store.Provider value={this.state}>
                <AppPresenter/>
            </Store.Provider>
        );
    }
}

export default AppContainer;
