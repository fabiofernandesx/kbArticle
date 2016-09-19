import axios from 'axios';

export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const FETCH_ARTICLE = 'FETCH_ARTICLE';
export const CREATE_ARTICLE = 'CREATE_ARTICLE';
export const UPDATE_ARTICLE = 'UPDATE_ARTICLE';
export const DELETE_ARTICLE = 'DELETE_ARTICLE';

export const ROOT_URL = 'http://localhost:8000/api';

export function fetchArticles(term,page){

	const request = axios.post(`${ROOT_URL}/list`, {term:term, page:page});

	return {
		type: FETCH_ARTICLES,
		payload: request
	}
}
export function fetchArticle(id){

	const request = axios.get(`${ROOT_URL}/article/${id}`);

	return {
		type: FETCH_ARTICLE,
		payload: request
	}
}
export function createArticle(props){
	const request = axios.post(`${ROOT_URL}/create`, props);	

	return{
		type:CREATE_ARTICLE,
		payload: request
	}
}

export function updateArticle(props){
	const request = axios.put(`${ROOT_URL}/update`, props);	

	return{
		type:UPDATE_ARTICLE,
		payload: request
	}
}

export function deleteArticle(id){
	const request = axios.delete(`${ROOT_URL}/delete/${id}`);

	return{
		type:DELETE_ARTICLE,
		payload: request
	}
}