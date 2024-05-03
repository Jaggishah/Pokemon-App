import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { genericPokemonType } from '../../utils/Types';
import { getPokemonData } from '../../app/reducers/getPokemonData';
import PokemonCardGrid from '../../components/PokemonCardGrid';

const Evolution = () => {
    const dispatch = useAppDispatch();
    const [isLoaded, setIsLoaded ] = useState(false)
    const { currentPokemon,randomPokemons } = useAppSelector(({pokemon}) => pokemon)
    useEffect(() => {
        const fetchData = async () => {
          const pokemons: genericPokemonType[] =
            currentPokemon!.evolution.map(
              ({ pokemon }: { pokemon: genericPokemonType }) => pokemon
            );
          await dispatch(getPokemonData(pokemons));
          setIsLoaded(true);
        };
        fetchData();
      }, [dispatch, currentPokemon]);
  return (
    <div className='page'>
      {isLoaded ? (
        <PokemonCardGrid pokemons={randomPokemons!} />
      ) : (
        <>loading</>
      )}
    </div>
  )
}

export default Evolution
