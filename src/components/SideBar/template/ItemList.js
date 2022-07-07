import React from 'react';

const ItemList = (props) => (
		<ul>
			{props.items.map((item) => (
				<li key={item.id}>
					{item.label}
				</li>
			))}
		</ul>
    );


export default ItemList;
