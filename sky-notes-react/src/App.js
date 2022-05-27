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
            <Box sx={{backgroundColor: 'DarkGray', m:0, p:0, height: '100vh' }}>
            </Box>
          </Grid>
          <Grid item xs={10}>
              <Box sx={{backgroundColor: 'Gray', m:0, p:0, height: '100vh' }}>
              <Stack direction="row" spacing={0}>
                <Box sx={{backgroundColor: 'DimGray', p:1, minWidth: '5%'}}>Box 1</Box>
                <Box sx={{backgroundColor: 'Gray', p:1, minWidth: '5%'}}>Box 1</Box>
                <Box sx={{backgroundColor: 'Gray', p:1, minWidth: '5%'}}>Box 1</Box>
              </Stack>
                <Box sx={{backgroundColor: 'DimGray', m:0, p:1, height: '94.25%' }}>
                  {/* <RTField xs={{m:2}}></RTField> */}
                  <DrawField xs={{m:2}}></DrawField>
                </Box>
              </Box>
          </Grid>
        </Grid>
    );
  }
}

export default App;