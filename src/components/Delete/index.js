import { connect } from "react-redux"

import { deleteTodo } from "../../actions"

function mapDispatchToProps(dispatch) {
	return {
		deleteTodo: (content) => dispatch(deleteTodo(content)),
	}
}

function ConnectedDelete({index, deleteTodo}){

    const handleClick = () => {
        console.log(`Vamos a borrar el todo con indice ${index}`)
        deleteTodo(index)
    }

    return (
        <>
            <span onClick={handleClick}>❌</span>
        </>
    )
}

const Delete = connect(null, mapDispatchToProps)(ConnectedDelete)

export default Delete