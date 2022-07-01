import { combineReducers } from 'redux';
import { items } from './items';
import {itemsAttach} from "./itemsAttach";

export default combineReducers({
    items,
	itemsAttach
});
