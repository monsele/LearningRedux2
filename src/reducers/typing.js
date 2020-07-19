import { SET_TYPING_VALUE,SEND_MESSAGE } from "../constants/action-types";
export default function wee(state = "", action) {
  switch (action.type) {
    case SET_TYPING_VALUE:
      return action.payload;
      case SEND_MESSAGE:
        return '';
    default:
      return state;
  }
}