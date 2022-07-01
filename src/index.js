import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import ItemList from './components/SideBar/template/ItemList';
import ItemAttach from "./components/SideBar/template/ItemAttach";
import SideBar from "./components/SideBar/SideBar";

const store = configureStore();
console.log('store',store)
render(
    <Provider store={store}>
		<SideBar>
			<ItemList />
			<ItemAttach />
		</SideBar>

    </Provider>,
    document.getElementById('app')
);
