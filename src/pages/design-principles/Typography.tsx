import { Paper, Typography, Divider, Box, Stack, Alert, Grid } from '@mui/material'
import { Lightbulb, TextFields, LineWeight } from '@mui/icons-material'
import GettingStartedLayout, { CodeBlock } from '../getting-started/_GettingStartedLayout'
import { useThemeMode } from '../../contexts/ThemeContext'

export default function TypographyPrinciples() {
  const { mode } = useThemeMode()
  
  return (
    <GettingStartedLayout
      title="Typography"
      subtitle="Master the art of type to make your interfaces clear, readable, and beautiful"
    >
      <Paper sx={{ p: 3, bgcolor: 'primary.dark', color: 'primary.contrastText' }}>
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
          <TextFields />
          <Typography variant="h6">
            Why Typography Matters
          </Typography>
        </Stack>
        <Typography variant="body2" paragraph>
          95% of what users see on screen is text. Get typography right, and your interface feels 
          effortless. Get it wrong, and everything feels slightly off — even if users can't explain why.
        </Typography>
        <Typography variant="body2">
          Good typography isn't about picking a trendy font. It's about hierarchy, rhythm, and readability.
        </Typography>
      </Paper>

      <Divider sx={{ my: 2 }} />

      {/* HIERARCHY */}
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
          1. Hierarchy: Guide the Eye
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Hierarchy tells users what to read first, second, third. Without it, everything competes 
          for attention and nothing wins.
        </Typography>
        
        <Grid container spacing={3} sx={{ mt: 1 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box 
              sx={{ 
                p: 3, 
                borderRadius: 2, 
                border: '2px solid',
                borderColor: 'error.main',
                bgcolor: mode === 'dark' ? 'rgba(244,67,54,0.1)' : 'rgba(244,67,54,0.05)'
              }}
            >
              <Typography variant="caption" color="error.main" sx={{ fontWeight: 700 }}>
                ❌ NO HIERARCHY
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Typography sx={{ fontSize: 16, mb: 1 }}>Welcome to Our Platform</Typography>
                <Typography sx={{ fontSize: 16, mb: 1 }}>Get started with your account</Typography>
                <Typography sx={{ fontSize: 16, mb: 1 }}>Learn more about features</Typography>
                <Typography sx={{ fontSize: 16 }}>Contact support if needed</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box 
              sx={{ 
                p: 3, 
                borderRadius: 2, 
                border: '2px solid',
                borderColor: 'success.main',
                bgcolor: mode === 'dark' ? 'rgba(76,175,80,0.1)' : 'rgba(76,175,80,0.05)'
              }}
            >
              <Typography variant="caption" color="success.main" sx={{ fontWeight: 700 }}>
                ✓ CLEAR HIERARCHY
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Typography sx={{ fontSize: 24, fontWeight: 700, mb: 0.5 }}>Welcome to Our Platform</Typography>
                <Typography sx={{ fontSize: 16, color: 'text.secondary', mb: 2 }}>Get started with your account</Typography>
                <Typography sx={{ fontSize: 14, color: 'text.secondary', mb: 0.5 }}>Learn more about features</Typography>
                <Typography sx={{ fontSize: 12, color: 'text.disabled' }}>Contact support if needed</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Alert icon={<Lightbulb />} severity="info" sx={{ mt: 3 }}>
          <Typography variant="body2">
            <strong>The Rule of Three:</strong> Most interfaces need only 3 levels of hierarchy — 
            heading, body, and caption. More than that usually means you're trying to say too much.
          </Typography>
        </Alert>
      </Paper>

      {/* SCALE */}
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
          2. Scale: Create Rhythm
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          A type scale is a set of font sizes that work harmoniously together. Instead of picking 
          random sizes, use a mathematical ratio.
        </Typography>

        <Box 
          sx={{ 
            p: 3, 
            borderRadius: 2, 
            bgcolor: mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)',
            border: '1px solid',
            borderColor: 'divider'
          }}
        >
          <Typography variant="subtitle2" gutterBottom sx={{ color: 'text.secondary' }}>
            Example: 1.25 ratio (Major Third)
          </Typography>
          <Stack spacing={1} sx={{ mt: 2 }}>
            <Typography sx={{ fontSize: 12 }}>12px — Caption</Typography>
            <Typography sx={{ fontSize: 14 }}>14px — Small text</Typography>
            <Typography sx={{ fontSize: 16 }}>16px — Body (base)</Typography>
            <Typography sx={{ fontSize: 20 }}>20px — Large text</Typography>
            <Typography sx={{ fontSize: 24, fontWeight: 500 }}>24px — H4</Typography>
            <Typography sx={{ fontSize: 30, fontWeight: 600 }}>30px — H3</Typography>
            <Typography sx={{ fontSize: 38, fontWeight: 700 }}>38px — H2</Typography>
            <Typography sx={{ fontSize: 48, fontWeight: 800 }}>48px — H1</Typography>
          </Stack>
        </Box>

        <CodeBlock 
          label="MUI theme type scale"
          code={`// In your theme.ts
typography: {
  h1: { fontSize: '3rem', fontWeight: 800 },    // 48px
  h2: { fontSize: '2.375rem', fontWeight: 700 }, // 38px
  h3: { fontSize: '1.875rem', fontWeight: 600 }, // 30px
  h4: { fontSize: '1.5rem', fontWeight: 500 },   // 24px
  body1: { fontSize: '1rem' },                    // 16px (base)
  body2: { fontSize: '0.875rem' },                // 14px
  caption: { fontSize: '0.75rem' },               // 12px
}`}
        />
      </Paper>

      {/* LINE HEIGHT */}
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
          3. Line Height: Room to Breathe
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Line height (leading) is the vertical space between lines of text. Too tight feels cramped. 
          Too loose loses cohesion.
        </Typography>

        <Grid container spacing={3} sx={{ mt: 1 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ p: 2, borderRadius: 2, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider' }}>
              <Typography variant="caption" color="text.secondary" gutterBottom>
                Line height: 1.0 (too tight)
              </Typography>
              <Typography sx={{ lineHeight: 1.0, mt: 1, fontSize: 14 }}>
                Typography is the art and technique of arranging type to make written language legible, 
                readable, and appealing when displayed.
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ p: 2, borderRadius: 2, bgcolor: 'background.paper', border: '2px solid', borderColor: 'success.main' }}>
              <Typography variant="caption" color="success.main" gutterBottom>
                Line height: 1.5 (just right) ✓
              </Typography>
              <Typography sx={{ lineHeight: 1.5, mt: 1, fontSize: 14 }}>
                Typography is the art and technique of arranging type to make written language legible, 
                readable, and appealing when displayed.
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ p: 2, borderRadius: 2, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider' }}>
              <Typography variant="caption" color="text.secondary" gutterBottom>
                Line height: 2.2 (too loose)
              </Typography>
              <Typography sx={{ lineHeight: 2.2, mt: 1, fontSize: 14 }}>
                Typography is the art and technique of arranging type to make written language legible, 
                readable, and appealing when displayed.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Alert icon={<LineWeight />} severity="info" sx={{ mt: 3 }}>
          <Typography variant="body2">
            <strong>Quick guide:</strong><br />
            • Body text: 1.5–1.7<br />
            • Headings: 1.1–1.3<br />
            • Tight UI labels: 1.2–1.4
          </Typography>
        </Alert>
      </Paper>

      {/* LINE LENGTH */}
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
          4. Line Length: The Comfort Zone
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Lines that are too long exhaust the eye. Lines that are too short break reading rhythm. 
          The sweet spot: <strong>50–75 characters per line</strong> for body text.
        </Typography>

        <Box sx={{ mt: 2 }}>
          <Box 
            sx={{ 
              p: 2, 
              mb: 2,
              borderRadius: 2, 
              border: '1px solid',
              borderColor: 'error.main',
              bgcolor: mode === 'dark' ? 'rgba(244,67,54,0.1)' : 'rgba(244,67,54,0.05)'
            }}
          >
            <Typography variant="caption" color="error.main">Too wide (~120 characters)</Typography>
            <Typography sx={{ mt: 1, fontSize: 14 }}>
              This line of text is way too long for comfortable reading. By the time your eye gets to the end of the line, it's hard to find the beginning of the next line. This creates fatigue and frustration.
            </Typography>
          </Box>

          <Box 
            sx={{ 
              p: 2, 
              mb: 2,
              borderRadius: 2, 
              border: '2px solid',
              borderColor: 'success.main',
              bgcolor: mode === 'dark' ? 'rgba(76,175,80,0.1)' : 'rgba(76,175,80,0.05)',
              maxWidth: 600
            }}
          >
            <Typography variant="caption" color="success.main">Just right (~65 characters) ✓</Typography>
            <Typography sx={{ mt: 1, fontSize: 14 }}>
              This line length is comfortable for reading. Your eye can easily 
              track from the end of one line to the beginning of the next. This 
              is the sweet spot for body text.
            </Typography>
          </Box>

          <Box 
            sx={{ 
              p: 2, 
              borderRadius: 2, 
              border: '1px solid',
              borderColor: 'warning.main',
              bgcolor: mode === 'dark' ? 'rgba(255,152,0,0.1)' : 'rgba(255,152,0,0.05)',
              maxWidth: 200
            }}
          >
            <Typography variant="caption" color="warning.main">Too narrow (~25 characters)</Typography>
            <Typography sx={{ mt: 1, fontSize: 14 }}>
              Lines this short 
              create a choppy 
              reading experience 
              with too many 
              line breaks.
            </Typography>
          </Box>
        </Box>

        <CodeBlock 
          label="Constrain line length in CSS"
          code={`/* Ideal for reading */
.article-body {
  max-width: 65ch; /* ch = width of "0" character */
}

/* Or use pixels */
.content {
  max-width: 680px;
}`}
        />
      </Paper>

      <Divider sx={{ my: 2 }} />

      {/* FONT PAIRING */}
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
          5. Font Pairing: Less is More
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Most interfaces need <strong>one font</strong>. Seriously. You get hierarchy through size 
          and weight, not different typefaces.
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          If you do use two fonts, pair them with contrast:
        </Typography>

        <Grid container spacing={3} sx={{ mt: 1 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ p: 3, borderRadius: 2, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider' }}>
              <Typography variant="caption" color="text.secondary">Classic: Serif headlines + Sans body</Typography>
              <Typography sx={{ fontFamily: 'Georgia, serif', fontSize: 28, fontWeight: 700, mt: 2 }}>
                The Quick Brown Fox
              </Typography>
              <Typography sx={{ fontFamily: 'Inter, sans-serif', fontSize: 14, mt: 1, color: 'text.secondary' }}>
                Jumps over the lazy dog. This combination creates visual interest 
                while maintaining readability for longer content.
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ p: 3, borderRadius: 2, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider' }}>
              <Typography variant="caption" color="text.secondary">Modern: One font family, varied weights</Typography>
              <Typography sx={{ fontFamily: 'Inter, sans-serif', fontSize: 28, fontWeight: 800, mt: 2 }}>
                The Quick Brown Fox
              </Typography>
              <Typography sx={{ fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 400, mt: 1, color: 'text.secondary' }}>
                Jumps over the lazy dog. Using weight variation within a single 
                family creates clean hierarchy with guaranteed harmony.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Alert icon={<Lightbulb />} severity="warning" sx={{ mt: 3 }}>
          <Typography variant="body2">
            <strong>Avoid:</strong> Pairing two similar fonts (like two sans-serifs with subtle differences). 
            They'll look like a mistake rather than a choice.
          </Typography>
        </Alert>
      </Paper>

      {/* PRACTICAL TIPS */}
      <Paper sx={{ p: 3, bgcolor: 'success.dark', color: 'success.contrastText' }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
          Quick Reference
        </Typography>
        <Typography variant="body2" component="div">
          <ul style={{ margin: 0, paddingLeft: 20 }}>
            <li><strong>Base size:</strong> 16px minimum for body text (14px for dense UI)</li>
            <li><strong>Line height:</strong> 1.5 for body, 1.2 for headings</li>
            <li><strong>Line length:</strong> 50–75 characters (or max-width: 65ch)</li>
            <li><strong>Hierarchy:</strong> Stick to 3 levels max</li>
            <li><strong>Weight contrast:</strong> Jump at least 2 weights (400 → 700, not 400 → 500)</li>
            <li><strong>Color:</strong> Use opacity or grays for secondary text, not different hues</li>
          </ul>
        </Typography>
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Typography in MUI
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Material UI gives you typography variants out of the box. Use them consistently:
        </Typography>
        <CodeBlock 
          label="MUI Typography variants"
          code={`import { Typography } from '@mui/material'

// Headings
<Typography variant="h1">Page Title</Typography>
<Typography variant="h2">Section Header</Typography>
<Typography variant="h3">Subsection</Typography>

// Body text
<Typography variant="body1">Regular paragraph text</Typography>
<Typography variant="body2">Smaller body text</Typography>

// UI text
<Typography variant="button">BUTTON TEXT</Typography>
<Typography variant="caption">Small caption or label</Typography>
<Typography variant="overline">OVERLINE TEXT</Typography>`}
        />
      </Paper>
    </GettingStartedLayout>
  )
}
