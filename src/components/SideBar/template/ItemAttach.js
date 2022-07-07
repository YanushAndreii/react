import React, { useState } from 'react';


// restructuring into a multi-level array
const itemsSort = (items) => {
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
	return attachWalker(0)
}

// build multi level attachment list
const itemsAttachView = (items) => {
	return (<ul>
		{items.map(item => {
				let children = '';
				if(typeof item.children === 'object' && item.children.length > 0){
					children = itemsAttachView(item.children);
				}
				return <li key={item.id}>{item.label}{children}</li>;
			}
		)}
	</ul>);
}

const ItemAttach = (props) => {

	const [items, setItems] = useState(null);

	if(items === null){
		setItems(itemsSort(props.items));
		return 'Prepare attachment...'
	}

	return itemsAttachView(items);

	// or shorter:
	// return itemsAttachView(itemsSort(props.items));
}

export default ItemAttach;
