import React from 'react';
import ReactDOM from 'react-dom';

import './main.css';

class Hello extends React.Component {
  render() {
    return <h1>Hello World 2</h1>
  }
}

ReactDOM.render(<Hello/>, document.getElementById('root'));
