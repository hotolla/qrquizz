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
      main: '#00E6E3'
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
      main: '#00E6E3'
    },
    background: {
      default: '#272936'
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