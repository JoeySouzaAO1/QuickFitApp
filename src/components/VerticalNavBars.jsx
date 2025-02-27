import React from 'react';
import { Box, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import InfoIcon from '@mui/icons-material/Info';

export const VerticalNavBars = () => {
  const navItems = [
    { icon: <AccountCircleIcon />, text: 'Profile' },
    { icon: <EmojiEventsIcon/>, text: 'Achievements' },
    { icon: <FitnessCenterIcon/>, text: 'Exercises' },
    { icon: <InfoIcon/>, text: 'About QuickFit' }
  ];

  return (
    <Box
      sx={{
        width: 300,
        position: 'fixed',
        top: 100,
        left: 0,
        height: 'calc(100vh - 100px)',
        paddingLeft: '20px'
      }}
    >
      <List>
        {navItems.map((item) => (
          <ListItem button key={item.text} sx={{ gap: 1 }}>
            {item.icon && <ListItemIcon sx={{ minWidth: 'auto' }}>{item.icon}</ListItemIcon>}
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
