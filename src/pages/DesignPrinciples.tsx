import { Box, Typography, Grid, Card, CardContent, Stack } from '@mui/material'
import { Palette, TextFields, SpaceBar, Contrast, GridOn, Animation } from '@mui/icons-material'

const principles = [
  {
    title: 'Color Theory',
    description: 'Learn how to create harmonious color palettes and use color to convey meaning.',
    icon: <Palette sx={{ fontSize: 32 }} />,
    color: '#6366f1',
  },
  {
    title: 'Typography',
    description: 'Master font pairing, hierarchy, and readability for better user experience.',
    icon: <TextFields sx={{ fontSize: 32 }} />,
    color: '#ec4899',
  },
  {
    title: 'Spacing & Layout',
    description: 'Use whitespace effectively and create balanced, structured layouts.',
    icon: <SpaceBar sx={{ fontSize: 32 }} />,
    color: '#14b8a6',
  },
  {
    title: 'Contrast & Hierarchy',
    description: 'Guide user attention with visual weight and information hierarchy.',
    icon: <Contrast sx={{ fontSize: 32 }} />,
    color: '#f59e0b',
  },
  {
    title: 'Grid Systems',
    description: 'Build consistent layouts using grid-based design principles.',
    icon: <GridOn sx={{ fontSize: 32 }} />,
    color: '#8b5cf6',
  },
  {
    title: 'Motion Design',
    description: 'Add meaningful animations that enhance usability and delight users.',
    icon: <Animation sx={{ fontSize: 32 }} />,
    color: '#06b6d4',
  },
]

export default function DesignPrinciples() {
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
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateX(4px)',
                },
              }}
            >
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
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

