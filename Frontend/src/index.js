import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import App from './App';
import KbIndex from './kb-index';
import KbArticle from './kb-article';
import KbCreate from './kb-create';
import KbUpdate from './kb-update';

import reducers from './kb-reducer';

import './index.css';


const createStoreWithMiddleware = applyMiddleware( promise )( createStore );


ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<Router history={hashHistory}>
			<Route path="/" component={App} > 
				<IndexRoute component={ KbIndex } />		
				<Route path="article/create" component={ KbCreate } />
				<Route path="article/:id" component={ KbArticle } />			
				<Route path="article/update/:id" component={ KbUpdate } />
			</Route>
		</Router>
	</Provider>
  , 
  document.getElementById('root')
);
