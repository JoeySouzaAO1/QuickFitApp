import React from 'react';
import { Box, useMediaQuery} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Logo from './Logo';
import { VerticalNavBars } from './VerticalNavBars';
import UserIcon from './UserIcon';
import { ExtraInfo } from './ExtraInfo';
import ExercisePath from './ExercisePath';
import { useTheme } from '@mui/material/styles';
import { HorizontalNavBar } from './HorizontalNavBar';


const LandingPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Changed to 'md' for a wider range

  return (
    <Box sx={{ 
      height: '100vh', 
      width: '100vw', 
      display: 'flex', 
      flexDirection: 'column', 
      overflow: 'hidden'
    }}>
      <Grid container sx={{ padding: isMobile ? '10px' : '20px' }}>
        <Grid xs={6} md={3}>
          <Logo />
        </Grid>
        <Grid xs={6} md={3} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <UserIcon />
        </Grid>
      </Grid>
      <Box sx={{ 
        display: 'flex', 
        flexGrow: 1,
        overflow: 'hidden'
      }}>
        {isMobile ? <HorizontalNavBar /> : <VerticalNavBars />}
        <Box sx={{ 
          flexGrow: 1, 
          height: '100%',
          // width: isMobile ? '100%' : 'calc(100% - 700px)', 
          width: '100%',
          // minWidth: '300px',
          margin: isMobile ? '30px 0px 50px 0px' : '0 450px 0 350px', 
        }}>
          <ExercisePath />
        </Box>
        {!isMobile && <ExtraInfo />}
      </Box>
    </Box>
  );
};

export default LandingPage;
 


