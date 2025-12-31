import { Typography, Paper, Link, Divider, Button, Stack, Box } from '@mui/material'
import { OpenInNew, Widgets } from '@mui/icons-material'
import GettingStartedLayout, { CodeBlock } from './_GettingStartedLayout'

export default function MuiSetup() {
  return (
    <GettingStartedLayout
      title="UI Kit (MUI)"
      subtitle="Add Material UI so you can build polished components quickly."
    >
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          What is MUI?
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Material UI is an open-source React component library that implements Google's{' '}
          <Link href="https://m2.material.io/" target="_blank" rel="noopener noreferrer" sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5 }}>
            Material Design
            <OpenInNew sx={{ fontSize: '0.875rem' }} />
          </Link>
          .
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          It provides a collection of pre-built, customizable components like buttons, forms, navigation, and
          layouts that you can use to quickly build beautiful, consistent user interfaces.
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          MUI components are production-ready, accessible, and fully customizable. Instead of building UI components from
          scratch, you can use MUI's components and focus on building your application's unique features.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          To learn more about MUI and explore all available components, visit{' '}
          <Link href="https://mui.com" target="_blank" rel="noopener noreferrer" sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5 }}>
            mui.com
            <OpenInNew sx={{ fontSize: '0.875rem' }} />
          </Link>
          .
        </Typography>
      </Paper>

      <Divider sx={{ my: 2 }} />

      <CodeBlock
        label="Install MUI"
        code={`npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material @fontsource/roboto`}
      />

      <Typography variant="body2" color="text.secondary">
        Next we'll wire the theme and build your first layout component.
      </Typography>

      <Paper sx={{ p: 3, mt: 3, bgcolor: 'primary.dark', color: 'primary.contrastText' }}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Widgets sx={{ fontSize: 40 }} />
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" gutterBottom>
              Explore MUI Templates
            </Typography>
            <Typography variant="body2" paragraph>
              Get started faster with free React templates from MUI. Browse dashboard layouts, marketing pages, checkout
              flows, sign-in pages, and more. All templates include custom themes with light and dark modes.
            </Typography>
            <Button
              variant="contained"
              href="https://mui.com/material-ui/getting-started/templates/"
              target="_blank"
              rel="noopener noreferrer"
              endIcon={<OpenInNew />}
              sx={{ mt: 1, bgcolor: 'primary.contrastText', color: 'primary.dark', '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' } }}
            >
              Browse Templates
            </Button>
          </Box>
        </Stack>
      </Paper>
    </GettingStartedLayout>
  )
}