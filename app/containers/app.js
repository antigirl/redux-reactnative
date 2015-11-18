import React, { Component } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux/native';

import reducer from '../reducers';
import StarterPack from './starterpack';

const store = createStore(reducer);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                {() => <StarterPack/>}
            </Provider>
        );
    }
}
