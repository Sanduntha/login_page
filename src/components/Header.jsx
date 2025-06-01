import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
const Header = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, width: '100%' }}>
        
      <Stack direction="row" spacing={1} alignItems="center">
        <Box 
          sx={{ 
            width: 32, 
            height: 32, 
            borderRadius: '50%', 
            bgcolor: '#4285F4', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }}
        />
        <Typography variant="subtitle1" fontWeight="bold" color="text.primary">
          Anywhere app.
        </Typography>
      </Stack>

      <Stack direction="row" spacing={3}>
        <Button color="inherit" sx={{ color: 'text.secondary' }}>Home</Button>
        <Button color="inherit" sx={{ color: 'text.secondary' }}>Join</Button>
      </Stack>

    </Box>
  );
};
export default Header;