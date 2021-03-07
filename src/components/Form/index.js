import React, { useState } from "react"
import { connect } from "../../hoc/connect"
import { addTodo } from "../../actions"

function mapDispatchToProps(dispatch) {
	return {
		addTodo: (todo) => dispatch(addTodo(todo)),
	}
}

const ConnectedForm = ({addTodo}) => {
	const [title, setTitle] = useState('')

	const handleChange = (event) => {
        setTitle(event.target.value)
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		addTodo({ title, completed: false })
		setTitle("")
	}
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    placeholder='Add todo'
                    type="text"
                    id="title"
                    value={title}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Create</button>
        </form>
    )
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm)

export default Form
