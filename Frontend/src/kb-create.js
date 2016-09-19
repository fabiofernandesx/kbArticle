import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { createArticle } from './kb-actions';

class KbCreate extends Component{

	static contextTypes = {
		router: PropTypes.object
	};
	onSubmit(event){
		event.preventDefault();
		var date = new Date();
		var dateCreated = date.getFullYear() + '.' + ("0" + (date.getMonth() + 1)).slice(-2) + '.' + ("0" + date.getDate()).slice(-2);

		var toSend = { dateCreated: dateCreated, 
					   title:this.refs.title.value, audience:this.refs.audience.value, apliesTo:this.refs.apliesTo.value,
					   issue:this.refs.issue.value,	ticket:this.refs.ticket.value, root:this.refs.root.value,
					   prereqs:this.refs.prereqs.value, solution:this.refs.solution.value, author:this.refs.author.value
					 }

		this.props.createArticle(toSend)
		.then((result)=>{
			this.context.router.push(`/article/${result.payload.data.article._id}`);
		});
	}
	render(){
		return(
			<form onSubmit={this.onSubmit.bind(this)}> 
				<nav  className="navbar navbar-light bg-faded">					  
				  <ul className="nav navbar-nav">
				  	<Link to="/" className="btn btn-secondary pull-xs-left"> Cancel </Link>		
				  	<button type="submit" className="btn btn-primary pull-xs-right"> Save </button>
				  </ul>
				</nav>			
			<div>
				<div className="row">
					<div className="title-head col-custom col-xs-2"> Title: </div>
					<div className="field-custom col-xs-6">  
						<input type="text" ref="title" placeholder="Keep it concise" /> 
					</div>
					<div className="title-head col-custom col-xs-2"> Audience: </div>
					<div className="field-custom col-xs-2">  
						<input type="text" ref="audience" placeholder="End User, Tier 1, 2, 3" />
					</div>								
				</div>
				<div className="row">
					<div className="title-head col-custom col-xs-2"> Applies to: </div>
					<div className="field-custom col-xs-6">
						<input type="text" ref="apliesTo" placeholder="Software & version" />
					</div>
					<div className="title-head col-custom col-xs-2"> Keyword/Tag: </div>
					<div className="field-custom col-xs-2">
						<input type="text" ref="ticket" placeholder="Jira Ticket" />
					</div>
				</div>			
				<div className="row">
					<div className="title-head col-custom col-xs-12"> Short Description of the issue: </div>
				</div>	
				<div className="row">
					<div className="field-custom col-xs-12"> 
						<textarea ref="issue" placeholder="E.g. error text, workaround or permanent solution of issue." /> 
					</div>					
				</div>	
				<div className="row">
					<div className="title-head col-custom col-xs-12"> Known errors/Root Cause: </div>
				</div>	
				<div className="row">
					<div className="field-custom col-xs-12"> 
						<textarea ref="root" placeholder="Be as specific as possible, listing versions that are incompatible, patch numbers that are missing, etc." />
					</div>			
				</div>	
				<div className="row">
					<div className="title-head col-custom col-xs-12"> Prerequisites: </div>
				</div>	
				<div className="row">
					<div className="field-custom col-xs-12"> 
						<textarea ref="prereqs" placeholder="If specific access rights or specific skills are required to access a server or system to solve the issues, document that here." />
					</div>			
				</div>	
				<div className="row">
					<div className="title-head col-custom col-xs-12"> Solution: </div>
				</div>	
				<div className="row">
					<div className="field-custom col-xs-12"> 
						<textarea rows="3" ref="solution" placeholder="Be as specific as possible, including all steps that must be followed to resolve. If there are multiple possible solutions, include the one most likely to solve the issue first, and alternative ones second. If specific factors are identified as to why one solution works over the other, consider making multiple knowledgebase articles and defining criteria as part of the short description." />
					</div>			
				</div>					
				<div className="row">
					<div className="title-head col-custom col-xs-2"> Created by: </div>
					<div className="field-custom col-xs-10">  
						<input type="text" ref="author" placeholder="Author" />
					</div>	
				</div>						
			</div>

			</form>
		);
	}
}
export default connect(null, { createArticle })(KbCreate);