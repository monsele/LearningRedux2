import {
  SET_ACTIVE_USER_ID,
  SET_TYPING_VALUE,
  SEND_MESSAGE,
} from "../constants/action-types";
export const setActiveUserId = (id) => ({
  type: SET_ACTIVE_USER_ID,
  payload: id,
});

export const setTypingValue = (valueed) => ({
  type: SET_TYPING_VALUE,
  payload: valueed,
});

export const sendMessage = (message, userId) => ({
         type: SEND_MESSAGE,
         payload: {
           message,
           userId,
         },
       });
  
