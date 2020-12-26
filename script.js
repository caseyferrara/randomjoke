function fetchJoke() {
	fetch('https://official-joke-api.appspot.com/random_joke').then(response => {
		if (!response.ok) {
			throw Error('ERROR');
		}
		return response.json();
	}).then(jokes => {

		document.querySelector('#jokes')
			.innerHTML += 
			`<div class='joke'>
				<h1>Type: ${jokes.type}</h1>
				<p>${jokes.setup}</p>
				<p>${jokes.punchline}</p>
				<button onClick="window.location.reload();">New Joke</button>
			</div>
			`;
	}).catch(error => {
		console.log(error);
	});
}

fetchJoke();