import { IChuckNorrisState } from ".";
import { chuckNorrisTypes } from "../actions/chuck-norris.actions";


const initialState: IChuckNorrisState = {
  joke: `Chuck Norris doesn't save his programs, his computer is too afraid to forget them`,
  proccessingNewJoke: false
}

export const chuckNorrisReducer = (state = initialState, action) => {

  switch (action.type) {
    case chuckNorrisTypes.JOKE_UPDATE:
      return {
        ...state,
        joke: action.payload.joke,
        proccessingNewJoke: false
      }  
    case chuckNorrisTypes.PROCESSING_NEW_JOKE: 
      return {
        ...state,
        proccessingNewJoke: true
      }
    default:
      break;
  }

  return state;
}