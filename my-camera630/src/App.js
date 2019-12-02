import React, { Component } from 'react';

// Component
import Header from './components/header-section';
import ImageSection from './components/image-section';
import Footer from './components/footer-section';

//Style
import './App.css';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       blur: 0
//     }
//   }

//   render(){
//     return (
//       <>
//         <style jsx global>
//           {`
//             .item img {
//               -webkit-filter: blur(0px);
//                 filter: blur(0px);
//             }
//           `}
//         </style>
//         <div className="App">
//           <Header></Header>
//           <ImageSection></ImageSection>
//           <Footer></Footer>
//         </div>
//       </>
//     );
//   }
// }

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