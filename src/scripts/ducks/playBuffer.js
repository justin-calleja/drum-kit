// Actions
const BUFFER_KEY_CODE = 'drum-kit/playBuffer/BUFFER_KEY_CODE';
const CLEAR_BUFFER = 'drum-kit/playBuffer/CLEAR_BUFFER';

// Reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case BUFFER_KEY_CODE:
      return state.includes(action.keyCode) ? state : state.concat([action.keyCode]);

    case CLEAR_BUFFER:
      return [];

    default: return state;
  }
}

// Action Creators
export function bufferKeyCode(keyCode) {
  return { type: BUFFER_KEY_CODE, keyCode };
}

export function clearBuffer() {
  return { type: CLEAR_BUFFER };
}
