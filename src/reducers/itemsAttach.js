import {ITEMS_ATTACH_SORT_SUCCESS} from '../actions/actionType'

export function itemsAttach(state = [], action) {
	switch (action.type) {
		case ITEMS_ATTACH_SORT_SUCCESS:
			return action.payload;

		default:
			return state;
	}
}
