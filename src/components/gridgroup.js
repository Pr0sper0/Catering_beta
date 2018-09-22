import React, { Component } from 'react';

var bgColors = { "Default": "#81b71a",
                    "Blue": "#00B1E1",
                    "Cyan": "#37BC9B",
                    "Green": "#8CC152",
                    "Red": "#E9573F",
                    "Yellow": "#F6BB42",
};

const GridGroup = () => {
	return(
        <div className="uk-height-large  uk-flex uk-flex-center@m uk-flex-middle uk-flex-wrap-stretch uk-margin-small" >
        
        <div className="uk-overlay uk-overlay-default uk-width-1-1"   style={{backgroundColor:'rgba(212, 242, 212, 0.3)'}}  >
      
            <div className="uk-grid-small uk-child-width-expand@s uk-text-center" id="Card-group" data-uk-grid>

<div >

        
    
    <div className="uk-card uk-card-hover  uk-width-1-1@m"  style={{backgroundColor:'rgba(212, 242, 212, 0.01)'}}>
    <div className="uk-card-body ">
        <div className="uk-grid-large uk-flex-middle" data-uk-grid>
            <div className="uk-width-expand">
                <img className="uk-border-circle" width="140" height="140" src="/src/img/circle1.png"/>
            </div>

        </div>
        <h3>Health</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    </div>
    <div className="uk-card-footer">
        <a href="#" className="uk-button uk-button-text">Read more</a>
    </div>
	</div>
</div>



<div >
<div className="uk-overlay  uk-dark uk-position-center uk-text-center" style={{color: 'blue'}}>
                <h1 className="uk-text-success uk-text-top uk-margin-remove">Our privileges</h1>
	
</div>


    <div className="uk-card uk-card-hover uk-card-light  uk-width-1-1@m uk-margin-small-top" style={{backgroundColor:'rgba(212, 242, 212, 0.01)'}}>
    <div className="uk-card-body" >
        <div className="uk-grid-large uk-flex-middle" data-uk-grid>
            <div className="uk-width-expand">
                <img className="uk-border-circle" width="140" height="140" src="/src/img/circle1.png"/>
            </div>

        </div>
    
        <h3>Welness</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    </div>
    <div className="uk-card-footer">
        <a href="#" className="uk-button uk-button-text">Read more</a>
    </div>
	</div>
</div>

<div >
    <div className="uk-card uk-card-hover uk-width-1-1@m"  style={{backgroundColor:'rgba(212, 242, 212, 0.01)'}}>
    <div className="uk-card-body">
        <div className="uk-grid-large uk-flex-middle" data-uk-grid>
           
            <div className="uk-width-expand">
              <img className="uk-border-circle" width="140" height="140" src="/src/img/circle1.png"/>
            </div>

        </div>
    
        <h3>Flexible</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    </div>
    <div className="uk-card-footer">
        <a href="#" className="uk-button uk-button-text">Read more</a>
    </div>
	</div>
</div>
</div>
<br></br>


<div className="uk-card uk-card-default uk-flex-wrap-stretch uk-width-1-1@m">
    <div className="uk-card-header">
        <div className="uk-grid-small uk-flex-middle" data-uk-grid>
         {/**
            <div className="uk-width-auto">
                <img className="uk-border-circle" width="40" height="40" src="images/avatar.jpg"/>>
            </div>
            **/}
            <div className="uk-width-expand">
                <h3 className="uk-card-title uk-margin-remove-bottom">How it works</h3>
            </div>
        </div>
    </div>
    <div className="uk-card-body">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    </div>
    <div className="uk-card-footer">
        <a href="#" className="uk-button uk-button-text">Read more</a>
    </div>
</div>
</div>

    </div>

	);

} 

export default GridGroup