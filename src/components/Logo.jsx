import React from 'react';
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

export default Logo;
