import React from 'react';
import { Box, Icon } from '@mui/material';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import TimerIcon from '@mui/icons-material/Timer';

const UserIcon = () => {
  return (
    <Box
      sx={{
        width: 300,
        height: 100,
        position: 'fixed',
        top: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingRight: '20px'
      }}
    >
      <Icon component={LocalFireDepartmentIcon} />
      <Icon component={TimerIcon} />
    </Box>
  );
};

export default UserIcon;

