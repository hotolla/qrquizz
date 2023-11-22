import { createTheme } from '@mui/material';
import {customTypography} from "@/themes/typeography";

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#f8f9fa'
    },
    secondary: {
      main: '#14ABDC'
    },
    info: {
      main: '#171515'
    },
    error: {
      main: '#e30021'
    },
    success: {
      main: '#2ea657'
    },
    background: {
      default: '#FFFFFF'
    }
  },
  typography: customTypography,
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none' 
        },
      },
    },
  },
},
);

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FEFEFE'
    },
    secondary: {
      main: '#14ABDC'
    },
    info: {
      main: '#8ee2f1'
    },
    error: {
      main: '#ec4343'
    },
    success: {
      main: '#affdb1'
    },
    background: {
      default: '#280938'
    }
  },
  typography: customTypography,
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none' 
        },
      },
    },
  },
});