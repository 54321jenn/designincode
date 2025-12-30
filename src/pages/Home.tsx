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
import { School, Code, Palette, AutoAwesome, GitHub, X, LinkedIn, FlightTakeoff, Bolt, Psychology } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

// Adjust path to wherever you store the image
import heroImage from '../assets/hero.png'

const features = [
  {
    title: 'Editor Setup',
    description: 'Install Visual Studio Code and prep your workspace.',
    icon: <AutoAwesome sx={{ fontSize: 40 }} />,
    path: '/getting-started/editor',
    chip: 'Start here',
    glow: '#7c3aed',
  },
  {
    title: 'AI Assistants',
    description: 'Choose your co-pilot: Augment for VS Code or Cursor for speed.',
    icon: <Palette sx={{ fontSize: 40 }} />,
    path: '/getting-started/assistants',
    chip: 'Pick one',
    glow: '#6366f1',
  },
  {
    title: 'Git + GitHub',
    description: 'Create your GitHub account and push your first repo from VS Code.',
    icon: <Code sx={{ fontSize: 40 }} />,
    path: '/getting-started/git',
    chip: 'Commit + push',
    glow: '#ec4899',
  },
  {
    title: 'Toolchain',
    description: 'Install Homebrew, Node, scaffold React with Vite, and run it.',
    icon: <School sx={{ fontSize: 40 }} />,
    path: '/getting-started/toolchain',
    chip: 'Dev tools',
    glow: '#14b8a6',
  },
  {
    title: 'UI Kit (MUI)',
    description: 'Install Material UI and wire your theme.',
    icon: <Palette sx={{ fontSize: 40 }} />,
    path: '/getting-started/mui',
    chip: 'UI kit',
    glow: '#0ea5e9',
  },
  {
    title: 'First App',
    description: 'Scaffold, edit one thing, see it reload. Ship the win.',
    icon: <AutoAwesome sx={{ fontSize: 40 }} />,
    path: '/getting-started/first-app',
    chip: 'Tiny change',
    glow: '#8b5cf6',
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
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box
            sx={{
              textAlign: 'center',
              py: { xs: 8, md: 10 },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
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
                fontSize: { xs: '2.4rem', md: '4.2rem' },
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                textShadow: '0 8px 30px rgba(0,0,0,0.55)',
                maxWidth: 980,
              }}
            >
              Learn how to Design in Code!
            </Typography>

            <Typography
              variant="h6"
              sx={{
                maxWidth: 680,
                color: 'rgba(255,255,255,0.82)',
                textShadow: '0 6px 24px rgba(0,0,0,0.45)',
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
            maxWidth: 880,
            lineHeight: 1.7,
          }}
        >
          Design in Code teaches how to design hands on in code without becoming an engineer.
          You’ll learn the minimum effective code, tooling, and workflows to build, iterate, and deliver with confidence.
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
            Start here: Editor Setup
          </Button>

          <Button
            variant="outlined"
            onClick={() => navigate('/getting-started/first-app')}
            sx={{
              borderRadius: 2.5,
              px: 2.5,
              py: 1.1,
              fontWeight: 700,
              borderColor: 'rgba(255,255,255,0.22)',
              color: 'rgba(255,255,255,0.86)',
              '&:hover': { borderColor: 'rgba(255,255,255,0.35)' },
            }}
          >
            Jump to: First App
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
            body: 'Short “recipes” you can return to when you need them. No quiz trauma.',
          },
          {
            icon: <Bolt sx={{ fontSize: 26 }} />,
            title: 'Ship-first workflows',
            body: 'Vite, GitHub, PRs, and tiny commits. Build momentum in minutes.',
          },
          {
            icon: <Psychology sx={{ fontSize: 26 }} />,
            title: 'Design stays in the cockpit',
            body: 'You’ll stay a designer, but become lethal at delivery.',
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
    ml: '-50vw',
    width: '100vw',
    mt: 10,
    py: 6,
    px: 3,
    bgcolor: '#0a0d1f',
    borderTop: '1px solid rgba(255,255,255,0.08)',
  }}
>
  <Container maxWidth="lg">
    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 4 }}>
      
      {/* Column 1 */}
      <Box>
        <Stack direction="row" spacing={1} alignItems="center">
          <FlightTakeoff sx={{ opacity: 0.8 }} />
          <Typography sx={{ fontWeight: 800, fontSize: '1.1rem', opacity: 0.9 }}>
            DesignInCode.ai
          </Typography>
        </Stack>
        <Typography variant="body2" sx={{ mt: 1.2, opacity: 0.6, lineHeight: 1.7 }}>
          A maker-enablement platform for designers who want to ship real software, fast, without surrendering the craft.
        </Typography>
        <Typography variant="body2" sx={{ mt: 2, opacity: 0.5 }}>
          © 2025 DesignInCode.ai LLC
        </Typography>
        <Typography variant="caption" sx={{ display: 'block', mt: 0.5, opacity: 0.35 }}>
          Built in Texas ✦ deployed everywhere
        </Typography>
      </Box>

      {/* Column 2 */}
      <Box sx={{ textAlign: { xs: 'left', md: 'center' } }}>
        <Typography sx={{ fontWeight: 800, fontSize: '1rem', opacity: 0.8, mb: 1 }}>
          Navigation
        </Typography>
        <Stack spacing={1}>
          {[
            { label: 'Getting Started', path: '/getting-started/editor' },
            { label: 'Tutorials', path: '/tutorials/basics' },
            { label: 'Components', path: '/components/buttons' },
            { label: 'Design Principles', path: '/design-principles/color' },
          ].map((link) => (
            <Link
              key={link.label}
              onClick={() => navigate(link.path)}
              sx={{ cursor: 'pointer', opacity: 0.55, '&:hover': { opacity: 0.85 } }}
            >
              {link.label}
            </Link>
          ))}
        </Stack>
      </Box>

      {/* Column 3 */}
      <Box sx={{ textAlign: { xs: 'left', md: 'right' } }}>
        <Typography sx={{ fontWeight: 800, fontSize: '1rem', opacity: 0.8, mb: 1 }}>
          Connect
        </Typography>

        <Stack direction="row" spacing={1.5} justifyContent={{ xs: 'flex-start', md: 'flex-end' }}>
          <Tooltip title="GitHub">
            <IconButton
              component="a"
              href="https://github.com/54321jenn/designincode"
              target="_blank"
              sx={{ opacity: 0.6, '&:hover': { opacity: 1 } }}
            >
              <GitHub />
            </IconButton>
          </Tooltip>

          <Tooltip title="X / Twitter">
            <IconButton
              component="a"
              href="https://x.com/designincodeAI"
              target="_blank"
              sx={{ opacity: 0.6, '&:hover': { opacity: 1 } }}
            >
              <X />
            </IconButton>
          </Tooltip>

          <Tooltip title="LinkedIn">
            <IconButton
              component="a"
              href="https://linkedin.com/company/designincode"
              target="_blank"
              sx={{ opacity: 0.6, '&:hover': { opacity: 1 } }}
            >
              <LinkedIn />
            </IconButton>
          </Tooltip>
        </Stack>

        <Typography variant="body2" sx={{ mt: 2, opacity: 0.45 }}>
          Made for designers who ship.
        </Typography>
      </Box>

    </Box>
  </Container>
</Box>
    </Box>

  )
}