
import React from 'react';
import { Box, Icon, useMediaQuery } from '@mui/material';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import TimerIcon from '@mui/icons-material/Timer';
import { red } from '@mui/material/colors';
import { blue } from '@mui/material/colors';
import { useTheme } from '@mui/material/styles';

const UserIcon = () => {
  const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // up to 600px
    const isMedium = useMediaQuery(theme.breakpoints.between('sm', 'md')); // 600px to 900px
  
    const getSize = () => {
      if (isMobile) return { width: 150, height: 50, padding: '0px' };
      if (isMedium) return { width: 200, height: 55, padding: '0px' };
      return { width: 300, height: 100, padding: '0px' };
    };
  
    const { width, height, padding } = getSize();

  return (
    <Box
      sx={{
        width,
        height,
        position: 'fixed',
        top: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding
      }}
    >
      <Icon component={LocalFireDepartmentIcon} fontSize={isMobile ? 'medium' : 'large'} sx={{ color: red[500] }}/>
      <Icon component={TimerIcon} fontSize={isMobile ? 'medium' : 'large'} sx={{ color: blue[600] }}/>
    </Box>
  );
};

export default UserIcon;

