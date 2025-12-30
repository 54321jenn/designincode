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
  Collapse,
  Tooltip,
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
  ExpandLess,
  ExpandMore,
  ViewSidebar as ViewSidebarIcon,
  PlayCircleOutline,
  Brush,
  Animation,
  Dashboard,
  Widgets,
  FormatColorFill,
  TextFields,
  GridOn,
} from '@mui/icons-material'

const drawerWidth = 280
const collapsedDrawerWidth = 72

interface NavItem {
  text: string
  icon: React.ReactNode
  path?: string
  children?: { text: string; icon: React.ReactNode; path: string }[]
}

const navItems: NavItem[] = [
  { text: 'Home', icon: <HomeIcon />, path: '/' },
  { text: 'Getting Started', icon: <AutoAwesomeIcon />, path: '/getting-started' },
  {
    text: 'Tutorials',
    icon: <SchoolIcon />,
    children: [
      { text: 'Basics', icon: <PlayCircleOutline />, path: '/tutorials/basics' },
      { text: 'Styling', icon: <Brush />, path: '/tutorials/styling' },
      { text: 'Animations', icon: <Animation />, path: '/tutorials/animations' },
      { text: 'Build a Dashboard', icon: <Dashboard />, path: '/tutorials/dashboard' },
    ],
  },
  {
    text: 'Components',
    icon: <CodeIcon />,
    children: [
      { text: 'Buttons', icon: <Widgets />, path: '/components/buttons' },
      { text: 'Forms', icon: <TextFields />, path: '/components/forms' },
      { text: 'Layout', icon: <GridOn />, path: '/components/layout' },
    ],
  },
  {
    text: 'Design Principles',
    icon: <PaletteIcon />,
    children: [
      { text: 'Color Theory', icon: <FormatColorFill />, path: '/design-principles/color' },
      { text: 'Typography', icon: <TextFields />, path: '/design-principles/typography' },
      { text: 'Spacing', icon: <GridOn />, path: '/design-principles/spacing' },
    ],
  },
]

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [collapsed, setCollapsed] = useState(false)
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({})
  const navigate = useNavigate()
  const location = useLocation()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleCollapseToggle = () => {
    setCollapsed(!collapsed)
    if (!collapsed) {
      setExpandedMenus({}) // Collapse all submenus when drawer collapses
    }
  }

  const handleMenuToggle = (text: string) => {
    if (collapsed) {
      setCollapsed(false) // Expand drawer when clicking parent with children
    }
    setExpandedMenus((prev) => ({ ...prev, [text]: !prev[text] }))
  }

  const isActive = (path?: string, children?: NavItem['children']) => {
    if (path) return location.pathname === path
    return children?.some((child) => location.pathname === child.path)
  }

  const currentDrawerWidth = collapsed && !isMobile ? collapsedDrawerWidth : drawerWidth

  const drawer = (
    <Box sx={{ overflow: 'auto', py: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Header with toggle */}
      <Box
        sx={{
          px: collapsed ? 1.5 : 2,
          py: 1.5,
          mb: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Collapsed state: small D mark that links home */}
        {collapsed && (
          <Box onClick={() => navigate("/")} sx={{ cursor: "pointer" }}>
            <img
              src="/dic_light.svg"
              alt="Home"
              style={{ width: 32, height: 32, objectFit: "contain" }}
            />
          </Box>
        )}

        {/* Expanded state: full wide logo that links home */}
        {!collapsed && (
          <Box onClick={() => navigate("/")} sx={{ cursor: "pointer", width: "100%", overflow: "hidden" }}>
            <img
              src="/dic_vector_dark.svg"
              alt="Design in Code logo"
              style={{ width: "100%", height: "auto", maxHeight: 80, objectFit: "contain" }}
            />
          </Box>
        )}
      </Box>

      {/* Navigation items */}
      <List sx={{ flexGrow: 1, px: collapsed ? 0.5 : 1 }}>
        {navItems.map((item) => (
          <Box key={item.text}>
            <ListItem disablePadding>
              <Tooltip title={collapsed ? item.text : ''} placement="right">
                <ListItemButton
                  selected={isActive(item.path, item.children)}
                  onClick={() => {
                    if (item.children) {
                      handleMenuToggle(item.text)
                    } else if (item.path) {
                      navigate(item.path)
                      if (isMobile) setMobileOpen(false)
                    }
                  }}
                  sx={{
                    justifyContent: collapsed ? 'center' : 'flex-start',
                    py: 1,
                    px: collapsed ? 1.5 : 2,
                    minHeight: 44,
                  }}
                >
                  <ListItemIcon sx={{ color: 'inherit', minWidth: collapsed ? 0 : 36, justifyContent: 'center' }}>
                    {item.icon}
                  </ListItemIcon>
                  {!collapsed && <ListItemText primary={item.text} slotProps={{ primary: { fontSize: '0.9rem' } }} />}
                  {!collapsed && item.children && (
                    expandedMenus[item.text] ? <ExpandLess fontSize="small" /> : <ExpandMore fontSize="small" />
                  )}
                </ListItemButton>
              </Tooltip>
            </ListItem>
            {item.children && !collapsed && (
              <Collapse in={expandedMenus[item.text]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.children.map((child) => (
                    <ListItem key={child.text} disablePadding>
                      <ListItemButton
                        selected={location.pathname === child.path}
                        onClick={() => {
                          navigate(child.path)
                          if (isMobile) setMobileOpen(false)
                        }}
                        sx={{ pl: 4, py: 0.75 }}
                      >
                        <ListItemIcon sx={{ color: 'inherit', minWidth: 32 }}>
                          {child.icon}
                        </ListItemIcon>
                        <ListItemText primary={child.text} slotProps={{ primary: { fontSize: '0.85rem' } }} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </Box>
        ))}
      </List>
    </Box>
  )

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${currentDrawerWidth}px)` },
          ml: { md: `${currentDrawerWidth}px` },
          bgcolor: 'background.paper',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
        elevation={0}
      >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 1, display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Sidebar collapse/expand (desktop) */}
        {!isMobile && (
          <Tooltip title={collapsed ? "Open sidebar" : "Close sidebar"} placement="bottom">
            <IconButton
              color="inherit"
              onClick={handleCollapseToggle}
              sx={{
                mr: 1.5,
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: 2,
              }}
            >
              <ViewSidebarIcon />
            </IconButton>
          </Tooltip>
        )}

        <Box sx={{ flexGrow: 1 }} />

        <IconButton color="inherit" href="https://github.com/54321jenn/designincode" target="_blank">
          <GitHubIcon />
        </IconButton>
      </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { md: currentDrawerWidth },
          flexShrink: { md: 0 },
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        <Drawer
          variant={isMobile ? 'temporary' : 'permanent'}
          open={isMobile ? mobileOpen : true}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: currentDrawerWidth,
              transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
              }),
              overflowX: 'hidden',
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
          width: { md: `calc(100% - ${currentDrawerWidth}px)` },
          minHeight: '100vh',
          mt: '64px',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        <Outlet />
      </Box>
    </Box>
  )
}

