import { useState } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  School as SchoolIcon,
  Code as CodeIcon,
  Palette as PaletteIcon,
  AutoAwesome as AutoAwesomeIcon,
  GitHub as GitHubIcon,
} from '@mui/icons-material'

const drawerWidth = 280

const navItems = [
  { text: 'Home', icon: <HomeIcon />, path: '/' },
  { text: 'Getting Started', icon: <AutoAwesomeIcon />, path: '/getting-started' },
  { text: 'Tutorials', icon: <SchoolIcon />, path: '/tutorials' },
  { text: 'Components', icon: <CodeIcon />, path: '/components' },
  { text: 'Design Principles', icon: <PaletteIcon />, path: '/design-principles' },
]

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box sx={{ overflow: 'auto', py: 2 }}>
      <Box sx={{ px: 3, py: 2, mb: 2 }}>
        <Typography variant="h5" fontWeight={700} color="primary">
          ✨ Design in Code
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Learn to build beautiful UIs
        </Typography>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              selected={location.pathname === item.path}
              onClick={() => {
                navigate(item.path)
                if (isMobile) setMobileOpen(false)
              }}
            >
              <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          bgcolor: 'background.paper',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
        elevation={0}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit" href="https://github.com" target="_blank">
            <GitHubIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      >
        <Drawer
          variant={isMobile ? 'temporary' : 'permanent'}
          open={isMobile ? mobileOpen : true}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${drawerWidth}px)` },
          minHeight: '100vh',
          mt: '64px',
        }}
      >
        <Outlet />
      </Box>
    </Box>
  )
}

