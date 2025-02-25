import React from 'react';
import { Box, List, ListItem, ListItemText } from '@mui/material';

export const VerticalNavBars = () => {
  const navItems = ['Profile', 'Achievements', 'Exercises', 'About QuickFit'];

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
          <ListItem button key={item}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

