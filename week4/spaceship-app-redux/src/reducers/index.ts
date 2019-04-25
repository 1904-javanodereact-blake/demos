import { combineReducers } from "redux";
import { clickerReducer } from "./clicker.reducer";
import { chuckNorrisReducer } from "./chuck-norris.reducer";
import { User } from "../model/user";
import { authReducer } from "./auth.reducer";

export interface IClickerState {
  clicks: number
}

export interface IChuckNorrisState {
  joke: string,
  proccessingNewJoke: boolean
}

export interface IAuthState {
  currentUser?: User,
  errorMessage?: string
} 

export interface IState {
  clicker: IClickerState,
  chuckNorris: IChuckNorrisState,
  auth: IAuthState
}

export const state = combineReducers<IState>({
  clicker: clickerReducer,
  chuckNorris: chuckNorrisReducer,
  auth: authReducer
})