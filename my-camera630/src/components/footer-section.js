import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);

  }
  render(){
    return(
      <div class="container">
      <div class="row">
        <div class="col-4">
          <div class="row">
            <div className="col-6">blur():</div>
            <div className="col-6">
              <input type="range" class="custom-range" id="customRange1" />  
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="row">
            <div className="col-6">blur():</div>
            <div className="col-6">
              <input type="range" class="custom-range" id="customRange1" />  
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="row">
            <div className="col-6">blur():</div>
            <div className="col-6">
              <input type="range" class="custom-range" id="customRange1" />  
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Footer;