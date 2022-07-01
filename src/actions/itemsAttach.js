import {ITEMS_ATTACH_SORT_SUCCESS} from './actionType'

export function itemsAttachSortSuccess(payload) {
	return {
		type: ITEMS_ATTACH_SORT_SUCCESS,
		payload
	};
}

export function itemsAttachSort(items){
	console.log('itemsAttachSort',items)
	return (dispatch) => {
		const attachWalker = (id) => {
			// get children list by parent id
			const groupByParent = items.filter(item => item.parent_id === id);
			// process child items
			const childList = groupByParent.map(({id, label, parent_id}) => ({id, label, parent_id, children: attachWalker(id)}));
			// finalising
			return (childList.length)
				? childList.map(
					({id, label, parent_id, children}) => children.length
						? {id, label, parent_id, children}
						: {id, label, parent_id})
				: [];
		}
		dispatch(itemsAttachSortSuccess(attachWalker(0)));
	}
}


