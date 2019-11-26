
import React, { Component } from 'react';

class ImageSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idNumber: 112
    }
  }
  render(){
    const {idNumber} = this.state;
    return(
      <div className="item">
        <img src={`https://picsum.photos/id/${idNumber}/960/540`} alt="free image"/>
      </div>
    );
  }
}

export default ImageSection;