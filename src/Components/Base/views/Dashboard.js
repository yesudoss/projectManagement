import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import toast from 'react-hot-toast'
import Base from './Base'

function Dashboard() {
    const handleClick = (type, message) => {
        console.log('message: ', message);
        console.log('type: ', type);
        type === "success" && toast.success(message)
        type === "error" && toast.error(message)
    }
    return (
        <Base>
            <div>Dashboard</div>
            <Box sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Typography sx={{ mb: 4, fontWeight: 600 }}>Success</Typography>
                <Typography sx={{ mb: 3 }}>Creates a notification with an animated checkmark.</Typography>
                <Button sx={{ mb: 8 }} color='success' variant='contained' onClick={() => handleClick("success", "Saved Successfully")}>
                    Success
                </Button>
                <Button sx={{ mb: 8 }} color='error' variant='contained' onClick={() => handleClick("error", "Unable to Save")}>
                    Error
                </Button>
            </Box>
        </Base>

    )
}

export default Dashboard