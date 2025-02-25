import React, { useRef, useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

const ExercisePath = () => {
  const weeks = [1, 2, 3, 4];
  const daysPerWeek = 7;
  const [currentWeek, setCurrentWeek] = useState(1);
  const weekRefs = useRef([]);

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

  return (
    <Box
      sx={{
        flexGrow: 1,
        overflowY: 'auto',
        paddingRight: '20px',
        paddingLeft: '20px',
        paddingBottom: '20px',
        marginLeft: '300px',
        marginRight: '325px',
        height: 'calc(100vh - 40px)',
        position: 'relative',
      }}
    >
      {weeks.map((week) => (
        <Box
          key={week}
          ref={(el) => (weekRefs.current[week] = el)}
          data-week={week}
          sx={{
            marginBottom: '40px',
            width: '100%',
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
              borderRadius: '50px',
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
              <Box key={day} sx={{ marginBottom: '30px' }}>
                <Typography variant="h6">Day {day}</Typography>
                <Grid container direction="column" alignItems="center" spacing={2}>
                  {[1, 2, 3, 4].map((exercise) => (
                    <Grid key={exercise}>
                      <Box
                        sx={{
                          width: 100,
                          height: 100,
                          backgroundColor: 'secondary.main',
                          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          margin: '10px 0',
                        }}
                      >
                        <Typography>Exercise {exercise}</Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ExercisePath;