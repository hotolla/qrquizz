import { Box } from '@mui/material';
import { Header } from "@/components/Header";

export const Layout = ({ children, isDarkTheme, onThemeToggle }: any) => {
  return (
    <>
      <Header isDarkTheme={isDarkTheme} onThemeToggle={onThemeToggle}/>

      <Box flexGrow={1} overflow="auto" m={3}>
        {children}
      </Box>
    </>
  );
};