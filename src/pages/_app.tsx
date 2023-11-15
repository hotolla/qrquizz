import { useCallback, useEffect, useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import { darkTheme, lightTheme } from '@/themes/themes';
import { Layout } from '@/components/Layout';

const isDarkThemeKey = 'isDarkTheme';
let item = false;

export default function App({ Component, pageProps, }: AppProps) {
  const [ isDarkTheme, setIsDarkTheme ] = useState(item);

  const handleChangeTheme = useCallback(() => {
    setIsDarkTheme((isDarkTheme) => {
      if (typeof window !== 'undefined') localStorage.setItem(isDarkThemeKey, `${isDarkTheme}`);

      return !isDarkTheme;
    });
  }, [ isDarkTheme ]);

  useEffect(() => {
    item = localStorage.getItem(isDarkThemeKey) === 'false';
  }, []);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <CssBaseline />
      <Layout isDarkTheme={isDarkTheme} onThemeToggle={handleChangeTheme}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};