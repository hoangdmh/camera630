import React, { Component } from 'react';
import InputRange from 'react-input-range';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      blur: null,
      brightness: null
    }
  }

  getValueBlur = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      status: true,
      [name]: value
    });
  }

  handleReset = (e) => {
    e.preventDefault();
    this.setState({
      status: false,
      blur: null,
      brightness: null
    });
  }

  render() {
    const { blur, brightness } = this.state;
    return (
      <>
        <style jsx global>
          {`
            .item img {
              -webkit-filter: blur(${blur} ${brightness}px);
                filter: blur(${blur}${brightness}px);
            }
          `}
        </style>

        <div className="container mt-5">
          <div className="text-center">
            <h2>{this.state.status ? '-webkit-filter' : ''} {blur} {brightness} </h2>
          </div>
          <div className="row mb-4">
            <div className="col-4">
              <div className="row">
                <div className="col-6">blur():</div>
                <div className="col-6">
                  <input
                    className="custom-range"
                    name="blur"
                    type="range" step="1" min="0" max="10" defaultValue="0"
                    value={this.state.blur}
                    onChange={this.getValueBlur}
                  />
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="row">
                <div className="col-6">brightness():</div>
                <div className="col-6">
                  <input 
                    className="custom-range" 
                    name="brightness"
                    type="range" step="0.1" min="0" max="10" defaultValue="0"
                    value={this.state.brightness}
                    onChange={this.getValueBlur}
                  />
                </div>
              </div>
            </div>
            {/* <div className="col-4">
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