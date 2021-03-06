import { useEffect, useState } from "react"
import { connect } from "react-redux"

import { editTodo } from "../../actions"

function mapDispatchToProps(dispatch) {
	return {
		editTodo: (content) => dispatch(editTodo(content)),
	}
}

function ConnectedEdit({ index, initialValue, editTodo }) {
	const [editting, setEditting] = useState(false)
    const [value, setValue] = useState(initialValue)

	const editTodoHandler = () => {
		console.log(`Edit this todo ${index}`)
		setEditting(!editting)
	}
    const handleSubmit = (event) => {
        event.preventDefault()
		editTodo({value, index})
		setEditting(false)
    }

	useEffect(() => {
		setValue(initialValue)
	}, [initialValue])

	return (
		<>
			<span onClick={editTodoHandler}>✏️</span>
			{editting && (
				<form onSubmit={handleSubmit}>
					<div>
						<input
							placeholder="Add todo"
							type="text"
							id="title"
							value={value}
							onChange={e => setValue(e.target.value)}
						/>
					</div>
					<button type="submit">Update</button>
				</form>
			)}
		</>
	)
}

const Edit = connect(null, mapDispatchToProps)(ConnectedEdit)
export default Edit