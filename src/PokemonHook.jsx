import { useState } from "react";


export default function PokemonHook(){


	//  [variable, function to set variable] = useState(initial data);
	let [pokemon, setPokemon] = useState({});

	let [someExampleState, setSomeExampleState] = useState("hello world");
	

	return (
		<div>
			<h1>{someExampleState}</h1>
			<h1>{pokemon.name}</h1>
		</div>
	)
}