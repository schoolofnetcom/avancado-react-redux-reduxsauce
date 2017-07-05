import { combineReducers } from 'redux'
import configureStore from './CreateStore'

export default () => {
	const rootReducer = combineReducers({
		hello: require('./HelloRedux').reducer,
		counter: require('./CounterRedux').reducer
	})

	return configureStore(rootReducer)
}