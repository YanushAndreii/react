import React, { useState } from 'react';
import {ITEMS_SOURCE} from './constants';

import ItemList from './template/ItemList';
import ItemAttach from "./template/ItemAttach";

const SideBar = () => {

	const [items, setItems] = useState(null);

	if(items === null){
		fetch(ITEMS_SOURCE)
			.then((response) => {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				return response;})
			.then((response) => response.json())
			.then(items => 	{setItems(items)});

		return 'loading...';
	}

	if(typeof items !== 'object' || items.length === 0 ){
		console.error('List empty!');
		return;
	}

	return (
		<div>
			<ItemList items={items}/>
			<hr/>
			<ItemAttach items={items}/>
		</div>
	);

}


export default SideBar;
