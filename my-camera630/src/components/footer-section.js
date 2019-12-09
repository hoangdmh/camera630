import React, { Component } from 'react';

class EffectSettings extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   status: false,
    //   blur: 0,
    //   brightness: 0
    // }
  }

  // getValueBlur = (event) => {
  //   const target = event.target;
  //   const value = target.value;
  //   const name = target.name;

  //   this.setState({
  //     status: true,
  //     [name]: value
  //   });
  // }

  // handleReset = (e) => {
  //   e.preventDefault();
  //   this.setState({
  //     status: false,
  //     blur: null,
  //     brightness: null
  //   });
  // }

  render() {
    //const { blur, brightness } = this.state;
    const { status, blur, brightness } = this.props;
    console.log('{...this.state} => ', this.props);
    return (
      <>
        <style jsx global>
          {`
            .item img {
              -webkit-filter: blur(${blur}px);
                filter: blur(${blur}px);
            }
            .item img {
              filter: brightness(${brightness});
            }

          `}
        </style>

        <div className="container mt-5">
          <div className="text-center">
            <h2>{status ? '-webkit-filter' : ''} {blur} {brightness} </h2>
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
                    value={blur}
                    onChange={this.props.effectSettings}>
                  </input>
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
                    value={brightness}
                    onChange={this.props.effectSettings}
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
            <button type="button" className="btn btn-primary" onClick={this.props.handleReset}>Reset</button>
          </div>
        </div>
      </>
    );
  }
}

export default EffectSettings;