import React, { useState } from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

const MovieCreate = props => {
	const [movie, setMovie] = useState({title: '', director: '', metascore: 0, stars: []});

	return (
		<form onSubmit={(e) => {
			e.preventDefault();
			axios
				.post('http://localhost:5000/api/movies', movie)
				.then(response => {
					props.history.push('/');
				})
				.catch(error => {
					console.error('Server Error', error);
				});
		}}>
			<input 
				type="text"
				name="title"
				onChange={(e) => setMovie({...movie, title: e.target.value})}
				value={movie.title}
			/>
			
			<input
				type="text"
				name="director"
				onChange={(e) => setMovie({...movie, director: e.target.value})}
				value={movie.director}
			/>
			
			<input
				type="number"
				name="metascore"
				onChange={(e) => setMovie({...movie, metascore: e.target.value})}
				value={movie.metascore}
			/>

			<input
				type="text"
				name="stars"
				onChange={(e) => setMovie({...movie, stars: e.target.value.split(",")})}
				value={movie.stars}
			/>

			<input
				type="submit"
				value="Add new movie"
			/>
		</form>
	);
}

export default withRouter(MovieCreate);
