import React from 'react';
import { Box, CssBaseline, AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, ThemeProvider, createTheme, Tooltip, Avatar, Menu, MenuItem, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MinimizeIcon from '@mui/icons-material/Minimize';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

const drawerWidth = 260;

const MainLayout = ({ children, onNav }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: { main: '#1565c0' },
      background: { default: darkMode ? '#1a1d22' : '#f3f6fb' },
      secondary: { main: '#455a64' },
    },
    shape: { borderRadius: 8 },
    typography: { fontFamily: 'Segoe UI, Arial, sans-serif' },
  });

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const handleThemeToggle = () => setDarkMode(!darkMode);
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const drawer = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', bgcolor: 'background.paper', borderRight: 1, borderColor: 'divider' }}>
      <Toolbar sx={{ minHeight: 56 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: 1, color: 'primary.main' }}>
          <span style={{ color: '#1565c0' }}>Pulse</span>Focus
        </Typography>
      </Toolbar>
      <Divider />
      <List sx={{ flexGrow: 1 }}>
        <ListItem button onClick={() => onNav('dashboard')}>
          <ListItemIcon><DashboardIcon color="primary" /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button onClick={() => onNav('tasks')}>
          <ListItemIcon><AssignmentIcon color="primary" /></ListItemIcon>
          <ListItemText primary="Tasks" />
        </ListItem>
        <ListItem button onClick={() => onNav('profile')}>
          <ListItemIcon><PersonIcon color="primary" /></ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
      </List>
      <Divider />
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
        <Avatar sx={{ width: 36, height: 36, bgcolor: 'primary.main', fontWeight: 700 }}>U</Avatar>
        <Box>
          <Typography variant="body2" fontWeight={600}>User Name</Typography>
          <Typography variant="caption" color="text.secondary">user@email.com</Typography>
        </Box>
      </Box>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1, WebkitAppRegion: 'drag', userSelect: 'none', bgcolor: 'background.paper', color: 'primary.main', boxShadow: 2 }}>
          <Toolbar sx={{ minHeight: 48, px: 2 }}>
            <IconButton color="primary" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, WebkitAppRegion: 'no-drag', display: { sm: 'none' } }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap sx={{ flexGrow: 1, fontWeight: 700, letterSpacing: 1, color: 'primary.main' }}>
              PulseFocus Enterprise
            </Typography>
            <Tooltip title="Toggle light/dark mode">
              <IconButton color="primary" onClick={handleThemeToggle} sx={{ WebkitAppRegion: 'no-drag' }}>
                {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Tooltip>
            <Tooltip title="Settings">
              <IconButton color="primary" sx={{ WebkitAppRegion: 'no-drag' }}>
                <SettingsIcon />
              </IconButton>
            </Tooltip>
            <IconButton color="primary" onClick={handleMenuOpen} sx={{ ml: 1, WebkitAppRegion: 'no-drag' }}>
              <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main', fontWeight: 700 }}>U</Avatar>
            </IconButton>
            <Menu anchorEl={anchorEl} open={openMenu} onClose={handleMenuClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
              <MenuItem onClick={() => { handleMenuClose(); onNav('profile'); }}>Profile</MenuItem>
              <MenuItem onClick={handleMenuClose}>Account</MenuItem>
              <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
            </Menu>
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

        <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Toolbar />
          <Box sx={{ flexGrow: 1 }}>{children}</Box>
          {/* Desktop-style status bar/footer */}
          <Box sx={{ height: 32, bgcolor: (theme) => theme.palette.mode === 'dark' ? '#23272b' : '#e3e6ea', color: 'text.secondary', display: 'flex', alignItems: 'center', px: 2, borderTop: 1, borderColor: 'divider', fontSize: 14 }}>
            <span>PulseFocus &copy; {new Date().getFullYear()} &mdash; All systems operational</span>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default MainLayout;
