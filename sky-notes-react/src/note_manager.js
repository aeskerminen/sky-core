import { Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import FormControlLabel from '@mui/material/FormControlLabel';
import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));  


function NoteManager() {
   return (
    <Box
    position="absolute"
    minHeight="75%"
    width="35%"
    backgroundColor="white"
    left="32.5%"
    top="15%"
    boxShadow="5px 5px 10px grey"
    padding="10px"
    >
        <Grid container spacing={1} >
            <Grid item justifyContent="flex-end" container>
              <Item>
                <Button variant="contained" style={{display: 'block'}}>X</Button>
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item>
                <TreeView
                  aria-label="file system navigator"
                  defaultCollapseIcon={<ExpandMoreIcon />}
                  defaultExpandIcon={<ChevronRightIcon />}
                  sx={{ height: 340, flexGrow: 1, maxWidth: 500, overflowY: 'auto', overflowX: 'hidden' }}
                  >
                    <TreeItem nodeId="1" label="Applications">
                      <TreeItem nodeId="2" label="Calendar" />
                    </TreeItem>
                    <TreeItem nodeId="5" label="Documents">
                      <TreeItem nodeId="10" label="OSS" />
                      <TreeItem nodeId="6" label="MUI">
                        <TreeItem nodeId="8" label="index.js" />
                      </TreeItem>
                    </TreeItem>
                </TreeView>
              </Item>
            </Grid>
        </Grid>
        <div style={{display: 'inline-block'}}>
            
        </div>
        
    </Box>
   );
}

export default NoteManager;