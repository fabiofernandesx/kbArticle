import React, { Component } from 'react';



export default class Article extends Component{

	constructor(props){

		super(props);

		this.state = { title: '' };
	}

	onInputChange(field, value){

		this.setState({[field]:value});
		//this.props.onSearchTermChange(term);
		console.log(field, value);
	}

	render(){
		if(!this.props.article){
			return <div>Loading...</div>
		}	
		const article = this.props.article;
		return(
			<div> 

				<div className="row">
					<div className="title-head col-custom col-xs-2"> Title: </div>
					<div className="col-custom col-xs-4">  
						<input type="text" name="title"
							value={ this.state.title } 
							onChange={ event => this.onInputChange( event.target.name, event.target.value ) }  /> 
					</div>
					<div className="title-head col-custom col-xs-2"> Audience: </div>
					<div className="col-custom col-xs-4"> {article.audience} &nbsp; </div>
				</div>
				<div className="row">
					<div className="title-head col-custom col-xs-2"> Applies to: </div>
					<div className="col-custom col-xs-4"> {article.apliesTo} &nbsp; </div>
					<div className="title-head col-custom col-xs-2"> Keyword/Tag: </div>
					<div className="col-custom col-xs-4"> {article.ticket} &nbsp; </div>
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