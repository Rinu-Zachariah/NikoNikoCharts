import React from 'react';
import {Route,IndexRoute} from 'react-router';
import { HashRouter } from 'react-router-dom';
import App from './App';
import MainPage from './components/MainPage/MainPage.js';

export default(
	<HashRouter>
		 <Route exact path="/" component={App}>
		   <IndexRoute component={MainPage} />
		   <Route path="MainPage" component={MainPage} />
		 </Route>
	</HashRouter>
);