import { Button, Paper, Typography, Stack } from '@mui/material'
import GettingStartedLayout, { CodeBlock } from './_GettingStartedLayout'
import { Download } from '@mui/icons-material'

export default function EditorSetup() {
  return (
    <GettingStartedLayout
      title="Editor Setup"
      subtitle="Install VS Code and get your workspace ready."
    >
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems={{ sm: 'center' }}>
        <Button
          variant="contained"
          startIcon={<Download />}
          href="https://code.visualstudio.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download VS Code
        </Button>
        <Typography variant="body2" color="text.secondary">
          Already installed? Open it now. We’ll use the integrated terminal.
        </Typography>
      </Stack>

      <Paper sx={{ p: 2 }}>
        <Typography variant="subtitle1" gutterBottom>
          Recommended extensions (optional)
        </Typography>
        <Typography variant="body2" color="text.secondary" component="div">
          <ul style={{ margin: 0, paddingLeft: 18 }}>
            <li><strong>ESLint</strong></li>
            <li><strong>Prettier</strong></li>
            <li><strong>Material Icon Theme</strong> (nice)</li>
          </ul>
        </Typography>
      </Paper>

      <CodeBlock
        label="VS Code Terminal"
        code={`Open the integrated terminal:
View → Terminal`}
      />
    </GettingStartedLayout>
  )
}