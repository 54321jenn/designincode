import { Box, Typography, Grid, Card, CardContent, Button, Stack, Chip } from '@mui/material'

const componentCategories = [
  {
    name: 'Buttons',
    count: 8,
    preview: (
      <Stack direction="row" spacing={1}>
        <Button variant="contained" size="small">Primary</Button>
        <Button variant="outlined" size="small">Outlined</Button>
      </Stack>
    ),
  },
  {
    name: 'Cards',
    count: 5,
    preview: (
      <Card sx={{ p: 1, bgcolor: 'background.default' }}>
        <Typography variant="caption">Card Preview</Typography>
      </Card>
    ),
  },
  {
    name: 'Forms',
    count: 12,
    preview: (
      <Stack direction="row" spacing={1}>
        <Chip label="Input" size="small" />
        <Chip label="Select" size="small" />
      </Stack>
    ),
  },
  {
    name: 'Navigation',
    count: 6,
    preview: (
      <Stack direction="row" spacing={1}>
        <Chip label="Tabs" size="small" variant="outlined" />
        <Chip label="Menu" size="small" variant="outlined" />
      </Stack>
    ),
  },
  {
    name: 'Feedback',
    count: 7,
    preview: (
      <Stack direction="row" spacing={1}>
        <Chip label="Alert" size="small" color="success" />
        <Chip label="Snackbar" size="small" color="info" />
      </Stack>
    ),
  },
  {
    name: 'Data Display',
    count: 9,
    preview: (
      <Stack direction="row" spacing={1}>
        <Chip label="Table" size="small" />
        <Chip label="List" size="small" />
      </Stack>
    ),
  },
]

export default function Components() {
  return (
    <Box>
      <Typography variant="h2" gutterBottom>
        Components
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Explore our collection of reusable UI components with live examples.
      </Typography>

      <Grid container spacing={3}>
        {componentCategories.map((category) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={category.name}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6">{category.name}</Typography>
                    <Chip label={`${category.count} items`} size="small" variant="outlined" />
                  </Box>
                  <Box sx={{ py: 2 }}>
                    {category.preview}
                  </Box>
                  <Button variant="text" size="small">
                    View Components →
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

