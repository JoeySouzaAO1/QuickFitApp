import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Paper } from '@mui/material';
import { CompleteBtn } from './CompleteBtn';
import { useParams } from 'react-router-dom';
import { blue } from '@mui/material/colors';

const WorkoutCard = () => {
  const exercises = [
    "Exercise 1",
    "Exercise 2",
    "Exercise 3",
    "Exercise 4",
    "Exercise 5"
  ];
  const { workoutType } = useParams();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: blue[50],
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: '300px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'white',
          borderRadius: '20px',
          boxShadow: `0 0 20px ${blue[200]}`,
        }}
      >
        <Typography 
          variant="h4" 
          gutterBottom 
          sx={{ 
            color: blue[700],
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          {workoutType} Workout
        </Typography>
        <List sx={{ width: '100%' }}>
          {exercises.map((exercise, index) => (
            <ListItem 
              key={index} 
              disablePadding 
              sx={{ 
                borderBottom: index < exercises.length - 1 ? `1px solid ${blue[100]}` : 'none',
                py: 1,
              }}
            >
              <ListItemText 
                primary={`• ${exercise}`} 
                sx={{ 
                  color: blue[800],
                  '& .MuiListItemText-primary': {
                    fontWeight: 'medium',
                  }
                }}
              />
            </ListItem>
          ))}
        </List>
        <Box sx={{ mt: 3 }}>
          <CompleteBtn />
        </Box>
      </Paper>
    </Box>
  );
};

export default WorkoutCard;

