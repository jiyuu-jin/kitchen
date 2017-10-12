import React, {Component} from 'react';
import IndexPage from './index.js';

import {
	BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


const Header = () =>({

	render(){
		return(
			<div>
				<nav className="white" role="navigation">
					<div className="nav-wrapper container">
						<ul className="right hide-on-med-and-down">
							<li><Link className="black-text" to="/login/">Login</Link></li>
						</ul>

						<ul id="nav-mobile" className="side-nav">
							<li><Link className="black-text" to="/login/" href="#">Login</Link></li>
						</ul>
						<a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
					</div>
				</nav>
			</div>
		)
	},

	componentDidMount(){
	}

});

class MainLayout extends Component {

	constructor(props) {
		super()
	}

	render(){
		return(
		<Router>
			<div>
				<nav className="white" role="navigation">
					<div className="nav-wrapper container">
						<Link to="/" width="96px" id="logo-container" href="#">Kitchen</Link>
						<ul className="right hide-on-med-and-down">
							<li><Link to="/login/" className="black-text">Login</Link></li>
							<li><Link to="/food/" className="black-text">Food</Link></li>
							<li><Link className="black-text" to="/recipes/">Recipes</Link></li>
						</ul>

						<ul id="nav-mobile" className="side-nav">
							<li><Link to="/login/" className="bigger black-text">Login</Link></li>
							<li><Link to="/food/" className=" bigger black-text">Food</Link></li>
							<li><Link className="black-text" to="/recipes/">Recipes</Link></li>
						</ul>
						<a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons black-text">menu</i></a>
					</div>
				</nav>

				<div id="page-content" className="thebackground">
						<Switch>
							<Route exact name="index" path="/" component={IndexPage} />
						</Switch>
				</div>
			</div>
		</Router>
		)
	}

    componentDidMount(){
        $('.button-collapse').sideNav();
    }

}

export default MainLayout;
