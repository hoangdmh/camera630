import React from 'react';

// Component
import Header from './components/header-section';
import ImageSection from './components/image-section';
import Footer from './components/footer-section';

//Style
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <ImageSection></ImageSection>
      <Footer></Footer>
    </div>
  );
}

export default App;