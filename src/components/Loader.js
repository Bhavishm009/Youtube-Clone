import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Stack  from '@mui/material/Stack'
const Loader = () =>  (
  <Box minHeight="95vh">
    <Stack direction='row' justifyContent='center' alignItems='center' height='80vh' >
      <CircularProgress />
    </Stack>
  </Box>
);

export default Loader;