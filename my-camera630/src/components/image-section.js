
import React, { Component } from 'react';

class ImageSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idNumber: 112
    }
  }
  handleChangeImage = (e) => {
    e.preventDefault();
    this.setState({
      idNumber: this.state.idNumber + 1,
    });
  }
  render(){
    const {idNumber} = this.state;
    return(

      <div className="item">
        <div className="text-right mb-3">
          <button type="button" class="btn btn-primary" onClick={this.handleChangeImage}>Change Image</button>
        </div>
        <img src={`https://picsum.photos/id/${idNumber}/720/405`} alt="image" />
      </div>
    );
  }
}

export default ImageSection;