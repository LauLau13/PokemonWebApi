import pokemonApi from '../api/pokemonApi'
import { Pokemon } from '../interfaces/pokemon';

const getPokemonsG2 = (): number[] => {
    const pokemonsArrG2 = Array.from( Array(650) );
    return pokemonsArrG2.map( ( _ , index ) => index + 1 );
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
        { name: p0.data.name, id: p0.data.id },
        { name: p1.data.name, id: p1.data.id },
        { name: p2.data.name, id: p2.data.id },
        { name: p3.data.name, id: p3.data.id },
        { name: p4.data.name, id: p4.data.id },
        { name: p5.data.name, id: p5.data.id },
        { name: p6.data.name, id: p6.data.id },
        { name: p7.data.name, id: p7.data.id },
        { name: p8.data.name, id: p8.data.id },
        { name: p9.data.name, id: p9.data.id },
    ]

}

const getPokemonNamesG2 = async() => {

    const mixedPokemons = getPokemonsG2()
                            .sort( () => Math.random() - 0.5 );
    
    const pokemons = await getPokemonsArrayG2( mixedPokemons.splice(0, 10) );

    return pokemons;

}

export default getPokemonNamesG2;