import React from "react";
import Button from '@mui/material/Button';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import { useNavigate } from 'react-router-dom';



export const CompleteBtn = () => {

    const navigate = useNavigate();

    function handleCompleteClick () {
        navigate('/')
    }
    return (
<Button variant="outlined" startIcon={<CheckCircleOutlineRoundedIcon />}
sx={{
    color: "primary.main",
    alignItems: 'center',
    fontSize: 'large'
}}
onClick={() => handleCompleteClick()}>
  Complete
</Button>
)}