import React from 'react';
import { Segment, Input, Header } from 'semantic-ui-react';

class Slider extends React.Component {
	state = { value: '0' };
	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	render() {
		let { value } = this.state;
		return (
			<Segment textAlign="center">
				<Header color="blue" as="h3">
					ConsultNet Spread:
				</Header>
				<Header color="green" as="h3">
					{value}
				</Header>
				<Input
					name="value"
					onChange={this.handleChange}
					value={value}
					type="range"
					min="0"
					max="20000"
					step="100"
				/>
			</Segment>
		);
	}
}

export default Slider;
