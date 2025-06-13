import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, CssBaseline, AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, ThemeProvider, createTheme, Tooltip, Avatar, Menu, MenuItem, Divider, Badge, Popover, ListItemAvatar, ListItemSecondaryAction, InputBase, Paper, List as MUIList } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
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
  const [notifAnchor, setNotifAnchor] = useState(null);
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Task Due', message: 'Finish quarterly report by 5pm', time: '2h ago', read: false },
    { id: 2, title: 'Habit Streak', message: 'You hit a 7-day streak!', time: 'Today', read: false },
    { id: 3, title: 'New Feature', message: 'Calendar view is now available.', time: 'Yesterday', read: true },
  ]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchOpen, setSearchOpen] = useState(false);

  // Simulated search data (replace with real search logic)
  const allData = [
    { type: 'Task', label: 'Quarterly Report', id: 1 },
    { type: 'Habit', label: 'Morning Workout', id: 2 },
    { type: 'User', label: 'John Doe', id: 3 },
    { type: 'Task', label: 'Team Meeting', id: 4 },
    { type: 'Habit', label: 'Read a Book', id: 5 },
  ];

  const unreadCount = notifications.filter(n => !n.read).length;
  const handleNotifOpen = (event) => setNotifAnchor(event.currentTarget);
  const handleNotifClose = () => setNotifAnchor(null);
  const handleNotifMarkRead = (id) => setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (value.length > 1) {
      setSearchResults(allData.filter(item => item.label.toLowerCase().includes(value.toLowerCase())));
      setSearchOpen(true);
    } else {
      setSearchResults([]);
      setSearchOpen(false);
    }
  };
  const handleSearchResultClick = (item) => {
    setSearch('');
    setSearchResults([]);
    setSearchOpen(false);
    // Optionally, navigate or focus the item
    if (item.type === 'Task') onNav('tasks');
    if (item.type === 'Habit') onNav('dashboard');
    if (item.type === 'User') onNav('profile');
  };
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
            {/* Global Search */}
            <Paper component="form" sx={{ display: 'flex', alignItems: 'center', width: 260, mr: 2, borderRadius: 2, boxShadow: 0, bgcolor: 'background.default', border: 1, borderColor: 'divider' }} elevation={0}>
              <InputBase
                sx={{ ml: 1, flex: 1, fontSize: 15 }}
                placeholder="Search tasks, habits, users..."
                value={search}
                onChange={handleSearchChange}
                inputProps={{ 'aria-label': 'search' }}
                onFocus={() => search.length > 1 && setSearchOpen(true)}
                onBlur={() => setTimeout(() => setSearchOpen(false), 150)}
              />
              <IconButton type="submit" sx={{ p: 0.5 }} disabled>
                <SearchIcon />
              </IconButton>
            </Paper>
            {searchOpen && searchResults.length > 0 && (
              <Paper sx={{ position: 'absolute', top: 56, left: '50%', transform: 'translateX(-50%)', width: 320, zIndex: 2000, maxHeight: 320, overflowY: 'auto', borderRadius: 2, boxShadow: 6 }}>
                <MUIList dense>
                  {searchResults.map(item => (
                    <ListItem button key={item.id} onMouseDown={() => handleSearchResultClick(item)}>
                      <ListItemAvatar>
                        <Avatar sx={{ width: 28, height: 28, bgcolor: 'primary.main', fontSize: 16 }}>{item.type[0]}</Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={item.label} secondary={item.type} />
                    </ListItem>
                  ))}
                </MUIList>
              </Paper>
            )}
            <Tooltip title="Notifications">
              <IconButton color="primary" onClick={handleNotifOpen} sx={{ WebkitAppRegion: 'no-drag' }}>
                <Badge badgeContent={unreadCount} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Tooltip>
            <Popover
              open={Boolean(notifAnchor)}
              anchorEl={notifAnchor}
              onClose={handleNotifClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              PaperProps={{ sx: { minWidth: 320, maxWidth: 400, p: 1 } }}
            >
              <Typography variant="subtitle1" sx={{ px: 2, pt: 1, fontWeight: 600 }}>Notifications</Typography>
              <Divider sx={{ my: 1 }} />
              <List dense>
                {notifications.length === 0 && (
                  <ListItem><ListItemText primary="No notifications" /></ListItem>
                )}
                {notifications.map(n => (
                  <ListItem key={n.id} alignItems="flex-start" sx={{ bgcolor: n.read ? 'background.default' : '#e3f2fd', borderRadius: 1, mb: 0.5 }}>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: n.read ? 'grey.400' : 'primary.main', width: 32, height: 32 }}>{n.title[0]}</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={<Typography fontWeight={n.read ? 400 : 700}>{n.title}</Typography>}
                      secondary={<>
                        <Typography variant="body2" color="text.secondary">{n.message}</Typography>
                        <Typography variant="caption" color="text.secondary">{n.time}</Typography>
                      </>}
                    />
                    {!n.read && (
                      <ListItemSecondaryAction>
                        <Tooltip title="Mark as read">
                          <IconButton edge="end" size="small" onClick={() => handleNotifMarkRead(n.id)}>
                            <span style={{ width: 8, height: 8, display: 'inline-block', background: '#1976d2', borderRadius: 4 }} />
                          </IconButton>
                        </Tooltip>
                      </ListItemSecondaryAction>
                    )}
                  </ListItem>
                ))}
              </List>
            </Popover>
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
          <Box sx={{ flexGrow: 1 }}>
            <Outlet />
          </Box>
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
