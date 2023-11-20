import { createTheme } from '@mui/material';
import {customTypography} from "@/themes/typeography";

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0070ad'
    },
    secondary: {
      main: '#12abdb'
    },
    info: {
      main: '#12abdb'
    },
    error: {
      main: '#e30021'
    },
    success: {
      main: '#2ea657'
    },
    background: {
      default: '#f8f9fa'
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
      main: '#f5f0e8'
    },
    secondary: {
      main: '#ffb300'
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
      default: '#181A20'
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