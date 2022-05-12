import * as React from 'react';

import Menubutton from './menu_button';
import LatexField from './latex_field';
import DrawField from './draw_field';
import RTField from './rt_field';


class App extends React.Component {
  render() {
    return (
      <div>
        <Menubutton></Menubutton>
        <LatexField></LatexField>
        <LatexField></LatexField>
        <DrawField></DrawField>
        <RTField></RTField>
      </div>
    );
  }
}

export default App;