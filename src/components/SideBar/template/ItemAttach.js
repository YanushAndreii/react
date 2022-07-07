import React, { Component, PropTypes } from 'react';
import { connect, useSelector } from 'react-redux';


class ItemAttach extends Component {

	constructor(props) {
		super(props);
	}

	itemsSort(items){
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

	itemsAttachView(items){
		return <ul>
			{items.map(item => {
					let children = '';
					if(typeof item.children === 'object' && item.children.length > 0){
						children = this.itemsAttachView(item.children);
					}
					return <li key={item.id}>{item.label}{children}</li>;
				}
			)}
		</ul>
	}

	render() {
		const generatedItems = this.itemsSort(this.props.items);
		const itemsAttach = this.itemsAttachView(generatedItems);

		return (
			<div>
				<hr/>
				{ itemsAttach }
			</div>
		);
	}
}

ItemAttach.propTypes = {
	items: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({items: state.items});

export default connect(mapStateToProps)(ItemAttach);
