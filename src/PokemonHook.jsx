import { useEffect, useState } from "react";


export default function PokemonHook(){


	//  [variable, function to set variable] = useState(initial data);
	let [pokemon, setPokemon] = useState({});

	let [someExampleState, setSomeExampleState] = useState("hello world");
	
	// Don't do setState in top level of function 
	// setPokemon("whatever we want");

	// componentDidMount
	// runs at the start or on the first render of this component
	// useEffect((), []) is equivalent to componentDidMount
	// because the dependency array is empty 
	useEffect(() => {
		// setPokemon({name:"Pikachu"});


		// async operations and promises must be executed inside
		// a new async block/scope within the useEffect callback 
		let fetchData = async () => {
			let apiResponse = await fetch("https://pokeapi.co/api/v2/pokemon/25");
			let apiData = await apiResponse.json();

			setPokemon(apiData);
		}

		fetchData();
	}, []);


	// componentDidUpdate 
	useEffect(() => {
		console.log("pokemon was updated");
	}, [pokemon]);


	// componentDidUnMount
	useEffect(() => {

		return (() => {
			console.log("PokemonHook going away now...");
		});
	}, []);




	function someFunction() {
		console.log("blah blah")
	}

	if (pokemon.name){
		console.log("yes data to show");
		return (
			<div>
				<h1>{someExampleState}</h1>
				<h1>{pokemon.name}</h1>
			</div>
		)
	} else {
		console.log("no data to show");
		return (
			<div>No data to show...</div>
		)
	}
}