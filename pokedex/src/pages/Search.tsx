import React, { useEffect } from 'react'
import Wrapper from '../sections/Wrapper';
import { useAppDispatch } from '../app/hooks';
import { getInitialpokemonData } from '../app/reducers/getinitialData';
import { useSelector } from 'react-redux';
import { getPokemonData } from '../app/reducers/getPokemonData';
import PokemonCardGrid from '../components/PokemonCardGrid';
import { genericPokemonType } from '../utils/Types';
import { debounce } from '../utils/Debounce';


const Search = () => {
  const dispatch = useAppDispatch()

  const  {allPokemon,randomPokemons}  = useSelector(({pokemon}) => pokemon)

  useEffect(()=>{
    dispatch(getInitialpokemonData())
  },[dispatch])

  useEffect(()=>{
    if(allPokemon){
      const clonedPokemons = [...allPokemon];
      const randomPokemon = clonedPokemons.sort(() => Math.random() - Math.random()).slice(0,20);
      dispatch(getPokemonData(randomPokemon))
    }
  },[allPokemon,dispatch])

  const handleChange = debounce((value:string) => getPokemon(value),300)
  
  const getPokemon = async(value:string) => {
    if(value.length){
      const pokemons = allPokemon?.filter((pokemon:genericPokemonType) => 
      pokemon.name.includes(value.toLowerCase())
      );
      dispatch(getPokemonData(pokemons))
    }else{
      const clonedPokemons = [...(allPokemon as [])];
      const randomPokemon = clonedPokemons.sort(() => Math.random() - Math.random()).slice(0,20);
      dispatch(getPokemonData(randomPokemon))
    }
  }
  return (
    <>
      <div className="search">
        <input type='text' className='pokemon-searchbar' placeholder='Search Pokemon'
        onChange={(e) => handleChange(e.target.value)}/>
        <PokemonCardGrid pokemons={randomPokemons!}/>
      </div>
    </>
  )
}

export default Wrapper(Search)
