import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { fetchArticle, deleteArticle } from './kb-actions';

import _ from 'lodash';


class KbArticle extends Component{

	static contextTypes = {
		router: PropTypes.object
	};
	
	componentWillMount(){
		this.props.fetchArticle(this.props.params.id);
	}

	onDeleteClick(){
		this.props.deleteArticle(this.props.params.id)
		.then(()=>{
			this.context.router.push('/');
		});
	}
	render(){
		if(!this.props.article){
			return <div>Loading...</div>
		}	
		const article = this.props.article;

		return(

			<div> 
				<nav  className="navbar navbar-light bg-faded">					  
				  <ul className="nav navbar-nav">
				  <div className="btn-group" role="group" aria-label="First group">
				  	<Link to="/" className="btn btn-secondary"> Back to search </Link>		
					<Link to={`/article/update/${article._id}`} className="btn btn-secondary"> Edit Article </Link>	
				  </div>				  
				  
				  	<button onClick={this.onDeleteClick.bind(this)}	className="btn btn-danger pull-xs-right m-b-1">	Delete Article </button>
				  </ul>
				</nav>	

				<div className="row">
					<div className="title-head col-custom col-xs-2"> Title: </div>
					<div className="col-custom col-xs-6"> {article.title} &nbsp; </div>
					<div className="title-head col-custom col-xs-2"> Audience: </div>
					<div className="col-custom col-xs-2"> {article.audience} &nbsp; </div>
				</div>
				<div className="row">
					<div className="title-head col-custom col-xs-2"> Applies to: </div>
					<div className="col-custom col-xs-6"> {article.apliesTo} &nbsp; </div>
					<div className="title-head col-custom col-xs-2"> Keyword/Tag: </div>
					<div className="col-custom col-xs-2"> {article.ticket} &nbsp; </div>
				</div>			
				<div className="row">
					<div className="title-head col-custom col-xs-12"> Short Description of the issue: </div>
				</div>	
				<div className="row">
					<div className="col-custom col-xs-12"> {article.issue} &nbsp; </div>					
				</div>	
				<div className="row">
					<div className="title-head col-custom col-xs-12"> Known errors/Root Cause: </div>
				</div>	
				<div className="row">
					<div className="col-custom col-xs-12"> {article.root} &nbsp; </div>					
				</div>	
				<div className="row">
					<div className="title-head col-custom col-xs-12"> Prerequisites: </div>
				</div>	
				<div className="row">
					<div className="col-custom col-xs-12"> {article.prereqs} &nbsp; </div>					
				</div>	
				<div className="row">
					<div className="title-head col-custom col-xs-12"> Solution: </div>
				</div>	
				<div className="row">
					<div className="col-custom col-xs-12"> {article.solution} &nbsp; </div>					
				</div>	
				<div className="row">
					<div className="title-head col-custom col-xs-2"> Creation date: </div>
					<div className="col-custom col-xs-4"> {article.dateCreated} &nbsp; </div>
					<div className="title-head col-custom col-xs-2"> Modified date: </div>
					<div className="col-custom col-xs-4"> {article.dateModified} &nbsp; </div>
				</div>	
				<div className="row">
					<div className="title-head col-custom col-xs-2"> Created by: </div>
					<div className="col-custom col-xs-4"> {article.author} &nbsp; </div>
					<div className="title-head col-custom col-xs-2"> Review by: </div>
					<div className="col-custom col-xs-4"> {article.revisors} &nbsp; </div>
				</div>	
				<div className="row">
					<div className="title-head col-custom col-xs-2"> Review Date: </div>
					<div className="col-custom col-xs-4"> {article.reviewDate} &nbsp;  </div>
					<div className="title-head col-custom col-xs-2"> Revision #: </div>
					<div className="col-custom col-xs-4"> {article.reviewNumber} &nbsp; </div>
				</div>	


			 </div>			
		);
	}
}

function mapStateToProps(state){
	return { article: state.article };
}

export default connect(mapStateToProps, { fetchArticle, deleteArticle })(KbArticle);
