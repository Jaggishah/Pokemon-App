import React from 'react'
import { useAppSelector } from '../../app/hooks'
import PokemonContainer from '../../components/PokemonContainer'

const Description = () => {
    const pokemonData = useAppSelector(({pokemon:{currentPokemon}}) => currentPokemon)
  return (
    <div>
      <PokemonContainer/>
    </div>
  )
}

export default Description
