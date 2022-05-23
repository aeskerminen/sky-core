import * as React from 'react';

import { Box, Typography, Stack } from '@mui/material';
import Grid from '@mui/material/Grid';


class App extends React.Component {
  render() {
    return (
        <Grid container spacing={0}>
          <Grid item xs={2}>
            <Box sx={{backgroundColor: 'lightBlue', m:1, p:1, height: '96.5vh' }}>
            </Box>
          </Grid>
          <Grid item xs={10}>
              <Box sx={{backgroundColor: 'lightBlue', m:1, p:1, height: '96.5vh' }}>
              <Stack direction="row" spacing={0}>
                <Box sx={{backgroundColor: 'gray', p:1, minWidth: '5%'}}>Box 1</Box>
                <Box sx={{backgroundColor: 'gray', p:1, minWidth: '5%'}}>Box 1</Box>
                <Box sx={{backgroundColor: 'gray', p:1, minWidth: '5%'}}>Box 1</Box>
              </Stack>
              <Box sx={{backgroundColor: 'white', m:0, p:0, height: '96%' }}></Box>
              </Box>
          </Grid>
        </Grid>
    );
  }
}

export default App;