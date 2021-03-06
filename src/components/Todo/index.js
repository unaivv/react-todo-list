import Checked from '../Checked'
import Edit from '../Edit'
import Delete from '../Delete'

export default function Todo({el, index}) {
	return (
		<li className="item">
			<Checked completed={el.completed} index={index} />
			{el.title}
			<Edit initialValue={el.title} index={index} />
			<Delete index={index} />
		</li>
	)
}
