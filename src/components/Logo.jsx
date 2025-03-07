
import React from 'react';
import { Box} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Logo = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // up to 600px
  const isMedium = useMediaQuery(theme.breakpoints.between('sm', 'md')); // 600px to 900px

  const getSize = () => {
    if (isMobile) return { width: 150, height: 50, padding: '10px', marginTop: '0px' };
    if (isMedium) return { width: 200, height: 55, padding: '10px 0 0px 10px', marginTop: '0px' };
    return { width: 300, height: 100, padding: '10px', marginTop: '25px' };
  };

  const { width, height, padding, marginTop } = getSize();
  return (
    <Box
      sx={{
        width,
        height,
        position: 'fixed',
        top: 0,
        left: 0,
        padding,
        marginTop
      }}
    >
      <img 
  src={`${import.meta.env.BASE_URL || '/'}QuickFit.png`} 
  alt="QuickFit Logo" 
  style={{ width: '100%', height: 'auto' }} 
/>


    </Box>
  );
};

export default Logo;