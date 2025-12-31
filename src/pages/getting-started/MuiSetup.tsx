import { Typography, Paper, Link, Divider } from '@mui/material'
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
          MUI (formerly Material-UI) is a comprehensive React component library that implements Google's Material Design
          principles. It provides a collection of pre-built, customizable components like buttons, forms, navigation, and
          layouts that you can use to quickly build beautiful, consistent user interfaces.
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          MUI components are production-ready, accessible, and fully customizable. Instead of building UI components from
          scratch, you can use MUI's components and focus on building your application's unique features.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          To learn more about MUI and explore all available components, visit{' '}
          <Link href="https://mui.com" target="_blank" rel="noopener noreferrer">
            mui.com
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
        Next we’ll wire the theme and build your first layout component.
      </Typography>
    </GettingStartedLayout>
  )
}