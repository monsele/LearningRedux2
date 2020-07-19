import { createStore } from "redux";
import reducer from "../reducers";
//import {contacts} from'../static-data.js';
//const initialState = { tech: "react" };
export  const store = createStore(reducer);


//the depedencies for static data file to work
//check the other example for the packages needed
