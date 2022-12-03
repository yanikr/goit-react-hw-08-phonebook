import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#fff',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export const AuthNav = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button
          component={NavLink}
          to="/register"
          color="secondary"
          variant="text"
        >
          Register
        </Button>
        <Button
          component={NavLink}
          to="/login"
          color="secondary"
          variant="text"
        >
          Login
        </Button>
      </ThemeProvider>
    </div>
  );
};
