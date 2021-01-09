import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import ArticlePage from './components/ArticlePage/ArticlePage';
import LandingPage from './components/LandingPage/LandigPage';
import ArticleForm from './components/ArticleForm/ArticleForm';
import Wrapper from './components/Wrapper/Wrapper';

const App = () => {
	return (
		<Route path='/'>
			<Switch>
				<Wrapper>
					<Route exact component={LandingPage} path='/' />
					<Route exact component={ArticlePage} path='/article/:slug' />
					<Route exact component={ArticleForm} path='/edit/:slug' />
				</Wrapper>
			</Switch>
		</Route>
	);
};

export default App;
