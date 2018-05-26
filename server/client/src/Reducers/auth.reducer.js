import { SEND_EMAIL } from "./auth.reducer";

var initialState = {
  response: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEND_EMAIL:
      return {
        ...state,
        response: action.payload ? true : false
      };
    default:
      return state;
  }
}
