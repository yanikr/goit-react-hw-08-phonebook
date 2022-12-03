import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import AppBarUi from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <Box sx={{ flexGrow: 1 }}>
        <AppBarUi position="static">
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Toolbar>
        </AppBarUi>
      </Box>
    </header>
  );
};
