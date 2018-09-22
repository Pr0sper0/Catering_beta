import React, { Component } from 'react';
import Firstpage from './firstpage';
import SecondPage from './secondpage';
import Navbar from './navbar';
import GridGroup from './gridgroup';

export default class App extends Component {
  render() {
    return (
      <div >
        <div id="cover">
        
            <div className="uk-position-relative">
           
              <Firstpage />
  
                <div className="uk-position-top">
                  <Navbar style="color:red;background-color:black;font-weight:bold;"/>
                </div>
                
              <SecondPage />
            </div>
        </div>
      </div>
    );
  }
}



      {/*
      <div id="cover">
        <div id="cover-caption">
          <div className="container">

            <div className="col-sm-10 col-sm-offset-1">
              <h1>Choose your desired dishes</h1>
              <p>We will make everything else</p>
            </div>
          </div>
        </div>
      </div>
      */}