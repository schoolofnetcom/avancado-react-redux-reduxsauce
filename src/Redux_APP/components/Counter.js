import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
	constructor(props) {
		super(props)
	}	
	render() {
		const { value, increment, decrement } = this.props

		return(
			<div>
				<button onClick={increment}>Increment</button>
				<button onClick={decrement}>Decrement</button>
				<p> { value } </p>
			</div>
		)
	}

}

Counter.PropTypes = {
	value: PropTypes.number.isRequired,
	increment: PropTypes.func.isRequired,
	decrement: PropTypes.func.isRequired,
}

export default Counter