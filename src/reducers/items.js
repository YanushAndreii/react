import {ITEMS_FETCH_DATA_SUCCESS} from '../actions/actionType'

export function items(state = [], action) {
    switch (action.type) {
		case ITEMS_FETCH_DATA_SUCCESS:
            return action.payload;

        default:
            return state;
    }
}
