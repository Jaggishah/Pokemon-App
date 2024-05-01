import React, { useEffect } from 'react'
import Wrapper from '../sections/Wrapper';
import { useAppDispatch } from '../app/hooks';
import { getInitialpokemonData } from '../app/reducers/getinitialData';
import { useSelector } from 'react-redux';
import { getPokemonData } from '../app/reducers/getPokemonData';

const Search = () => {
  const dispatch = useAppDispatch()

  const  {allPokemon}  = useSelector(({pokemon}) => pokemon)
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
  return (
    <div>
      Search
    </div>
  )
}

export default Wrapper(Search)
