import React, { useState } from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

const MovieCreate = props => {
	const [movie, setMovie] = useState({title: '', director: '', metascore: 0, stars: []});

	return (
		<div className="save-wrapper">
			<form
				className="movie-card"
				onSubmit={(e) => {
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
				<h2 className="card-title">Add new movie</h2>

				<h4>Title:</h4>
				<input 
					type="text"
					name="title"
					onChange={(e) => setMovie({...movie, title: e.target.value})}
					value={movie.title}
				/>
				
				<h4>Director:</h4>
				<input
					type="text"
					name="director"
					onChange={(e) => setMovie({...movie, director: e.target.value})}
					value={movie.director}
				/>
				
				<h4>Metascore:</h4>
				<input
					type="number"
					name="metascore"
					onChange={(e) => setMovie({...movie, metascore: e.target.value})}
					value={movie.metascore}
				/>
				<h4>Stars:</h4>
				<p>Use comma (,) to separate the people.</p>
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
		</div>
	);
}

export default withRouter(MovieCreate);
