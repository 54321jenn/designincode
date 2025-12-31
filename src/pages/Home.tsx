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
  Stack
} from '@mui/material'
import { Code, AutoAwesome, FlightTakeoff, Bolt, Psychology, DataObject } from '@mui/icons-material'
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
              Learn how to design in code!
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
            onClick={() => navigate('/getting-started')}
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
    </Box>

  )
}