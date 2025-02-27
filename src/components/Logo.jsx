/* import React from 'react';
import { Box } from '@mui/material';

const Logo = () => {
  return (
    <Box
      sx={{
        width: 300,
        height: 100,
        position: 'fixed',
        top: 0,
        left: 0,
        
        padding: '20px'
        // Add your logo styling here
      }}
    >
<img src="/QuickFit.png" alt="QuickFit Logo" />
</Box>
  );
};

export default Logo; */
import React from 'react';
import { Box} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Logo = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // up to 600px
  const isMedium = useMediaQuery(theme.breakpoints.between('sm', 'md')); // 600px to 900px

  const getSize = () => {
    if (isMobile) return { width: 150, height: 50, padding: '10px' };
    if (isMedium) return { width: 200, height: 55, padding: '10px 0 0px 10px' };
    return { width: 300, height: 100, padding: '10px' };
  };

  const { width, height, padding } = getSize();
  return (
    <Box
      sx={{
        width,
        height,
        position: 'fixed',
        top: 0,
        left: 0,
        padding
      }}
    >
      <img src="/QuickFit.png" alt="QuickFit Logo" style={{ width: '100%', height: 'auto' }} />
    </Box>
  );
};

export default Logo;