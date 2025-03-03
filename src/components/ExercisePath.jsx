import React, { useRef, useEffect, useState } from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import {blue} from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

const workoutTypes = ['Upper Body',  'HIIT', 'Lower Body', 'Core'];


const ExercisePath = () => {
  const weeks = [1, 2, 3, 4];
  const daysPerWeek = 7;
  const [currentWeek, setCurrentWeek] = useState(1);
  const weekRefs = useRef([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    
 const navigate = useNavigate()
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentWeek(Number(entry.target.getAttribute('data-week')));
          }
        });
      },
      { threshold: 0.5 }
    );

    weekRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  const handleExerciseClick = React.useCallback((workoutType) => {
    navigate(`/workout/${workoutType}`);
    console.log(`Let's start a ${workoutType} workout!`);
  }, [navigate]);
  

  return (
    <Box
      sx={{
        // padding: isMobile ? '10px' : '20px',
        height: '100%',
        overflow: 'auto',
        backgroundColor: blue[100],
        borderRadius: '20px'
      }}
    >
      {weeks.map((week) => (
        <Box
          key={week}
          ref={(el) => (weekRefs.current[week] = el)}
          data-week={week}
          sx={{
            marginBottom: '40px',
            width: 'auto',
            textAlign: 'center',
            position: 'relative',
            
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: 157,
              backgroundColor: 'primary.main',
              color: 'white',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '20px',
              borderRadius: '20px',
              position: 'sticky',
              top: 0,
              left: 0,
              zIndex: week,
            }}
          >
            <Typography variant="h4">Week {week}</Typography>
          </Box>
          <Box
  sx={{
    overflow: 'hidden',
    position: 'relative',
  }}
>
  {Array.from({ length: daysPerWeek }, (_, i) => i + 1).map((day) => (
    <Box key={day} sx={{ marginBottom: '5px' }}>
      <Typography variant="h6" sx={{borderBottom: `1px solid ${blue[600]}`, borderTop: `1px solid ${blue[600]}`}}>Day {day}</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {workoutTypes.map((workoutType, index) => (
          <Box
            key={index}
            onClick={() => handleExerciseClick(workoutType)}
            sx={{
              width: 100,
              height: 100,
              backgroundColor: 'secondary.main',
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '10px 0',
              marginLeft: index === 1 ? '80px' : index === 3 ? '-80px' : '0',
            }}
          >
            <Typography>{workoutType}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  ))}
</Box>

        </Box>
      ))}
    </Box>
  );
};

export default ExercisePath;