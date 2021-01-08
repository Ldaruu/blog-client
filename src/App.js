import './App.css';
import ArticlePage from './components/ArticlePage/ArticlePage';
import BlogPostCard from './components/BlogPostCard/BlogPostCard';

function App() {
	return (
		<div className='App'>
			<h1>Hello World!!!</h1>
			<ArticlePage />
			<BlogPostCard />
			<BlogPostCard />
		</div>
	);
}

export default App;
