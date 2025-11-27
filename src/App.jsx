import React, { useState } from "react";
import {
  Alignment,
  Button,
  Card,
  Elevation,
  Icon,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  NavbarDivider,
  Tabs,
  Tab,
  Tag,
  Callout,
  InputGroup,
  Switch,
} from "@blueprintjs/core";

const App = () => {
  const [activeTab, setActiveTab] = useState("lessons");
  const [query, setQuery] = useState("");
  const [dark, setDark] = useState(true);

  const rootClass = dark ? "bp5-dark app-root" : "app-root";

  return (
    <div className={rootClass}>
      {/* ---------------- NAVBAR ---------------- */}
      <Navbar>
        <NavbarGroup align={Alignment.LEFT}>
          <Icon icon="layout" style={{ marginRight: 8 }} />
          <NavbarHeading>DesignInCode.ai</NavbarHeading>
          <NavbarDivider />
          <span style={{ opacity: 0.8 }}>Blueprint.js Studio</span>
        </NavbarGroup>

        <NavbarGroup align={Alignment.RIGHT}>
          <InputGroup
            leftIcon="search"
            placeholder="Search lessons…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{ width: 260, marginRight: 8 }}
          />

          <Switch
            checked={dark}
            onChange={() => setDark(!dark)}
            innerLabel="☀️"
            innerLabelChecked="🌙"
          />
        </NavbarGroup>
      </Navbar>

      {/* ---------------- LAYOUT ---------------- */}
      <div className="app-layout">
        {/* ------------ SIDEBAR ------------ */}
        <div className="sidebar">
          <Card elevation={Elevation.ONE}>
            <h3 style={{ marginTop: 0, marginBottom: 8 }}>Start here</h3>
            <p style={{ fontSize: 13, marginBottom: 12 }}>
              Learn to design UI systems directly in code using Blueprint and React.
            </p>

            <div className="tag-list">
              <Tag minimal icon="layout">Layout</Tag>
              <Tag minimal icon="grid-view">Components</Tag>
              <Tag minimal icon="diagram-tree">Flows</Tag>
              <Tag minimal icon="applications">Dashboards</Tag>
            </div>
          </Card>

          <Card elevation={Elevation.ONE}>
            <h4 style={{ marginTop: 0 }}>Today's Focus</h4>
            <ul style={{ fontSize: 13, paddingLeft: 18 }}>
              <li>Navbar + Tabs Shell</li>
              <li>One Lesson Card</li>
              <li>Push to GitHub</li>
            </ul>
            <Button icon="play" intent="primary" fill>
              Start a 25-minute sprint
            </Button>
          </Card>
        </div>

        {/* ------------ MAIN CONTENT ------------ */}
        <div className="main">
          <Tabs
            id="dic-tabs"
            selectedTabId={activeTab}
            onChange={(id) => setActiveTab(id.toString())}
          >
            <Tab
              id="lessons"
              title="Lessons"
              panel={<LessonsPanel query={query} />}
            />
            <Tab id="playground" title="Playground" panel={<PlaygroundPanel />} />
            <Tab id="about" title="About" panel={<AboutPanel />} />
          </Tabs>
        </div>
      </div>
    </div>
  );
};

/* ---------------- PANEL: LESSONS ---------------- */
const LessonsPanel = ({ query }) => {
  const lessons = [
    {
      id: 1,
      title: "Blueprint Layout Fundamentals",
      level: "Beginner",
      duration: "18 min",
      summary:
        "Build a responsive app shell with Navbar, Tabs, and Cards. Map IA to layout.",
    },
    {
      id: 2,
      title: "Stateful UX with React",
      level: "Intermediate",
      duration: "22 min",
      summary:
        "Model loading, empty, error, and success states using Blueprint components.",
    },
  ];

  const filtered = lessons.filter((l) =>
    [l.title, l.summary].some((t) =>
      t.toLowerCase().includes(query.toLowerCase())
    )
  );

  return (
    <div className="panel">
      {filtered.map((lesson) => (
        <Card key={lesson.id} elevation={Elevation.TWO} className="lesson-card">
          <div className="lesson-header">
            <div>
              <h3 style={{ margin: 0 }}>{lesson.title}</h3>
              <div className="lesson-meta">
                <Tag minimal>{lesson.level}</Tag>
                <Tag minimal icon="time">
                  {lesson.duration}
                </Tag>
              </div>
            </div>

            <Button small icon="play">
              Start
            </Button>
          </div>

          <p style={{ fontSize: 13, marginTop: 8 }}>{lesson.summary}</p>
        </Card>
      ))}

      {filtered.length === 0 && (
        <Callout intent="warning" icon="search-around">
          No lessons match <strong>{query}</strong>.
        </Callout>
      )}
    </div>
  );
};

/* ---------------- PANEL: PLAYGROUND ---------------- */
const PlaygroundPanel = () => (
  <div className="panel">
    <Card elevation={Elevation.TWO}>
      <h3 style={{ marginTop: 0 }}>Playground</h3>
      <p style={{ fontSize: 13 }}>
        This will become an interactive code editor + preview.  
        For now, use this space to experiment with components.
      </p>

      <Callout icon="layout" title="Coming soon" intent="primary">
        The Playground will support live component editing.
      </Callout>
    </Card>
  </div>
);

/* ---------------- PANEL: ABOUT ---------------- */
const AboutPanel = () => (
  <div className="panel">
    <Card elevation={Elevation.TWO}>
      <h3 style={{ marginTop: 0 }}>About DesignInCode.ai</h3>
      <p style={{ fontSize: 13 }}>
        This is a learning environment where you build UI systems directly in code,
        with lessons, playgrounds, and pattern libraries.
      </p>

      <p style={{ fontSize: 13 }}>
        Powered by React + Blueprint.js. Designed for designers becoming engineers,
        and engineers becoming system-level designers.
      </p>
    </Card>
  </div>
);

export default App;