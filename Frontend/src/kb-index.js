import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import SearchBar from './search-bar';
import Paginator from './paginator';

import { fetchArticles } from './kb-actions';




class KbIndex extends Component{

	componentWillMount(){
		this.search('');
	}

	search(term, page){
		this.props.fetchArticles(term,page);
	}

	onChangePage(page) {
		this.props.fetchArticles(this.props.term,page);		
    }

	renderArticles() {
		return this.props.kbArticles.map((article)=>{
			return(

				<div className="row" key={article._id}>
				  <div className="col-sm-12">
				    <div className="card card-block">
				      <h3 className="card-title"><span className="tag tag-info">{article.ticket}</span> {article.title} </h3>
				      <p className="card-text">{article.issue}</p>
				      <Link to={"article/" + article._id} className="btn btn-primary" > View </Link>
				    </div>
				  </div>
				</div>
				
			);
		});
	}
	renderPaginator(){
		if(this.props.count > 10)
			return <Paginator max={_.round(this.props.count/10 )}  onChange={this.onChangePage.bind(this)} />
	}

	render(){
		const search = _.debounce((term)=> { this.search(term,1) }, 300);
		return(
				<div>
					<nav  className="navbar navbar-light bg-faded">
					  
					  <ul className="nav navbar-nav">
				   		<Link to="/article/create" className="btn btn-primary m-b-1 pull-xs-right">
							Add an Article
						</Link>
					  </ul>
					</nav>
			      	<div className="jumbotron">
        				<SearchBar onSearchTermChange={search} />
      				</div>
      				
					{this.renderArticles()}
					
					{this.renderPaginator()}
					
				</div>
			);
	}

}

function mapStateToProps(state){
	return { 
			kbArticles: state.filtered,
			count: state.count,
			term: state.term
	 };
}

export default connect(mapStateToProps, { fetchArticles })(KbIndex);
