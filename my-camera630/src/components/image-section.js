
import React, { Component } from 'react';

class ImageSection extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     idNumber: 112
  //   }
  // }
  // handleChangeImage = () => {
  //   this.setState((state) => {
  //     return {idNumber: state.idNumber + 1}
  //   });
  // }
  
  render() {
    const idNumber = this.props.idNumber;

    return (

      <div className="item">
        <div className="text-right mb-3">
          <button type="button" className="btn btn-primary" onClick={this.props.handleChangeImage}>Change Image</button>
          <a 
            className="btn btn-primary ml-3" 
            href="/" 
            download={`https://picsum.photos/id/${idNumber}/720/405`}
          >
            Download image {this.props.idNumber}
          </a>
        </div>
        <img src={`https://picsum.photos/id/${idNumber}/720/405`} alt="image" />
      </div>
    );
  }
}

export default ImageSection;