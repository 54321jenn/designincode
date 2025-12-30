import { Box, Typography, Card, CardContent, CardActionArea, Chip, Stack } from '@mui/material'
import { School, Code, Palette, AutoAwesome } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

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
    <Box>
      {/* HERO SECTION */}
      <Box sx={{ mb: 6, textAlign: 'center', py: 4 }}>
        <Chip
          label="Welcome to Design in Code"
          color="primary"
          sx={{ mb: 2, fontWeight: 600, px: 1 }}
        />

        <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, fontWeight: 700, lineHeight: 1.05 }}>
          Learn how to Design in Code!
        </Typography>

        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto', mt: 2 }}>
           Design like a pro. Build like a dev.
        </Typography>
      </Box>

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

              <Typography variant="h5" component="h2" sx={{ fontWeight: 700, textAlign: 'center' }}>
                {feature.title}
              </Typography>

              <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', px: 1 }}>
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
    </Box>
  )
}