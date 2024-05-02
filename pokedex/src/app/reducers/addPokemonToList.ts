import { createAsyncThunk } from "@reduxjs/toolkit";
import { pokemonStatType, pokemonTypeInterface,pokemonStatsType, userPokemonTypes } from "../../utils/Types";
import { RootState } from "../store";
import { setToast } from "../slices/AppSlice";
import { addDoc } from "firebase/firestore";
import { pokemonListRef } from "../../utils/firebaseConfig";

export const addPokemonToList = createAsyncThunk("pokemon/addPokemon", async (pokemon:{
    id:number;
    name: string;
    types:pokemonTypeInterface[] | string[]
    stats?:pokemonStatsType[]
},
{ getState, dispatch}
) => {
    try{
        const {app:{userInfo},pokemon:{userPokemons}} = getState() as RootState;
        if(!userInfo?.email){
            return dispatch(setToast("please login in order to add pokemon in your collection.."))
        }
        const index = userPokemons.findIndex((userPokemon:userPokemonTypes) => {
            return userPokemon.name === pokemon.name;
        });
        if ( index === -1){
            let types: string[] = [];
            types = pokemon.types as string[];
            await addDoc(pokemonListRef,{
                pokemon : {id:pokemon.id,name:pokemon.name,types}
            })

            return dispatch(setToast(`${pokemon.name} added to your collection.`))
        }else{
            return dispatch(setToast(`${pokemon.name} already part of your collection.`))
        }
    }catch(err){
        console.log(err)
    }
})