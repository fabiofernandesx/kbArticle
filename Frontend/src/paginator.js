import React, { Component } from 'react';

export default class Paginator extends Component{

	constructor(props){

		super(props);

		this.state={ currentPage: 1 };
	}
    componentDidUpdate(prevProps, prevState) {
        if (prevState.currentPage !== this.state.currentPage) {
            this.props.onChange(this.state.currentPage);
        }
    }

    goTo (page) {     
        this.setState({currentPage: page});
    }

    onClickNext() {
        var page = this.state.currentPage;

        if (page < this.props.max) {
            this.goTo(page + 1);
        }
    }

    onClickPrev() {
        if (this.state.currentPage > 1) {
            this.goTo(this.state.currentPage - 1);
        }
    }

	render(){

		const s = this.state;
		const p = this.props;
	    const visibleButtons = p.max > 4 ? 5 : p.max;
	    var skip = 0;

        if (s.currentPage > visibleButtons - 1 && s.currentPage < p.max) {
            skip = s.currentPage - visibleButtons + 1;
        } else if (s.currentPage === p.max) {
            skip = s.currentPage - visibleButtons;
        }

        const iterator = Array.apply(null, Array(visibleButtons)).map(function(v, i) {
            return skip + i + 1;
        });

		return(

			<nav>
			  <ul className="pagination">
			    <li className={s.currentPage === 1 ? 'page-item disabled' : 'page-item'} 
			    	onClick={this.onClickPrev.bind(this)} >
			      <div className="page-link">
			        <span>&laquo;</span>
			        <span className="sr-only">Previous</span>
			      </div>
			    </li>
			     {iterator.map(function(page) {
                    return (
						<li key={page} 
							onClick={ this.goTo.bind(this, page)}
							className={s.currentPage === page ? 'page-item active' : 'page-item'}>
							<span className="page-link" >{page}</span>
						</li>
                    );
                  }, this)}
			    <li className={s.currentPage === p.max ? 'page-item disabled' : 'page-item'} 
			    	onClick={this.onClickNext.bind(this)}>
			      <div className="page-link">
			        <span>&raquo;</span>
			        <span className="sr-only">Next</span>
			      </div>
			    </li>
			  </ul>
			</nav>

			);
	}
}
