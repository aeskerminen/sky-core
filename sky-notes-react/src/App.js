import * as React from 'react';
import {useEffect, useState} from "react";

import { Box, Typography, Stack } from '@mui/material';
import Grid from '@mui/material/Grid';

import RTField from './rt_field';
import SplashScreen from './SplashScreen'

const App = () => {
  
  // Loading state 
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
  
    // Wait for 3 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

return isLoading ? 
  <SplashScreen></SplashScreen> :
  (
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
              <Box sx={{backgroundColor: 'white', m:0, p:1, height: '94.25%' }}>
                <RTField xs={{m:2}}></RTField>
              </Box>
            </Box>
        </Grid>
      </Grid>
  );
}

export default App;

