import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../../actions/items';


class SideBar extends Component {
	componentDidMount() {
		this.props.fetchData('http://5af1eee530f9490014ead8c4.mockapi.io/items');
	}

	render() {
		// console.log('SideBar', this.props);
		return ( <div>{this.props.children}</div> );
	}
}

SideBar.propTypes = {
	fetchData: PropTypes.func.isRequired,
	items: PropTypes.array.isRequired
};

const mapDispatchToProps = (dispatch) => {
	return { fetchData: (url) => dispatch(itemsFetchData(url)) };
};

const mapStateToProps = (state) => {
	return {
		items: state.items,
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
