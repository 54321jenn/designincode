import { Box, Typography, Stack, Paper, IconButton, Tooltip } from '@mui/material'
import { ContentCopy, Check } from '@mui/icons-material'
import { useState } from 'react'
import { useThemeMode } from '../../contexts/ThemeContext'
import LessonNavigation from './LessonNavigation'

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
      
      <Box sx={{ mt: 4 }}>
        <LessonNavigation />
      </Box>
    </Box>
  )
}

export function CodeBlock({ label, code }: { label?: string; code: string }) {
  const [copied, setCopied] = useState(false)
  const { mode } = useThemeMode()

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const codeBgColor = mode === 'dark' ? '#0d1117' : '#f6f8fa'
  const codeTextColor = mode === 'dark' ? '#e6edf3' : '#24292f'
  const iconColor = mode === 'dark' 
    ? (copied ? '#4caf50' : '#8b949e')
    : (copied ? '#4caf50' : '#656d76')
  const iconHoverColor = mode === 'dark' ? '#c9d1d9' : '#24292f'
  const iconHoverBg = mode === 'dark' 
    ? 'rgba(255, 255, 255, 0.1)' 
    : 'rgba(0, 0, 0, 0.05)'

  return (
    <Paper
      sx={{
        p: 2,
        bgcolor: codeBgColor,
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
              color: iconColor,
              '&:hover': {
                color: copied ? '#4caf50' : iconHoverColor,
                bgcolor: iconHoverBg,
              },
              ml: 'auto',
            }}
          >
            {copied ? <Check fontSize="small" /> : <ContentCopy fontSize="small" />}
          </IconButton>
        </Tooltip>
      </Box>
      <pre style={{ margin: 0, color: codeTextColor }}>{code}</pre>
    </Paper>
  )
}