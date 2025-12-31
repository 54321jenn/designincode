import { Paper, Typography, Divider } from '@mui/material'
import GettingStartedLayout, { CodeBlock } from './_GettingStartedLayout'

export default function Toolchain() {
  return (
    <GettingStartedLayout
      title="Setup React"
      subtitle="Install Node.js and create your first React application"
    >
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          What is React?
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          React is a popular JavaScript library created by Facebook for building user interfaces, especially web
          applications. Instead of writing HTML directly, you write JavaScript code that describes what the UI should
          look like. React then efficiently updates and renders the right components when your data changes.
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          React uses a component-based architecture, meaning you build your application by creating small, reusable
          pieces of UI that can be combined together. This makes it easier to build and maintain complex applications.
        </Typography>
      </Paper>

      <Divider sx={{ my: 2 }} />

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          React and Node.js
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          To build React applications, you'll need Node.js installed on your computer. Node.js is a JavaScript runtime
          that lets you run JavaScript outside of a web browser. It includes npm (Node Package Manager), which you'll
          use to install React and other tools.
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Think of it this way: Node.js provides the environment and tools you need to develop React applications, while
          React is the library you use to build the actual user interface. You'll use Node.js to install React, run
          development servers, and build your application for production.
        </Typography>
      </Paper>

      <Divider sx={{ my: 2 }} />

      <Paper sx={{ p: 2 }}>
        <Typography variant="subtitle1" gutterBottom>
          Node.js
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Install Node 18+ (or 20+) using your preferred method. Then confirm versions.
        </Typography>
      </Paper>

      <CodeBlock
        label="Verify"
        code={`node -v
npm -v`}
      />
    </GettingStartedLayout>
  )
}