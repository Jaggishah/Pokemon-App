//@ts-nocheck
import React from 'react'
import { useAppSelector } from '../../app/hooks'
import Info from "../../components/info";
import PokemonContainer from '../../components/PokemonContainer'

const Description = () => {
    const pokemonData = useAppSelector(({pokemon:{currentPokemon}}) => currentPokemon)
  return (
    <div>
        <Info data={pokemonData}/>
      <PokemonContainer image={pokemonData?.image!}/>
    </div>
  )
}

export default Description
