// this is the state before any actions occur
// reducers are handlers

import playerImage from '../../../assets/images/players/player1.png';

import {
  ADD_PLAYER,
  DELETE_PLAYER,
  SELECT_PLAYER,
  DESELECT_PLAYER
} from '../actions/actionTypes';

const initialState = {
  players: [],
  selectedPlayer: null
};

//  will accept two arguments:
// 1st: the old state so we can update it
// 2nd: the action we got because the reducer function will be executed when we receive an action
// setting 'state' equal to initialState sets the default value; if we don't have an initial state, it just starts with this one
// in Redux we never directly manipulate the old state, we return a brand new state -- inside the return is the new object state... this is immutability
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLAYER:
      return {
        ...state,
        players: state.players.concat({
          key: Math.random(),
          name: action.playerName,
          image: playerImage
        })
      };
    case DELETE_PLAYER:
      return {
        ...state,
        players: state.players.filter(player => {
          return player.key !== state.selectedPlayer.key
        }),
        selectedPlayer: null
      };
    case SELECT_PLAYER:
      return {
        ...state,
        selectedPlayer: state.players.find(player => {
          return player.key === action.playerKey;
        })
      };
    case DESELECT_PLAYER:
      return {
        ...state,
        selectedPlayer: null
      };
    default:
      return state;
  }
};

export default reducer;
