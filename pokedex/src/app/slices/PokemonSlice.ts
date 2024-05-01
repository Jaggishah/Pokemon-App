import { createSlice } from "@reduxjs/toolkit"
import { PokemonTypeInitialState } from "../../utils/Types"
import { getInitialpokemonData } from "../reducers/getinitialData";
import { getPokemonData } from "../reducers/getPokemonData";


const initialState: PokemonTypeInitialState = {
    allPokemon : undefined,
    randomPokemons : undefined,
}

export const PokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getInitialpokemonData.fulfilled, (state, action) => {
            state.allPokemon = action.payload;
        })
        builder.addCase(getPokemonData.fulfilled, (state,action) => {
            state.randomPokemons = action.payload
        })
    }
});

export const { } = PokemonSlice.actions;