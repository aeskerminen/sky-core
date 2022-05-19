import { AppBar, Toolbar } from '@mui/material';
import Typography from '@mui/material/Typography';

function Appbar() {
    return (
        <AppBar style={{position: 'relative'}}>
          <Toolbar variant="dense">
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 3,
              fontFamily: 'monospace',
              fontWeight: 500,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
            >
            MAA10 5.2
          </Typography>
          </Toolbar>
        </AppBar>
    );
}

export default Appbar;