import { combineReducers } from "redux";
import { clickerReducer } from "./clicker.reducer";
import { chuckNorrisReducer } from "./chuck-norris.reducer";

export interface IClickerState {
  clicks: number
}

export interface IChuckNorrisState {
  joke: string,
  proccessingNewJoke: boolean
}

export interface IState {
  clicker: IClickerState,
  chuckNorris: IChuckNorrisState
}

export const state = combineReducers<IState>({
  clicker: clickerReducer,
  chuckNorris: chuckNorrisReducer
})