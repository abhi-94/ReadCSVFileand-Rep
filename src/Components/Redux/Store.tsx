import LoadedDataReducer from "./Reducer";
import { createStore } from "redux";

export const store = createStore(LoadedDataReducer)