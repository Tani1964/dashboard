import { createContext, useContext} from "react";

export const StateContext = createContext();

export const useStateContext = () => useContext(StateContext);

export const InitialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};