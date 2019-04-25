import { IClickerState } from ".";
import { clickerTypes } from "../actions/clicker.actions";
import { chuckNorrisTypes } from "../actions/chuck-norris.actions";


const initialState: IClickerState = {
  clicks: 20
}

export const clickerReducer = (state = initialState, action) => {
  switch (action.type) {
    case clickerTypes.CLICKER_UPDATE:
      return {
        ...state,
        clicks: state.clicks + action.payload.amount
      } 
    case chuckNorrisTypes.JOKE_UPDATE:
      return {
        ...state,
        clicks: state.clicks - 10
      }
    default:
      break;
  }
  return state;
}