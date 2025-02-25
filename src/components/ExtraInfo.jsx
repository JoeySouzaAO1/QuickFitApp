import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

export const ExtraInfo = () => {
  return (
    <Box
      sx={{
        width: 325,
        position: 'fixed',
        top: 100,
        right: 0,
        height: 'calc(100vh - 100px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '70px',
        padding: '20px',
      }}
    >
      {[1, 2, 3].map((index) => (
        <Card key={index} sx={{ width: 325, height: 190 }}>
          <CardContent>
            <Typography>Info Card {index}</Typography>
            {/* Add more content here */}
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};


