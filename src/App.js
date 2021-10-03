import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
	return (
		<div className="app">
			<Nav />
			<Banner />
			<Row title="NETFLIX ORIGINALS" isLargeRow fetchUrl={requests.getNetflixOriginals} />
			<Row title="Trending" fetchUrl={requests.getTrending} />
			<Row title="Top Rated" fetchUrl={requests.getTopRated} />
			<Row title="Action Movies" fetchUrl={requests.getActionMovies} />
			<Row title="Comedy Movies" fetchUrl={requests.getComedyMovies} />
			<Row title="Horror Movies" fetchUrl={requests.getHorrorMovies} />
			<Row title="Romance Movies" fetchUrl={requests.getRomanceMovies} />
			<Row title="Documentaries" fetchUrl={requests.getDocumentaries} />
		</div>
	);
}

export default App;
