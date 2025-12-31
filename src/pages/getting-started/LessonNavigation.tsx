import { Card, CardContent, CardActionArea, Typography, Stack, Box } from '@mui/material'
import { useNavigate, useLocation } from 'react-router-dom'
import { ArrowBack, ArrowForward } from '@mui/icons-material'

// Define lesson sequences for each section
const lessonSequences: Record<string, string[]> = {
  'get-started': [
    '/getting-started',
    '/getting-started/editor',
    '/getting-started/assistants',
    '/tutorials/command-line',
    '/getting-started/git',
    '/build-react',
  ],
  'build-react': [
    '/build-react',
    '/getting-started/toolchain',
    '/getting-started/quickstart-vite',
    '/getting-started/mui',
    '/tutorials/vercel-publishing',
  ],
  'build-python': ['/tutorials/setup-python', '/tutorials/hello-world-streamlit'],
  'collab': ['/tutorials/clone-repo', '/tutorials/pull-requests'],
}

// Map paths to their section and display names
const pathToInfo: Record<string, { section: string; title: string }> = {
  '/getting-started': { section: 'get-started', title: 'Get Started' },
  '/getting-started/editor': { section: 'get-started', title: 'Editor Setup' },
  '/getting-started/assistants': { section: 'get-started', title: 'AI Assistants' },
  '/getting-started/git': { section: 'get-started', title: 'Git + GitHub' },
  '/tutorials/command-line': { section: 'get-started', title: 'Command Line' },
  '/build-react': { section: 'build-react', title: 'Build with React' },
  '/getting-started/toolchain': { section: 'build-react', title: 'Setup React' },
  '/getting-started/quickstart-vite': { section: 'build-react', title: 'Quickstart with Vite' },
  '/getting-started/mui': { section: 'build-react', title: 'UI Kit (MUI)' },
  '/tutorials/vercel-publishing': { section: 'build-react', title: 'Publishing with Vercel' },
  '/tutorials/setup-python': { section: 'build-python', title: 'Setup Python' },
  '/tutorials/hello-world-streamlit': { section: 'build-python', title: 'Hello World with Streamlit' },
  '/tutorials/clone-repo': { section: 'collab', title: 'Clone a Repository' },
  '/tutorials/pull-requests': { section: 'collab', title: 'Pull Requests' },
}

export default function LessonNavigation() {
  const navigate = useNavigate()
  const location = useLocation()
  const currentPath = location.pathname

  const currentInfo = pathToInfo[currentPath]
  if (!currentInfo) return null

  const sequence = lessonSequences[currentInfo.section]
  if (!sequence) return null

  const currentIndex = sequence.indexOf(currentPath)
  if (currentIndex === -1) return null

  const previousPath = currentIndex > 0 ? sequence[currentIndex - 1] : null
  const nextPath = currentIndex < sequence.length - 1 ? sequence[currentIndex + 1] : null

  const previousInfo = previousPath ? pathToInfo[previousPath] : null
  const nextInfo = nextPath ? pathToInfo[nextPath] : null

  return (
    <Box sx={{ mt: 6, mb: 2, display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        sx={{ maxWidth: 800, width: '100%' }}
      >
        <Box sx={{ flex: previousPath && nextPath ? '1 1 0' : '1 1 100%' }}>
          {previousPath && previousInfo ? (
            <Card sx={{ height: '100%', border: '1px solid', borderColor: 'divider', pr: previousPath && nextPath ? 1 : 0 }}>
              <CardActionArea onClick={() => navigate(previousPath)} sx={{ height: '100%' }}>
                <CardContent sx={{ pr: 3 }}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <ArrowBack color="action" />
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'uppercase', fontSize: '0.7rem' }}>
                        Previous
                      </Typography>
                      <Typography variant="h6" component="div" sx={{ mt: 0.5 }}>
                        {previousInfo.title}
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
          ) : (
            <Card sx={{ height: '100%', border: '1px solid', borderColor: 'divider', opacity: 0.5, pr: previousPath && nextPath ? 1 : 0 }}>
              <CardContent sx={{ pr: 3 }}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <ArrowBack color="disabled" />
                  <Box>
                    <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'uppercase', fontSize: '0.7rem' }}>
                      Previous
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                      No previous
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          )}
        </Box>
        <Box sx={{ flex: previousPath && nextPath ? '1 1 0' : '1 1 100%' }}>
          {nextPath && nextInfo ? (
            <Card sx={{ height: '100%', border: '1px solid', borderColor: 'divider', pl: previousPath && nextPath ? 1 : 0 }}>
              <CardActionArea onClick={() => navigate(nextPath)} sx={{ height: '100%' }}>
                <CardContent sx={{ pl: 3 }}>
                  <Stack direction="row" spacing={2} alignItems="center" justifyContent="flex-end">
                    <Box sx={{ flexGrow: 1, textAlign: 'right' }}>
                      <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'uppercase', fontSize: '0.7rem' }}>
                        Next
                      </Typography>
                      <Typography variant="h6" component="div" sx={{ mt: 0.5 }}>
                        {nextInfo.title}
                      </Typography>
                    </Box>
                    <ArrowForward color="action" />
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
          ) : (
            <Card sx={{ height: '100%', border: '1px solid', borderColor: 'divider', opacity: 0.5, pl: previousPath && nextPath ? 1 : 0 }}>
              <CardContent sx={{ pl: 3 }}>
                <Stack direction="row" spacing={2} alignItems="center" justifyContent="flex-end">
                  <Box sx={{ textAlign: 'right' }}>
                    <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'uppercase', fontSize: '0.7rem' }}>
                      Next
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                      No next
                    </Typography>
                  </Box>
                  <ArrowForward color="disabled" />
                </Stack>
              </CardContent>
            </Card>
          )}
        </Box>
      </Stack>
    </Box>
  )
}

