import { Box, Typography, Stack, Paper, Alert } from '@mui/material'
import { Lightbulb } from '@mui/icons-material'

export default function GettingStartedLayout({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle: string
  children: React.ReactNode
}) {
  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        {subtitle}
      </Typography>

      <Alert icon={<Lightbulb />} severity="info" sx={{ mb: 3 }}>
        Tip: Keep a terminal open and copy-paste the commands. You’re learning by shipping.
      </Alert>

      <Stack spacing={3}>{children}</Stack>
    </Box>
  )
}

export function CodeBlock({ label, code }: { label?: string; code: string }) {
  return (
    <Paper
      sx={{
        p: 2,
        bgcolor: '#0d1117',
        borderRadius: 2,
        fontFamily: 'monospace',
        overflow: 'auto',
      }}
    >
      {label && (
        <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
          {label}
        </Typography>
      )}
      <pre style={{ margin: 0, color: '#e6edf3' }}>{code}</pre>
    </Paper>
  )
}