import { createReducer, on } from '@ngrx/store';
import { addNewSongAction, addSongToPlaylistAction } from './actions';
import { initialState } from './state';

export const _songsReducer = createReducer(
  initialState,
  on(addNewSongAction, (currentState) => {
    return { ...currentState };
  }),
  on(addSongToPlaylistAction, (currentState) => {
    return { ...currentState };
  })
);

export function songsReducerFunction(state, action) {
  return _songsReducer(state, action);
}
