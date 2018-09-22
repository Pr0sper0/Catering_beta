import React, { Component } from 'react';


export default class Navbar extends Component {

	render () {

		return (
			
			<div data-uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light; top: 100" >

				<nav className="uk-navbar-container" data-uk-navbar>

				    <div className="uk-navbar-left" >
				    	<ul className="uk-navbar-nav">
				            <li className="uk-active"><a href="#">Active</a></li>
				            <li>
				                <a href="#">Parent</a>
				                <div className="uk-navbar-dropdown">
				                    <ul className="uk-nav uk-navbar-dropdown-nav">
				                        <li className="uk-active"><a href="#">Active</a></li>
				                        <li><a href="#">Item</a></li>
				                        <li className="uk-nav-header">Header</li>
				                        <li><a href="#">Item</a></li>
				                        <li><a href="#">Item</a></li>
				                        <li className="uk-nav-divider"></li>
				                        <li><a href="#">Item</a></li>
				                    </ul>
				                </div>
				            </li>
				            <li><a href="#">Item</a></li>
				        </ul>

				    </div>
				   </nav>
    		</div>

		);
	}
}