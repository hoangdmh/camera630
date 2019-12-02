import React, { Component } from 'react';
import InputRange from 'react-input-range';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      blur: null,
    }
  }

  getValueBlur = (e) => {

    this.setState({
      status: true,
      blur: e.target.value
    });
  }

  handleReset = (e) => {
    e.preventDefault();
    this.setState({
      status: false,
      blur: null
    });
  }

  render() {
    const { blur } = this.state;
    return (
      <>
        <style jsx global>
          {`
            .item img {
              -webkit-filter: blur(${blur}px);
                filter: blur(${blur}px);
            }
          `}
        </style>

        <div className="container mt-5">
          <div className="text-center">
            <h2>{this.state.status ? '-webkit-filter' : ''} {blur}</h2>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="row">
                <div className="col-6">blur():</div>
                <div className="col-6">
                  <input
                    className="custom-range"
                    type="range" step="1" min="0" max="10" defaultValue="0"
                    value={this.state.blur}
                    onChange={this.getValueBlur}
                  />
                </div>
              </div>
            </div>
            {/* <div className="col-4">
              <div className="row">
                <div className="col-6">brightness():</div>
                <div className="col-6">
                  <input className="custom-range" type="range" step="0.1" min="0" max="10" />
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="row">
                <div className="col-6">saturate():</div>
                <div className="col-6">
                  <input className="custom-range" type="range" step="0.1" min="0" max="10" />
                </div>
              </div>
            </div> */}
          </div>

          <div className="text-center">
            <button type="button" class="btn btn-primary" onClick={this.handleReset}>Reset</button>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;