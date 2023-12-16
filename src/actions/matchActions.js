// src/actions/matchActions.js
export const ADD_MATCH = 'ADD_MATCH';
export const EDIT_MATCH = 'EDIT_MATCH';
export const DELETE_MATCH = 'DELETE_MATCH';
export const LOAD_MATCHES = 'LOAD_MATCHES';

export const addMatch = (match) => ({
  type: ADD_MATCH,
  payload: match,
});

export const editMatch = (match) => ({
  type: EDIT_MATCH,
  payload: match,
});

export const deleteMatch = (matchId) => ({
  type: DELETE_MATCH,
  payload: matchId,
});

export const loadMatches = (matches) => ({
  type: LOAD_MATCHES,
  payload: matches,
});
