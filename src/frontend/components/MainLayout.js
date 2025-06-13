import React from 'react';
import { Box, CssBaseline, AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, useTheme, ThemeProvider, createTheme, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PersonIcon from '@mui/icons-material/Person';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MinimizeIcon from '@mui/icons-material/Minimize';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

const drawerWidth = 220;

const MainLayout = ({ children, onNav }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: { main: '#1976d2' },
      background: { default: darkMode ? '#181c20' : '#f4f6fa' },
    },
  });

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const handleThemeToggle = () => setDarkMode(!darkMode);

  const drawer = (
    <div>
      <Toolbar />
      <List>
        <ListItem button onClick={() => onNav('dashboard')}>
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button onClick={() => onNav('tasks')}>
          <ListItemIcon><AssignmentIcon /></ListItemIcon>
          <ListItemText primary="Tasks" />
        </ListItem>
        <ListItem button onClick={() => onNav('profile')}>
          <ListItemIcon><PersonIcon /></ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1, WebkitAppRegion: 'drag', userSelect: 'none' }} elevation={2}>
          <Toolbar sx={{ minHeight: 40, px: 1 }}>
            <IconButton color="inherit" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: 'none' }, WebkitAppRegion: 'no-drag' }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap sx={{ flexGrow: 1, fontWeight: 600, letterSpacing: 1 }}>
              PulseFocus App
            </Typography>
            <IconButton color="inherit" onClick={handleThemeToggle} sx={{ WebkitAppRegion: 'no-drag' }}>
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            {/* Custom window controls */}
            <Box sx={{ ml: 1, display: 'flex', gap: 0.5, WebkitAppRegion: 'no-drag' }}>
              <Tooltip title="Minimize"><IconButton size="small" onClick={() => window.electron?.sendToMain('minimize')}><MinimizeIcon fontSize="small" /></IconButton></Tooltip>
              <Tooltip title="Maximize/Restore"><IconButton size="small" onClick={() => window.electron?.sendToMain('maximize')}><CropSquareIcon fontSize="small" /></IconButton></Tooltip>
              <Tooltip title="Close"><IconButton size="small" onClick={() => window.electron?.sendToMain('close')}><CloseIcon fontSize="small" /></IconButton></Tooltip>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            display: { xs: 'none', sm: 'block' },
          }}
          open
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{ display: { xs: 'block', sm: 'none' },
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
          }}
        >
          {drawer}
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
          <Toolbar />
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default MainLayout;
