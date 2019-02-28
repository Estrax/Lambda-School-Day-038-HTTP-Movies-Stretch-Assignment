import React from 'react';
import axios from 'axios';
export default class MovieCreate extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		if (!this.state.movie) {
			return <div>Loading...</div>;
		}

		return (
			<div>
				<h1>OK</h1>
			</div>
		);
	}
}
