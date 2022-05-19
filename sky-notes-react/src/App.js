import * as React from 'react';

import Menubutton from './menu_button';
import LatexField from './latex_field';
import DrawField from './draw_field';
import RTField from './rt_field';
import Appbar from './appbar';
import NoteManager from './note_manager';
import { Paper } from '@mui/material';
import Grid from '@mui/material/Grid';


class App extends React.Component {
  render() {
    return (
      <div>
        <Appbar></Appbar>
        {/* <Menubutton></Menubutton> */}

        <Grid container spacing={0}>
          <Grid item xs={2}>
            <Paper elevation={5} style={{overflowY: 'auto', backgroundColor: 'cream'}} sx={{m:2, height: '91.5vh'}}>
            </Paper>
          </Grid>
          <Grid item xs={10}>
            <Paper elevation={5} style={{overflowY: 'auto', backgroundColor: 'cream'}} sx={{m:2, height: '91.5vh'}}>
              <RTField></RTField>
            </Paper>
          </Grid>
        </Grid>
        
      </div>
    );
  }
}

export default App;