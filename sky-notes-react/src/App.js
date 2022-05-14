import * as React from 'react';

import Menubutton from './menu_button';
import LatexField from './latex_field';
import DrawField from './draw_field';
import RTField from './rt_field';
import Appbar from './appbar';
import NoteManager from './note_manager';


class App extends React.Component {
  render() {
    return (
      <div>
        <Appbar></Appbar>
        <div>
          <Menubutton></Menubutton>
          <LatexField></LatexField>
          <LatexField></LatexField>
          <DrawField></DrawField>
          <RTField></RTField>
        </div>
        <div>
          <NoteManager></NoteManager>
        </div>
      </div>
    );
  }
}

export default App;