import * as React from 'react';
import { useEffect, useState } from "react";
import * as authApi from '@/api/auth';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useAuth } from '@/components/AuthProvider';
import { useRouter } from 'next/navigation'

export const AuthButtons = () => {
  const { isAuthenticated, user, login } = useAuth();
  const [ isClient, setIsClient] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsClient(true)
  }, []);

  const handleAuthentication = (method: string) => {
    authApi.redirect().then((data) => {
      const url = `https://${data[method]}`;
      router.push(url);
    })
  };

  return (
    <Stack direction="row" spacing={2} mt="8px">
      
      <Button
        variant="contained"
        color="info"
        sx={{fontSize: 18, borderRadius: "50px"}}
        onClick={() => handleAuthentication('github')}
      >
        <GitHubIcon color="primary"/>
      </Button>

      <Button
        variant="contained"
        color="error"
        sx={{fontSize: 18, borderRadius: "50px"}}
        onClick={() => handleAuthentication('google')}
      >
        <GoogleIcon color="primary"/>
      </Button>
    </Stack>
  );
}