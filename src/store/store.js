import { createStore } from 'easy-peasy';
import { userData } from '../actions/userModel';
import { blogData } from '../actions/blogModel';

const combineStore = {
	userData,
	blogData,
};

export const store = createStore(combineStore);
