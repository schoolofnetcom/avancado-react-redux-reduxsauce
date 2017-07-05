import React, { Component } from 'react'
import { Provider } from 'react-redux'
import createStore from './../Redux'
import Counter from './../Components/Counter'

const store = createStore()


class App extends Component {
	render() {
		return(
			<Provider store = {store}>
				<Counter />
			</Provider>
		)
	}
}

export default App