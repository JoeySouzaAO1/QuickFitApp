import React from 'react';
import { Box, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import { yellow, blue, green, orange, red } from '@mui/material/colors';

import InfoIcon from '@mui/icons-material/Info';

export const VerticalNavBars = () => {
  const navItems = [
    { icon: <AccountCircleIcon sx={{color: blue[600]}} />, text: 'Profile' },
    { icon: <EmojiEventsIcon sx={{color: yellow[500]}}/>, text: 'Achievements' },
    { icon: <Groups2OutlinedIcon sx={{color: red [300]}}/>, text: 'Community' },
    { icon: <FitnessCenterIcon sx={{color: green[500]}}/>, text: 'Exercises' },
    { icon: <InfoIcon sx={{color: orange [500]}}/>, text: 'About QuickFit' }
  ];

  return (
    <Box
      sx={{
        width: 200,
        
        position: 'fixed',
        top: 100,
        left: 0,
        // height: 'calc(100vh - 100px)',
        height: '100vh',
        paddingLeft: '20px'
      }}
    >
      <List >
        {navItems.map((item) => (
          <ListItem button key={item.text} sx={{ 
            gap: 1, 
            borderBottom: `1px solid ${blue[600]}`,
            paddingY: '30px'
            }}>
            {item.icon && <ListItemIcon sx={{ minWidth: 'auto' }}>{item.icon}</ListItemIcon>}
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
