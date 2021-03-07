import React from "react"
import { connect } from '../../hoc/connect'

import Todo from '../Todo'

import "./styles.css"

const mapStateToProps = (state) => {
	return { 
        todos: state.todos
    }
}

const ConnectedList = ({ todos }) => {
	return (
		<>
			{todos.length === 0 && "There is no TODOs here. Add one here ⬇️"}
			<ul>
				{todos.map((el, index) => (
					<Todo key={index} el={el} index={index} />
				))}
			</ul>
		</>
	)
}

const List = connect(mapStateToProps)(ConnectedList)

export default List
