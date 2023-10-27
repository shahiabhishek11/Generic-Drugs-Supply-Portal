
import {createStore} from "redux";
import reducer from "./reducer";
const initialState={loggedin :false}
const myStore=createStore(reducer,initialState);

export default myStore;