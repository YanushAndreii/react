import React, { Component, PropTypes } from 'react';
import { connect, useSelector } from 'react-redux';
import {itemsAttachSort} from "../../../actions/itemsAttach";

class ItemAttach extends Component {

	componentDidUpdate(){
		/**
		 * Этот костыль позволяет однократно создать вложенную структуру.
		 * Нужно доработать так что бы при мзменении основного items, запучкалась пересборка itemsAttach
		 */
		if(this.props.items.length > 0 && this.props.itemsAttach.length === 0){
			this.props.attachSort(this.props.items);
		}
	}

	render() {

		return (
			<div>
				<hr/>
				{itemsAttachView(this.props.itemsAttach)}
			</div>
		);
	}
}

function itemsAttachView(items){

	return <ul>
		{items.map(item => {
				let children = '';
				if(typeof item.children === 'object' && item.children.length > 0){
					children = itemsAttachView(item.children);
				}
				return <li key={item.id}>{item.label}{children}</li>;
			}
		)}
	</ul>
}

ItemAttach.propTypes = {
	attachSort: PropTypes.func.isRequired,
	itemsAttach: PropTypes.array.isRequired,
	items: PropTypes.array.isRequired,
};

const mapDispatchToProps = (dispatch) => {
	return { attachSort: (items) => dispatch(itemsAttachSort(items)) };
};

const mapStateToProps = (state) => {
	return {
		items: state.items,
		itemsAttach: state.itemsAttach
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemAttach);
