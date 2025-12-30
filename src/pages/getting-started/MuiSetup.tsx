import { Typography } from '@mui/material'
import GettingStartedLayout, { CodeBlock } from './_GettingStartedLayout'

export default function MuiSetup() {
  return (
    <GettingStartedLayout
      title="UI Kit (MUI)"
      subtitle="Add Material UI so you can build polished components quickly."
    >
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