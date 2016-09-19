import { FETCH_ARTICLES, FETCH_ARTICLE } from './kb-actions';


const INITIAL_STATE = { count: 0, term: '', filtered: [], article: null };

export default function(state = INITIAL_STATE, action){
	switch(action.type){
		case FETCH_ARTICLE:
			return { ...state, article: action.payload.data.article };
		case FETCH_ARTICLES:
			return { ...state, 
					 filtered: action.payload.data.articles, 
					 count: action.payload.data.count, 
					 term: action.payload.data.term 
					};
		default:
			return state;
	}
}