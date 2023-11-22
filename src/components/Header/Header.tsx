import Image from "next/image";
import { AppBar, Button, Switch, Stack } from "@mui/material";
import { useRouter } from "next/router";

interface Props {
  isDarkTheme: boolean,
  onThemeToggle: () => void,
}
export const Header = ({ isDarkTheme, onThemeToggle }: Props) => {
  const router = useRouter();

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
            src="images/logocap.svg"
            width={173}
            height={42}
            alt="logocap"
          />
        </div>

        <div>
          <Switch checked={isDarkTheme} onChange={onThemeToggle} size="small" />

          <Button variant="outlined" size="small" sx={{borderRadius: "20px"}} onClick={handleLogin} color="secondary">
            Logout
          </Button>
        </div>
      </Stack>
    </AppBar>
  );
}