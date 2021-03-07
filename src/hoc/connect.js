import { Context } from "../context"

export function connect(mapStateToProps, mapDispatchToProps) {
	if (mapStateToProps) {
		return function (WrappedComponent) {
			return (props) => (
				<Context.Consumer>
					{({ store, setState }) => {
						const handleChange = () => {
							setState(store.getState())
						}
						store.subscribe(handleChange)
						return mapDispatchToProps ? (
							<WrappedComponent
								{...props}
								{...mapStateToProps(store.getState(), props)}
								{...mapDispatchToProps(store.dispatch, props)}
							/>
						) : (
							<WrappedComponent
								{...props}
								{...mapStateToProps(store.getState(), props)}
							/>
						)
					}}
				</Context.Consumer>
			)
		}
	} else {
		if (mapDispatchToProps) {
			return function (WrappedComponent) {
				return (props) => (
					<Context.Consumer>
						{({ store, setState }) => {
							const handleChange = () => {
								setState(store.getState())
							}
							store.subscribe(handleChange)
							return (
								<WrappedComponent
									{...props}
									{...mapDispatchToProps(
										store.dispatch,
										props
									)}
								/>
							)
						}}
					</Context.Consumer>
				)
			}
		} else {
			return function (WrappedComponent) {
				return (props) => <WrappedComponent {...props} />
			}
		}
	}
}
