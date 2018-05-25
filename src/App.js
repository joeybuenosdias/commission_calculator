import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Slider from './components/Slider';

class App extends Component {
	render() {
		return (
			<Container>
				<Slider />
			</Container>
		);
	}
}

export default App;
