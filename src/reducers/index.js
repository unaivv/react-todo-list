import { merge } from 'lodash'
import { ADD_TODO, SWITCH_COMPLETED, EDIT_TODO, DELETE_TODO } from "../constants/action-types"

const saveDataInLocal = (todos = []) => {
	localStorage.setItem('todos', JSON.stringify(todos));
}

const initialState = {
	todos: [],
}

function rootReducer(state = initialState, action) {
	let newState
	switch (action.type) {
		case ADD_TODO:
			newState = Object.assign({}, state, {
				todos: state.todos.concat(action.payload),
			})
			saveDataInLocal(newState.todos)
			return newState
		case SWITCH_COMPLETED:
			newState = merge({}, state)
			newState.todos[action.payload].completed = !newState.todos[action.payload].completed
			saveDataInLocal(newState.todos)
			return newState	
		case EDIT_TODO:
			newState = merge({}, state)
			newState.todos[action.payload.index].title = action.payload.value
			saveDataInLocal(newState.todos)
			return newState
		case DELETE_TODO:
			newState = merge({}, state)
			newState.todos.splice(action.payload, 1)
			saveDataInLocal(newState.todos)
			return newState
		default:
			return state
	}
}

export default rootReducer
