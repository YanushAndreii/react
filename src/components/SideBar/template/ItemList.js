import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class ItemList extends Component {

    render() {
        return (
				<ul>
					{this.props.items.map((item) => (
						<li key={item.id}>
							{item.label}
						</li>
					))}
				</ul>
        );
    }
}

ItemList.propTypes = {
    items: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
	return {
		items: state.items,
	};
};

export default connect(mapStateToProps)(ItemList);
