import { combineReducers } from "redux";

import login from "./login";

import nombre from "./nombre";

import dataCategorie from "./dataCategorie";

export default combineReducers( { login, nombre, dataCategorie } ) ;
