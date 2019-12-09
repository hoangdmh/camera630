import React, { Component } from 'react';

// Component
import Header from './components/header-section';
import ImageSection from './components/image-section';
import EffectSettings from './components/footer-section';

//Style
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idNumber: 122,
      status: false,
      blur: 0,
      brightness: 1,
      saturate: 1
    }
  }

  handleChangeImage = () => {
    this.setState((state) => {
      return {idNumber: state.idNumber + 1}
    });
  }

  getValueInput = (event) => {
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
      brightness: null,
      saturate: null
    });
  }

  render(){
    return (
      <>
        <div className="App">
          <Header></Header>
          <ImageSection 
            handleChangeImage={this.handleChangeImage}
            idNumber={this.state.idNumber}
          >
          </ImageSection>
          <EffectSettings 
            effectSettings={this.getValueInput}
            handleReset={this.handleReset}
            {...this.state}
          >
          </EffectSettings>
        </div>
      </>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <Header></Header>
//       <ImageSection></ImageSection>
//       <EffectSettings effectSettings={this.configSetting}></EffectSettings>
//     </div>
//   );
// }

export default App;