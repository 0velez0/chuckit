import { ADD_PLAYER, DELETE_PLAYER, SELECT_PLAYER, DESELECT_PLAYER } from './actionTypes';


// these are all action creators

export const addPlayer = (playerName) => {
  return {
    type: ADD_PLAYER,
    playerName: playerName
  };
};

export const deletePlayer = () => {
  return {
    type: DELETE_PLAYER
  };
};

export const selectPlayer = (key) => {
  return {
    type: SELECT_PLAYER,
    playerKey: key
  };
};

export const deselectPlayer = () => {
  return {
    type: DESELECT_PLAYER
  };
};
