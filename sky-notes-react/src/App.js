import * as React from 'react';
import ReactDOM from 'react-dom';

import Menubutton from './menu_button';
import LatexField from './latex_field';

class App extends React.Component {
  render() {
    return (
      <div>
        <Menubutton></Menubutton>
        <LatexField></LatexField>
        <LatexField></LatexField>
      </div>
    );
  }
}

export default App;