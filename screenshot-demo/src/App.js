import React, { Component } from 'react';
import './App.css';
import html2canvas from 'html2canvas';

class App extends Component {

  handleClick () {
    html2canvas(document.body).then(function(canvas) {
      var img = canvas.toDataURL('image/png'); // base64
      console.log(img);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={require('./download.png')} alt="logo" />
          <div>
            <button onClick={this.handleClick}>Click to screenshot</button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
