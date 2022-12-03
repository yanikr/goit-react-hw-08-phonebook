import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
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

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <p>Welcome, {user.name}</p>

          <Button
            color="secondary"
            variant="text"
            type="button"
            onClick={() => dispatch(logOut())}
            sx={{ ml: 2 }}
          >
            Logout
          </Button>
        </Toolbar>
      </ThemeProvider>
    </div>
  );
};
