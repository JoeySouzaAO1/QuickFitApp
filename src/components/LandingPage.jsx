import React from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Logo from './Logo';
import {VerticalNavBars} from './VerticalNavBars';
import UserIcon from './UserIcon';
import {ExtraInfo} from './ExtraInfo';
import ExercisePath from './ExercisePath';

const LandingPage = () => {
  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column',
      paddingTop: '20px'
     }}>
      <Grid container>
        <Grid xs={3}>
          <Logo />
        </Grid>
        <Grid xs={6}>
          {/* Empty space */}
        </Grid>
        <Grid xs={3}>
          <UserIcon />
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        <VerticalNavBars />
        <ExercisePath />
        <ExtraInfo />
      </Box>
    </Box>
  );
};

export default LandingPage;



