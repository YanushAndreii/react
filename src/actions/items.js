import {ITEMS_FETCH_DATA_SUCCESS} from './actionType'

export function itemsFetchDataSuccess(payload) {
    return {
        type: ITEMS_FETCH_DATA_SUCCESS,
		payload
    };
}

export function itemsFetchData(url) {
    return (dispatch) => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items)));
    };
}
