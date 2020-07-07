import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { useTheme } from './hoc/theme/useTheme';

import Landing from './layout/landing/landing.container';
import Singlebook from './layout/singleBook/singlebook.container';
import NavBar from './layout/navbar/navbar.component';
import Edit from './layout/singleBook/edit/edit.container';
import Images from './layout/singleBook/images/images.container';
import NewBook from './layout/addBook/newbook.container';

const App = () => {
	let { state, handleClick } = useTheme();

	return (
		<div className={[ 'app', state ? 'app-white' : 'app-black' ].join(' ')}>
			<Provider store={store}>
				<BrowserRouter>
					<NavBar state={state} handleClick={handleClick} />
					<Switch>
						<Route exact path="/" component={Landing} />
						<Route exact path="/add-book" component={NewBook} />
						<Route exact path="/page-:pageNumber([0-9]+)" component={Landing} />
						<Route exact path="/book/:id" component={Singlebook} />
						<Route path="/book/edit/:id" component={Edit} />
						<Route path="/book/images/:id" component={Images} />
					</Switch>
				</BrowserRouter>
			</Provider>
		</div>
	);
};

export default App;
