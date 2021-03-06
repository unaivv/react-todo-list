import { ADD_TODO, SWITCH_COMPLETED, EDIT_TODO, DELETE_TODO } from "../constants/action-types";

export function addTodo(payload) {
	return { type: ADD_TODO, payload }
}

export function switchCompleted(payload) {
	return { type: SWITCH_COMPLETED, payload }
}

export function editTodo(payload) {
	return { type: EDIT_TODO, payload }
}

export function deleteTodo(payload){
	return {type: DELETE_TODO, payload}
}