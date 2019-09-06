/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
import { Provider } from 'react-redux'
import Main from './composer/Main'
import store from './composer/system/Store'

export default class App extends Component {

	render() {
		return(
			<Provider store={store}>
				<Main />
			</Provider>
		)
	}
}


