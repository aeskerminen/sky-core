import * as React from 'react';
import ReactDOM from 'react-dom';

import Menubutton from './menu_button';
import LatexField from './latex_field';
import DrawField from './draw_field';


class App extends React.Component {
  render() {
    return (
      <div>
        <Menubutton></Menubutton>
        <LatexField></LatexField>
        <LatexField></LatexField>
        <DrawField></DrawField>
      </div>
    );
  }
}

export default App;