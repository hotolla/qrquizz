import * as React from 'react';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';

export const AuthButtons = () => {
  return (
    <Stack direction="row" spacing={2} mt="8px">
      
      <Button
        variant="contained"
        color="info"
        sx={{fontSize: 18, borderRadius: "50rem"}}
      >
        <GitHubIcon color="primary"/>
      </Button>

      <Button
        variant="contained"
        color="error"
        sx={{fontSize: 18, borderRadius: "50rem"}}
      >
        <GoogleIcon color="primary"/>
      </Button>
    </Stack>
  );
}