import { Typography } from '@mui/material'
import GettingStartedLayout, { CodeBlock } from './_GettingStartedLayout'

export default function FirstApp() {
  return (
    <GettingStartedLayout
      title="First App"
      subtitle="Run it, change one thing, and ship a tiny win."
    >
      <CodeBlock
        label="Run"
        code={`npm run dev`}
      />

      <CodeBlock
        label="Try this tiny change"
        code={`Open: src/App.tsx
Change the headline text, save, and watch the browser update.`}
      />

      <Typography variant="body2" color="text.secondary">
        If you can run, edit, and see it update, you’re officially “in the loop.”
      </Typography>
    </GettingStartedLayout>
  )
}