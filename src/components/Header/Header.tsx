import Image from 'next/image'
import { AppBar, Button, Switch, Stack } from "@mui/material";

interface Props {
  isDarkTheme: boolean,
  onThemeToggle: () => void,
}
export const Header = ({ isDarkTheme, onThemeToggle }: Props) => {
  return (

    <AppBar position='fixed' color='transparent'>
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

          <Button variant="outlined" size="small" sx={{borderRadius: '20px'}}>
            Logout
          </Button>
        </div>
      </Stack>
    </AppBar>
  );
}