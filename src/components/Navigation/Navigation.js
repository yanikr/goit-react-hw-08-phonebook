import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
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

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <ThemeProvider theme={theme}>
        <Button component={NavLink} to="/" color="secondary" variant="text">
          Home
        </Button>

        {isLoggedIn && (
          <Button
            component={NavLink}
            to="/contacts"
            color="secondary"
            variant="text"
          >
            Contacts
          </Button>
        )}
      </ThemeProvider>
    </nav>
  );
};
