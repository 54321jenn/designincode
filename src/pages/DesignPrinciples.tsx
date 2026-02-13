import { Box, Typography, Grid, Card, CardContent, CardActionArea, Stack, Chip } from '@mui/material'
import { Palette, TextFields, SpaceBar, Contrast, GridOn, Animation } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const principles = [
  {
    title: 'Color Theory',
    description: 'Learn how to create harmonious color palettes and use color to convey meaning.',
    icon: <Palette sx={{ fontSize: 32 }} />,
    color: '#6366f1',
    path: null, // Coming soon
  },
  {
    title: 'Typography',
    description: 'Master font pairing, hierarchy, and readability for better user experience.',
    icon: <TextFields sx={{ fontSize: 32 }} />,
    color: '#ec4899',
    path: '/design-principles/typography',
  },
  {
    title: 'Spacing & Layout',
    description: 'Use whitespace effectively and create balanced, structured layouts.',
    icon: <SpaceBar sx={{ fontSize: 32 }} />,
    color: '#14b8a6',
    path: null, // Coming soon
  },
  {
    title: 'Contrast & Hierarchy',
    description: 'Guide user attention with visual weight and information hierarchy.',
    icon: <Contrast sx={{ fontSize: 32 }} />,
    color: '#f59e0b',
    path: null, // Coming soon
  },
  {
    title: 'Grid Systems',
    description: 'Build consistent layouts using grid-based design principles.',
    icon: <GridOn sx={{ fontSize: 32 }} />,
    color: '#8b5cf6',
    path: null, // Coming soon
  },
  {
    title: 'Motion Design',
    description: 'Add meaningful animations that enhance usability and delight users.',
    icon: <Animation sx={{ fontSize: 32 }} />,
    color: '#06b6d4',
    path: null, // Coming soon
  },
]

export default function DesignPrinciples() {
  const navigate = useNavigate()
  
  return (
    <Box>
      <Typography variant="h2" gutterBottom>
        Design Principles
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Fundamental concepts that will help you create beautiful, functional interfaces.
      </Typography>

      <Grid container spacing={3}>
        {principles.map((principle) => (
          <Grid size={{ xs: 12, sm: 6 }} key={principle.title}>
            <Card
              sx={{
                height: '100%',
                borderLeft: `4px solid ${principle.color}`,
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: principle.path ? 'pointer' : 'default',
                opacity: principle.path ? 1 : 0.7,
                '&:hover': principle.path ? {
                  transform: 'translateX(4px)',
                  boxShadow: `0 4px 20px ${principle.color}33`,
                } : {},
              }}
            >
              {principle.path ? (
                <CardActionArea onClick={() => navigate(principle.path!)} sx={{ height: '100%' }}>
                  <CardContent>
                    <Stack direction="row" spacing={2} alignItems="flex-start">
                      <Box sx={{ color: principle.color }}>
                        {principle.icon}
                      </Box>
                      <Box>
                        <Typography variant="h6" gutterBottom>
                          {principle.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {principle.description}
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </CardActionArea>
              ) : (
                <CardContent>
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <Box sx={{ color: principle.color }}>
                      {principle.icon}
                    </Box>
                    <Box>
                      <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                        <Typography variant="h6">
                          {principle.title}
                        </Typography>
                        <Chip label="Coming soon" size="small" variant="outlined" />
                      </Stack>
                      <Typography variant="body2" color="text.secondary">
                        {principle.description}
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              )}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

