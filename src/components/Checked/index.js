import { connect } from '../../hoc/connect'

import { switchCompleted } from "../../actions"

function mapDispatchToProps(dispatch) {
	return {
		switchCompleted: (index) => dispatch(switchCompleted(index)),
	}
}

function ConnectedChecked ({index, switchCompleted, completed}){
    const handleClick = () => {
		switchCompleted(index)
	}
    return (<span onClick={handleClick} className={completed ? 'completed true' : 'completed'}></span>)
}

const Checked = connect(null, mapDispatchToProps)(ConnectedChecked)

export default Checked