import { Box, Typography, Stack, Paper, IconButton, Tooltip } from '@mui/material'
import { ContentCopy, Check } from '@mui/icons-material'
import { useState } from 'react'

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

      <Stack spacing={3}>{children}</Stack>
    </Box>
  )
}

export function CodeBlock({ label, code }: { label?: string; code: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <Paper
      sx={{
        p: 2,
        bgcolor: '#0d1117',
        borderRadius: 2,
        fontFamily: 'monospace',
        overflow: 'auto',
        position: 'relative',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: label ? 1 : 0 }}>
        {label && (
          <Typography variant="caption" color="text.secondary">
            {label}
          </Typography>
        )}
        <Tooltip title={copied ? 'Copied!' : 'Copy code'}>
          <IconButton
            size="small"
            onClick={handleCopy}
            sx={{
              color: copied ? '#4caf50' : '#8b949e',
              '&:hover': {
                color: copied ? '#4caf50' : '#c9d1d9',
                bgcolor: 'rgba(255, 255, 255, 0.1)',
              },
              ml: 'auto',
            }}
          >
            {copied ? <Check fontSize="small" /> : <ContentCopy fontSize="small" />}
          </IconButton>
        </Tooltip>
      </Box>
      <pre style={{ margin: 0, color: '#e6edf3' }}>{code}</pre>
    </Paper>
  )
}