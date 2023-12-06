import * as React from 'react';
import { useEffect, useState } from "react";
import { router } from "next/client";
import * as authApi from '@/api/auth';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useAuth } from '@/components/AuthProvider';

export const AuthButtons = () => {
  const { isAuthenticated, user, login } = useAuth();
  const [ isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, []);

  const googleAuthentication = () => {
    authApi.redirect().then(({data}) => {
      console.log(data.google);
    })
  };

  const googleAuthentication2 = ( method: string) => {
    authApi.redirect2(method).then(({data}) => {
      console.log(data);
    })
  };

  const githubAuthentication = () => {
    authApi.redirect().then(({data}) => {
      console.log(data.githab);
    })
  };

  // const handleSubmit = () => {
  //   authApi.login().then((data) => {
  //     login(data);
  //     console.log(data[0].email);
  //     if (data[0].email) router.push('/quiz');
  //   })
  // };

  return (
    <Stack direction="row" spacing={2} mt="8px">
      
      <Button
        variant="contained"
        color="info"
        sx={{fontSize: 18, borderRadius: "50px"}}
        onClick={githubAuthentication}
      >
        <GitHubIcon color="primary"/>
      </Button>

      <Button
        variant="contained"
        color="error"
        sx={{fontSize: 18, borderRadius: "50px"}}
        onClick={() => googleAuthentication2('google')}
      >
        <GoogleIcon color="primary"/>
      </Button>
    </Stack>
  );
}