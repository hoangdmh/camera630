
import React, { Component } from 'react';

class BlurSection extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="col-4">
        <div className="row">
          <div className="col-6">blur():</div>
          <div className="col-6">
            <input
              className="custom-range"
              name="blur"
              type="range" step="1" min="0" max="10"
              value={blur}
              onChange={this.props.effectSettings}>
            </input>
          </div>
        </div>
      </div>
    );
  }
}

export default BlurSection;