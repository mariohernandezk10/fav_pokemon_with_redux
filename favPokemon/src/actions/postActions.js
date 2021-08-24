import { FETCH_POSTS } from './types';

export const fetchAllPokemons = () => dispatch => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=251')
        .then(res => res.json())
        .then(main => main.results)
        .then(arrayOfPokemons => 
            dispatch({
            type: FETCH_POSTS,
            payload: arrayOfPokemons
            })
        )
}
// SIDE NOTE: TOO MANY ".then()" INSIDE THE FETCH WILL GIVE AN ERROR