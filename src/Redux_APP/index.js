import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux'

import Counter from './components/Counter'
import CounterReducer from './reducers/Counter'

// import App from './App';
import registerServiceWorker from './Redux/registerServiceWorker';

const store = createStore(CounterReducer)

const render = () => ReactDOM.render(
		<Counter
		value = { store.getState() }
		increment = { () => store.dispatch({ type: 'INCREMENT' }) } 
		decrement = { () => store.dispatch({ type: 'DECREMENT'}) } />
		, document.getElementById('root'))

render()
store.subscribe(render)
registerServiceWorker()
