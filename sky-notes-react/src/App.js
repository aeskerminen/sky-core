import * as React from 'react';

import { Box, Typography, Stack, Button } from '@mui/material';
import Grid from '@mui/material/Grid';

import RTField from './rt_field';
import DrawField from './draw_field';

class App extends React.Component {
  render() {
    return (
        <Grid container spacing={0}>
          <Grid item xs={2}>
            <Box sx={{backgroundColor: '#b3e5fc', m:0, p:0, height: '100vh' }}>
              <Stack>
                <Box sx={{backgroundColor: '#01579b', mt:0.5, mb: 0.25, ml: 0.5, mr: 0.5, p:0.5 }}>
                  <div>
                    <Button style={{maxHeight: '25px', minWidth: '100%'}} variant="contained" size="small">MAA12 Kpl 2.1</Button>
                  </div>
                </Box>
              </Stack>
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