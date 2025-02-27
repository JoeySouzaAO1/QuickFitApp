import React from 'react';
import { Box, BottomNavigation, BottomNavigationAction } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import InfoIcon from '@mui/icons-material/Info';
import { yellow, blue, green, orange } from '@mui/material/colors';

export const HorizontalNavBar = () => {
  const [value, setValue] = React.useState(0);

  const navItems = [
    { icon: <AccountCircleIcon sx={{color: blue[600]}} />, label: 'Profile' },
    { icon: <EmojiEventsIcon sx={{color: yellow[500]}} />, label: 'Achievements' },
    { icon: <FitnessCenterIcon sx={{color: green[500]}} />, label: 'Exercises' },
    { icon: <InfoIcon sx={{color: orange[500]}} />, label: 'About' }
  ];

  return (
    <Box sx={{ 
      position: 'fixed', 
      borderTop: '1px',
      borderTop: `1px solid ${blue[600]}`,
      bottom: 0, 
      left: 0, 
      right: 0, 
      height: '50px',
      zIndex: 1000 
    }}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels={false}
        sx={{ 
          height: '100%',
          '& .MuiBottomNavigationAction-root': {
            minWidth: 'auto',
            padding: '6px 0',
          }
        }}
      >
        {navItems.map((item, index) => (
          <BottomNavigationAction key={index} icon={item.icon} />
        ))}
      </BottomNavigation>
    </Box>
  );
};
