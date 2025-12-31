import { useState, useEffect, useRef } from 'react'
import { Outlet, useNavigate, useLocation, Link as RouterLink } from 'react-router-dom'
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Collapse,
  Tooltip,
  useTheme,
  useMediaQuery,
  Breadcrumbs,
  Link,
  Typography,
  Container,
  Stack,
} from '@mui/material'
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Code as CodeIcon,
  Code,
  AutoAwesome as AutoAwesomeIcon,
  GitHub as GitHubIcon,
  ExpandLess,
  ExpandMore,
  ViewSidebar as ViewSidebarIcon,
  Widgets,
  TextFields,
  AutoFixHigh as AutoFixHighIcon,
  Terminal,
  CloudUpload,
  DataObject,
  Settings,
  PlayArrow,
  MergeType,
  Group,
  Download,
  LinkedIn,
  X as XIcon,
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
  {
    text: 'Get Started',
    icon: <AutoAwesomeIcon />,
    path: '/getting-started',
    children: [
      { text: 'Editor Setup', icon: <TextFields />, path: '/getting-started/editor' },
      { text: 'AI Assistants', icon: <AutoFixHighIcon />, path: '/getting-started/assistants' },
      { text: 'Command Line', icon: <Terminal />, path: '/tutorials/command-line' },
      { text: 'Git + GitHub', icon: <GitHubIcon />, path: '/getting-started/git' },
    ],
  },
  {
    text: 'Build with React',
    icon: <CodeIcon />,
    path: '/build-react',
    children: [
      { text: 'Setup React', icon: <CodeIcon />, path: '/getting-started/toolchain' },
      { text: 'Quickstart with Vite', icon: <PlayArrow />, path: '/getting-started/quickstart-vite' },
      { text: 'UI Kit (MUI)', icon: <Widgets />, path: '/getting-started/mui' },
      { text: 'Publishing with Vercel', icon: <CloudUpload />, path: '/tutorials/vercel-publishing' },
    ],
  },
  {
    text: 'Build with Python',
    icon: <DataObject />,
    children: [
      { text: 'Setup Python', icon: <Settings />, path: '/tutorials/setup-python' },
      { text: 'Hello World with Streamlit', icon: <PlayArrow />, path: '/tutorials/hello-world-streamlit' },
    ],
  },
  {
    text: 'Collab with Dev Teams',
    icon: <Group />,
    children: [
      { text: 'Clone a Repository', icon: <Download />, path: '/tutorials/clone-repo' },
      { text: 'Pull Requests', icon: <MergeType />, path: '/tutorials/pull-requests' },
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
  const prevPathnameRef = useRef<string>(location.pathname)

  // Scroll to top on route change
  useEffect(() => {
    if (prevPathnameRef.current !== location.pathname) {
      prevPathnameRef.current = location.pathname
      // Scroll immediately
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      // Also scroll after a short delay to catch any late renders
      const timeoutId = setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      }, 100)
      return () => clearTimeout(timeoutId)
    }
  }, [location.pathname])

  // Auto-expand menu if current page is a child of that menu
  useEffect(() => {
    navItems.forEach((item) => {
      if (item.children) {
        const isChildActive = item.children.some((child) => location.pathname === child.path)
        if (isChildActive && !expandedMenus[item.text]) {
          setExpandedMenus((prev) => ({ ...prev, [item.text]: true }))
        }
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])

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

  // Generate breadcrumbs based on current pathname
  const getBreadcrumbs = () => {
    const pathname = location.pathname
    const crumbs: { label: string; path: string }[] = []

    // Always start with Home
    if (pathname !== '/') {
      crumbs.push({ label: 'Home', path: '/' })
    }

    // Find the matching page in navItems
    for (const navItem of navItems) {
      if (navItem.children) {
        for (const child of navItem.children) {
          if (child.path === pathname) {
            crumbs.push({ label: navItem.text, path: navItem.path || '#' })
            crumbs.push({ label: child.text, path: child.path })
            return crumbs
          }
        }
      } else if (navItem.path === pathname) {
        // Home page - no breadcrumbs needed
        return []
      }
    }

    // If no match found, return just Home
    return crumbs
  }

  const breadcrumbs = getBreadcrumbs()

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
                    if (item.path) {
                      navigate(item.path)
                      if (isMobile) setMobileOpen(false)
                    }
                    if (item.children) {
                      // Always toggle menu if it has children
                      handleMenuToggle(item.text)
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

        <IconButton color="inherit" href="https://x.com/designincodeai" target="_blank" rel="noopener noreferrer" sx={{ mr: 1 }}>
          <XIcon />
        </IconButton>
        <IconButton color="inherit" href="https://linkedin.com/company/designincode" target="_blank" rel="noopener noreferrer" sx={{ mr: 1 }}>
          <LinkedIn />
        </IconButton>
        <IconButton color="inherit" href="https://github.com/54321jenn/designincode" target="_blank" rel="noopener noreferrer">
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
          pb: location.pathname === '/' ? 0 : 3, // Remove bottom padding on home page
          width: { md: `calc(100% - ${currentDrawerWidth}px)` },
          minHeight: '100vh',
          // ✅ remove top gap only on home
          mt: location.pathname === '/' ? 0 : '64px',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        {breadcrumbs.length > 0 && (
          <Breadcrumbs
            aria-label="breadcrumb"
            sx={{ mb: 1.5, fontSize: '0.75rem' }}
            separator="›"
          >
            {breadcrumbs.map((crumb, index) => {
              const isLast = index === breadcrumbs.length - 1
              return isLast ? (
                <Typography key={crumb.path} color="text.primary" sx={{ fontSize: '0.75rem' }}>
                  {crumb.label}
                </Typography>
              ) : (
                <Link
                  key={crumb.path}
                  component={RouterLink}
                  to={crumb.path}
                  sx={{
                    color: 'text.secondary',
                    textDecoration: 'none',
                    fontSize: '0.75rem',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  {crumb.label}
                </Link>
              )
            })}
          </Breadcrumbs>
        )}
        <Outlet />
        
        {/* FOOTER */}
        <Box
          sx={{
            position: 'relative',
            left: '50%',
            ml: { xs: '-50vw', md: `calc(-50vw + ${currentDrawerWidth / 2}px)` },
            width: { xs: '100vw', md: `calc(100vw - ${currentDrawerWidth}px)` },
            mt: { xs: 6, md: 10 },
            mb: 0,
            py: { xs: 4, md: 6 },
            px: { xs: 2, sm: 3, md: 4 },
            bgcolor: '#0a0d1f',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            overflow: 'hidden',
            boxSizing: 'border-box',
            transition: theme.transitions.create(['width', 'margin-left'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
          }}
        >
          <Container 
            maxWidth="lg" 
            sx={{ 
              px: { xs: 2, sm: 3, md: 3, lg: 4 },
              width: '100%',
              maxWidth: { xs: '100%', sm: '100%', md: '100%', lg: '1280px' },
              boxSizing: 'border-box',
              mb: 0,
              pb: 0,
            }}
          >
            <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: { xs: '1fr', sm: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, 
              gap: { xs: 4, sm: 3, md: 3, lg: 4 },
              width: '100%',
              maxWidth: '100%',
              boxSizing: 'border-box',
              overflow: 'hidden',
              mb: 0,
              pb: 0,
            }}>
              
              {/* Column 1 */}
              <Box sx={{ 
                gridColumn: { xs: '1 / -1', sm: '1 / -1', md: '1 / -1', lg: 'auto' },
                minWidth: 0,
                width: '100%',
                maxWidth: '100%',
                boxSizing: 'border-box',
                overflow: 'hidden',
              }}>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1.2, flexWrap: 'wrap' }}>
                  <Code sx={{ opacity: 0.8, fontSize: { xs: '1.2rem', md: '1.5rem' } }} />
                  <Link
                    href="https://designincode.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 0.5,
                      fontWeight: 800,
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      opacity: 0.9,
                      color: 'inherit',
                      textDecoration: 'none',
                      '&:hover': { opacity: 1, textDecoration: 'underline' },
                    }}
                  >
                    DesignInCode.ai
                  </Link>
                </Stack>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    mt: 1.2, 
                    opacity: 0.6, 
                    lineHeight: 1.7, 
                    wordWrap: 'break-word', 
                    overflowWrap: 'break-word',
                    fontSize: { xs: '0.875rem', md: '1rem' },
                    width: '100%',
                    maxWidth: '100%',
                    boxSizing: 'border-box',
                    overflow: 'hidden',
                  }}
                >
                  A maker-enablement platform for designers who want to ship real software, fast, without surrendering the craft.
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    mt: 2, 
                    opacity: 0.5, 
                    fontSize: { xs: '0.8rem', md: '0.875rem' },
                    wordWrap: 'break-word',
                    overflowWrap: 'break-word',
                    width: '100%',
                    maxWidth: '100%',
                    boxSizing: 'border-box',
                  }}
                >
                  © 2025 MajorX.ai LLC
                </Typography>
                <Typography 
                  variant="caption" 
                  sx={{ 
                    display: 'block', 
                    mt: 0.5, 
                    opacity: 0.35, 
                    fontSize: { xs: '0.7rem', md: '0.75rem' },
                    wordWrap: 'break-word',
                    overflowWrap: 'break-word',
                    width: '100%',
                    maxWidth: '100%',
                    boxSizing: 'border-box',
                  }}
                >
                  Built in Texas ✦ deployed everywhere
                </Typography>
              </Box>

              {/* Column 2 */}
              <Box sx={{ 
                textAlign: { xs: 'left', md: 'left', lg: 'center' },
                gridColumn: { xs: '1', sm: '1', md: '1', lg: 'auto' },
                minWidth: 0,
                width: '100%',
                maxWidth: '100%',
                boxSizing: 'border-box',
                overflow: 'hidden',
              }}>
                <Typography sx={{ fontWeight: 800, fontSize: { xs: '0.9rem', md: '1rem' }, opacity: 0.8, mb: 1 }}>
                  Navigation
                </Typography>
                <Stack spacing={1}>
                  {[
                    { label: 'Get Started', path: '/getting-started' },
                    { label: 'Build with React', path: '/build-react' },
                    { label: 'Build with Python', path: '/tutorials/setup-python' },
                    { label: 'Collab with Dev Teams', path: '/tutorials/clone-repo' },
                  ].map((link) => (
                    <Link
                      key={link.label}
                      onClick={() => navigate(link.path)}
                      sx={{ 
                        cursor: 'pointer', 
                        opacity: 0.55, 
                        '&:hover': { opacity: 0.85 },
                        display: 'block',
                        wordWrap: 'break-word',
                        overflowWrap: 'break-word',
                        fontSize: { xs: '0.875rem', md: '1rem' },
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </Stack>
              </Box>

              {/* Column 3 */}
              <Box sx={{ 
                textAlign: { xs: 'left', md: 'left', lg: 'right' },
                gridColumn: { xs: '1', sm: '1', md: '2', lg: 'auto' },
                minWidth: 0,
                width: '100%',
                maxWidth: '100%',
                boxSizing: 'border-box',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'flex-start', md: 'flex-start', lg: 'flex-end' },
              }}>
                <Typography sx={{ fontWeight: 800, fontSize: { xs: '0.9rem', md: '1rem' }, opacity: 0.8, mb: 1, width: '100%' }}>
                  Connect
                </Typography>

                <Stack 
                  direction="row" 
                  spacing={1.5} 
                  justifyContent={{ xs: 'flex-start', md: 'flex-start', lg: 'flex-end' }}
                  sx={{ flexWrap: 'wrap', width: '100%' }}
                >
                  <Tooltip title="GitHub">
                    <IconButton
                      component="a"
                      href="https://github.com/54321jenn/designincode"
                      target="_blank"
                      size="small"
                      sx={{ opacity: 0.6, '&:hover': { opacity: 1 } }}
                    >
                      <GitHubIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="X / Twitter">
                    <IconButton
                      component="a"
                      href="https://x.com/designincodeAI"
                      target="_blank"
                      size="small"
                      sx={{ opacity: 0.6, '&:hover': { opacity: 1 } }}
                    >
                      <XIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="LinkedIn">
                    <IconButton
                      component="a"
                      href="https://linkedin.com/company/designincode"
                      target="_blank"
                      size="small"
                      sx={{ opacity: 0.6, '&:hover': { opacity: 1 } }}
                    >
                      <LinkedIn fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </Stack>

                <Typography 
                  variant="body2" 
                  sx={{ 
                    mt: 2, 
                    opacity: 0.45, 
                    fontSize: { xs: '0.8rem', md: '0.875rem' },
                    wordWrap: 'break-word',
                    overflowWrap: 'break-word',
                    width: '100%',
                    maxWidth: '100%',
                    boxSizing: 'border-box',
                    textAlign: { xs: 'left', md: 'left', lg: 'right' },
                  }}
                >
                  Made for designers who ship.
                </Typography>
              </Box>

            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  )
}

