import { Box } from "@mui/material";
import { Header } from "@/components/Header";

export const Layout = ({ children, isDarkTheme, onThemeToggle }: any) => {
  return (
    <>
      <Header isDarkTheme={isDarkTheme} onThemeToggle={onThemeToggle} />

        <Box overflow="auto" m={2} mt={6} textAlign="center">
          {children}
        </Box>
    </>
  );
};