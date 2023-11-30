import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Image from "next/image";
import { useAuth } from "@/components/AuthProvider";
import { AppBar, Button, Switch, Stack } from "@mui/material";

interface Props {
  isDarkTheme: boolean,
  onThemeToggle: () => void,
}
export const Header = ({ isDarkTheme, onThemeToggle }: Props) => {
  const router = useRouter();
  const { user } = useAuth();
  const [ isClient, setIsClient] = useState(false)

  console.log(user);

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <AppBar position="fixed" color="transparent" sx={{mt: 1}}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        spacing={2}
        sx={{padding: '4px'}}
      >
        <div>
          <Image
            priority={true}
            src="images/logocap.svg"
            width={173}
            height={42}
            alt="logocap"
          />
        </div>

        <div>
          <Switch checked={isDarkTheme} onChange={onThemeToggle} size="small" />

          {isClient && user?.email ? (
            <Button variant="outlined" size="small" sx={{borderRadius: "20px"}} onClick={handleLogin} color="secondary">
              Login
            </Button>
          ) : (
            <Button variant="outlined" size="small" sx={{borderRadius: "20px"}} onClick={handleLogin} color="secondary">
              Logout
            </Button>
          )}
        </div>
      </Stack>
    </AppBar>
  );
}