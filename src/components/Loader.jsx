import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';

export default function Loader() {
  return (
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} margin={2}>
        <CircularProgress />
    </Box>
  )
}
