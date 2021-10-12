import { createReducer, on } from '@ngrx/store';
import { addNewSongAction, addSongToPlaylistAction } from './actions';
import { initialState } from './state';

export const _songsReducer = createReducer(
  initialState,
  on(
    addNewSongAction,
    (currentState, theSong) => (currentState = add(theSong))
  ),
  on(
    addSongToPlaylistAction,
    (currentState, theSelectedSong) =>
      (currentState = addToPlaylist(theSelectedSong))
  )
);

export function songsReducerFunction(state, action) {
  return _songsReducer(state, action);
}

function add(theSong) {}
function addToPlaylist(theSelectedSong) {}
