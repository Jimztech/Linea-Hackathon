import React from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SettingsIcon from '@mui/icons-material/Settings';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';


type Anchor = 'top' | 'left' | 'bottom' | 'right';

const Sidebar: React.FC = () => {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  return (
    <React.Fragment>
      <IconButton onClick={toggleDrawer('left', true)}>
        <MenuRoundedIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        <List>
          <ListItemButton component={Link} to="/profile" onClick={toggleDrawer('left', false)}>
            <ListItemIcon><AccountCircleIcon /></ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
          <ListItem button component={Link} to="/wallet" onClick={toggleDrawer('left', false)}>
            <ListItemIcon><AccountBalanceWalletIcon /></ListItemIcon>
            <ListItemText primary="Wallet" />
          </ListItem>
          <ListItemButton component={Link} to="/settings" onClick={toggleDrawer('left', false)}>
            <ListItemIcon><SettingsIcon /></ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
          <ListItemButton onClick={toggleDrawer('left', false)}>
            <ListItemIcon><Brightness4Icon /></ListItemIcon>
            <ListItemText primary="Dark Mode" />
          </ListItemButton>
        </List>
      </SwipeableDrawer>
    </React.Fragment>
  );
};
export default Sidebar;
