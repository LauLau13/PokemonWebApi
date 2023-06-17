import pokemonApi from '../api/pokemonApi'
import { Pokemon } from '../interfaces/pokemon';

const getPokemonsG2 = (): number[] => {
    const pokemonsArrG2 = Array.from( Array(650) );
    return pokemonsArrG2.map( ( _ , index ) => index + 1 );
}

interface pokemonG2 {
    name : string;
    id : number;
    image : string;
}

const getPokemonsArrayG2 = async( pokemons: number[] ): Promise<Pokemon[]> => {
    if ( pokemons.length !== 10 ) throw 'Pokemons must be 10';
    const [ a,b,c,d,e,f,g,h,i,j ] = pokemons;

    const promiseArr = [
        pokemonApi.get(`/${ a }`),
        pokemonApi.get(`/${ b }`),
        pokemonApi.get(`/${ c }`),
        pokemonApi.get(`/${ d }`),
        pokemonApi.get(`/${ e }`),
        pokemonApi.get(`/${ f }`),
        pokemonApi.get(`/${ g }`),
        pokemonApi.get(`/${ h }`),
        pokemonApi.get(`/${ i }`),
        pokemonApi.get(`/${ j }`),
    ]
    
    const [ p0, p1, p2, p3, p4, p5, p6, p7, p8, p9 ] = await Promise.all( promiseArr )
    return [
        { name: p0.data.name, id: p0.data.id, image: p0.data.spirites.front_default },
        { name: p1.data.name, id: p1.data.id, image: p0.data.spirites.front_default },
        { name: p2.data.name, id: p2.data.id, image: p0.data.spirites.front_default },
        { name: p3.data.name, id: p3.data.id, image: p0.data.spirites.front_default },
        { name: p4.data.name, id: p4.data.id, image: p0.data.spirites.front_default },
        { name: p5.data.name, id: p5.data.id, image: p0.data.spirites.front_default },
        { name: p6.data.name, id: p6.data.id, image: p0.data.spirites.front_default },
        { name: p7.data.name, id: p7.data.id, image: p0.data.spirites.front_default },
        { name: p8.data.name, id: p8.data.id, image: p0.data.spirites.front_default },
        { name: p9.data.name, id: p9.data.id, image: p0.data.spirites.front_default },
    ]

}

async function getRandomPokemon(): Promise<Pokemon> {
    const random = Math.floor(Math.random() * 650) + 1;
    const res = await pokemonApi.get(`/${random}`);
    return {name: res.data.name, id: res.data.id, image: res.data.sprites.front_default} as Pokemon;
  }

const getPokemonNamesG2 = async() => {

    const mixedPokemons = getPokemonsG2()
                            .sort( () => Math.random() - 0.5 );
    
    const pokemons = await getPokemonsArrayG2( mixedPokemons.splice(0, 10) );
    console.log(pokemons);
    return pokemons;

}

export default {
    getPokemonNamesG2,
    getRandomPokemon
};