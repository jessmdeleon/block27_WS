import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import HelpIcon from '@mui/icons-material/Help';

const Sidebar = ({ open }) => (
  <Drawer variant="persistent" open={open}>
    <List>
      <ListItem button>
        <ListItemIcon><HomeIcon /></ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button>
        <ListItemIcon><HelpIcon /></ListItemIcon>
        <ListItemText primary="FAQ Page" />
      </ListItem>
    </List>
  </Drawer>
);

export default Sidebar;
