import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  Chip,
  Container,
  Button, 
  Divider,
  Stack, 
  Link,
  Tooltip,
  IconButton
} from '@mui/material'
import { Code, AutoAwesome, GitHub, X, LinkedIn, FlightTakeoff, Bolt, Psychology, DataObject, AllInclusive } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

// Adjust path to wherever you store the image
import heroImage from '../assets/hero.png'

const features = [
  {
    title: 'Get Started',
    description: 'Everything you need to begin your coding journey. Set up your tools, learn the basics, and get ready to build.',
    icon: <AutoAwesome sx={{ fontSize: 40 }} />,
    path: '/getting-started/editor',
    chip: 'Start here',
    glow: '#7c3aed',
  },
  {
    title: 'Build with React',
    description: 'Create beautiful web applications with React. From setup to deployment, we\'ll guide you every step of the way.',
    icon: <Code sx={{ fontSize: 40 }} />,
    path: '/getting-started/toolchain',
    chip: 'React apps',
    glow: '#6366f1',
  },
  {
    title: 'Build with Python',
    description: 'Create interactive applications and data tools with Python. Turn your creative ideas into working prototypes and useful tools.',
    icon: <DataObject sx={{ fontSize: 40 }} />,
    path: '/tutorials/setup-python',
    chip: 'Python apps',
    glow: '#14b8a6',
  },
]

export default function Home() {
  const navigate = useNavigate()

  return (
    <Box sx={{ p: 0, m: 0 }}>
      {/* HERO SECTION (single full-bleed background image behind text) */}
      <Box
        sx={{
          position: 'relative',
          left: '50%',
          ml: '-50vw',
          width: '100vw',
          minHeight: { xs: 360, md: 400 },
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          mb: 6,

          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay for readability */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(6,8,20,0.55) 0%, rgba(6,8,20,0.78) 60%, rgba(6,8,20,0.92) 100%)',
          }}
        />

        {/* Subtle vignette/glow */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(60% 60% at 50% 35%, rgba(124,58,237,0.18) 0%, rgba(0,0,0,0) 60%)',
            pointerEvents: 'none',
          }}
        />

        {/* Content */}
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, px: { xs: 2, sm: 3, md: 4 } }}>
          <Box
            sx={{
              textAlign: 'center',
              py: { xs: 8, md: 10 },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
              width: '100%',
            }}
          >
            <Chip
              label="Welcome to Design in Code"
              sx={{
                fontWeight: 700,
                px: 1,
                bgcolor: 'rgba(124,58,237,0.25)',
                border: '1px solid rgba(124,58,237,0.45)',
                color: 'rgba(255,255,255,0.92)',
                backdropFilter: 'blur(8px)',
              }}
            />

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.4rem', sm: '3rem', md: '3rem', lg: '4.2rem' },
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                textShadow: '0 8px 30px rgba(0,0,0,0.55)',
                maxWidth: '100%',
                width: '100%',
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
                hyphens: 'auto',
              }}
            >
              Learn how to Design in Code!
            </Typography>

            <Typography
              variant="h6"
              sx={{
                maxWidth: { xs: '100%', md: 680 },
                px: { xs: 2, md: 0 },
                color: 'rgba(255,255,255,0.82)',
                textShadow: '0 6px 24px rgba(0,0,0,0.45)',
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
              }}
            >
              Design like a pro. Build like a dev.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* PAGE CONTENT (constrained) */}
      {/* EXPLAINER SECTION */}
<Container maxWidth="lg">
  <Box
    sx={{
      mb: 5,
      mt: { xs: 2, md: 3 },
      px: { xs: 0, md: 1 },
    }}
  >
    <Box
      sx={{
        borderRadius: 4,
        border: '1px solid rgba(255,255,255,0.08)',
        bgcolor: 'rgba(255,255,255,0.03)',
        overflow: 'hidden',
      }}
    >
      {/* Top row */}
      <Box sx={{ p: { xs: 3, md: 4 } }}>
        <Typography variant="h4" sx={{ fontWeight: 800, letterSpacing: '-0.01em' }}>
          A flight school for designers
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mt: 1.5,
            color: 'rgba(255,255,255,0.78)',
            maxWidth: { xs: '100%', md: 880 },
            lineHeight: 1.7,
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
          }}
        >
          Learn how to build applications without all the technical jargon.  You'll learn the minimum effective code, tooling, and workflows to build, iterate, and deliver coded designs with confidence.
        </Typography>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={1.5}
          sx={{ mt: 3, alignItems: { sm: 'center' } }}
        >
          <Button
            variant="contained"
            onClick={() => navigate('/getting-started/editor')}
            sx={{
              borderRadius: 2.5,
              px: 2.5,
              py: 1.1,
              fontWeight: 700,
              bgcolor: 'rgba(124,58,237,0.9)',
              '&:hover': { bgcolor: 'rgba(124,58,237,1)' },
            }}
          >
            Start here
          </Button>
        </Stack>
      </Box>

      <Divider sx={{ borderColor: 'rgba(255,255,255,0.06)' }} />

      {/* 3 pillars */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          gap: 0,
        }}
      >
        {[
          {
            icon: <FlightTakeoff sx={{ fontSize: 26 }} />,
            title: 'OJT, not courses',
            body: 'Short “recipes” you can return to when you need them. No quizzes, just hands-on learning.',
          },
          {
            icon: <Bolt sx={{ fontSize: 26 }} />,
            title: 'Ship-first workflows',
            body: 'Vite, GitHub, PRs, and tiny commits. Build momentum in minutes.',
          },
          {
            icon: <Psychology sx={{ fontSize: 26 }} />,
            title: 'Collab directly with dev',
            body: "No more waiting for design to be implemented.",
          },
        ].map((item) => (
          <Box
            key={item.title}
            sx={{
              p: { xs: 3, md: 3.5 },
              borderRight: { xs: 'none', md: '1px solid rgba(255,255,255,0.06)' },
              '&:last-of-type': { borderRight: 'none' },
            }}
          >
            <Box sx={{ color: 'rgba(124,58,237,0.95)' }}>{item.icon}</Box>
            <Typography sx={{ mt: 1, fontWeight: 800 }}>{item.title}</Typography>
            <Typography sx={{ mt: 0.8, color: 'rgba(255,255,255,0.72)', lineHeight: 1.6 }}>
              {item.body}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  </Box>
</Container>
      <Container maxWidth="lg">
        {/* TILES GRID */}
        <Box
          sx={{
            display: 'grid',
            gap: 3,
            justifyContent: 'center',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(3, minmax(0, 1fr))',
            },
          }}
        >
          {features.map((feature) => (
            <Box key={feature.title} sx={{ width: '100%' }}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 3,
                  border: '1px solid rgba(255,255,255,0.06)',
                  bgcolor: 'rgba(255,255,255,0.03)',
                  transition: 'transform 0.18s, box-shadow 0.18s, border-color 0.18s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: `0 12px 36px ${feature.glow}33`,
                    borderColor: `${feature.glow}88`,
                  },
                }}
              >
                <CardActionArea onClick={() => navigate(feature.path)} sx={{ height: '100%' }}>
                  <CardContent>
                    <Stack spacing={2}>
                      <Box sx={{ color: feature.glow, textAlign: 'center' }}>{feature.icon}</Box>

                      <Typography
                        variant="h5"
                        component="h2"
                        sx={{ fontWeight: 700, textAlign: 'center' }}
                      >
                        {feature.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ textAlign: 'center', px: 1 }}
                      >
                        {feature.description}
                      </Typography>

                      {feature.chip && (
                        <Box sx={{ textAlign: 'center' }}>
                          <Chip
                            label={feature.chip}
                            size="small"
                            sx={{
                              bgcolor: `${feature.glow}22`,
                              border: `1px solid ${feature.glow}55`,
                              fontWeight: 600,
                            }}
                          />
                        </Box>
                      )}
                    </Stack>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
          {/* FOOTER */}
<Box
  sx={{
    position: 'relative',
    left: '50%',
    ml: { xs: '-50vw', md: 'calc(-50vw + 140px)' }, // Account for expanded sidebar (280px / 2)
    width: { xs: '100vw', md: 'calc(100vw - 280px)' }, // Full width minus expanded sidebar (worst case)
    mt: { xs: 6, md: 10 },
    mb: 0,
    py: { xs: 4, md: 6 },
    px: { xs: 2, sm: 3, md: 4 },
    bgcolor: '#0a0d1f',
    borderTop: '1px solid rgba(255,255,255,0.08)',
    overflow: 'hidden',
    boxSizing: 'border-box',
    transition: 'width 0.3s ease, margin-left 0.3s ease', // Smooth transition when sidebar toggles
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
          <AllInclusive sx={{ opacity: 0.8, fontSize: { xs: '1.2rem', md: '1.5rem' } }} />
          <Link
            href="https://majorx.ai"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '1rem', md: '1.1rem' },
              opacity: 0.9,
              color: 'inherit',
              textDecoration: 'none',
              '&:hover': { opacity: 1, textDecoration: 'underline' },
            }}
          >
            MajorX.ai
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
            { label: 'Getting Started', path: '/getting-started/editor' },
            { label: 'Tutorials', path: '/tutorials/command-line' },
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
              <GitHub fontSize="small" />
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
              <X fontSize="small" />
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

  )
}