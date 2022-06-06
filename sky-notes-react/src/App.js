import * as React from 'react';

import { Box, Typography, Stack } from '@mui/material';
import Grid from '@mui/material/Grid';

import RTField from './rt_field';
import DrawField from './draw_field';

class App extends React.Component {
  render() {
    return (
        <Grid container spacing={0}>
          <Grid item xs={2}>
            <Box sx={{backgroundColor: '#b3e5fc', m:0, p:0, height: '100vh' }}>

            </Box>
          </Grid>
          <Grid item xs={10}>
              <Box sx={{backgroundColor: '#4fc3f7', m:0, p:1, height: '97.7vh' }}>
                  <RTField xs={{m:2}}></RTField>
                </Box>
          </Grid>
        </Grid>
    );
  }
}

export default App;