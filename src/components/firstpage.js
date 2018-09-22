import React, { Component } from 'react';
import GridGroup from './gridgroup';

const Firstpage = () => {
	return (
	
	<div className="uk-section-muted uk-preserve-color">


   
	<div className="uk-position-relative uk-visible-toggle uk-light" data-uk-slideshow="animation: fade; autoplay: true;  autoplay-interval: 5900; ratio: 10:4">
	
	    <ul className="uk-slideshow-items">
	        <li>
	        <div className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
	            <img src="/src/img/home_image1.jpg" alt="" data-uk-cover/>
	        </div>
	        </li>
	        <li>
	         <div className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-top-right">
	            <img src="/src/img/home_image2.jpg" alt="" data-uk-cover/>
	        </div>
	        </li>
	        <li>
	        <div className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-bottom-left">
	            <img src="/src/img/home_image3.jpg" alt="" data-uk-cover/>
	        </div>
	        </li>
	    </ul>

    <div className="uk-overlay uk-position-center-right uk-position-small">
                <h3 className="uk-margin-remove">✔ Choose your desired dishes</h3>
                <p className="uk-margin-remove">We will make everything else</p>
                <p data-uk-margin>
                	<button className="uk-button uk-button-default">Choose menu</button>
    				<button className="uk-button uk-button-primary">Contact</button>
                </p>
    </div>


 

    <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-previous data-uk-slideshow-item="previous"></a>
    <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-next data-uk-slideshow-item="next"></a>




</div>

<GridGroup />



  
		 
</div>
	);
}  

export default Firstpage;