# Autodesk UI Toolkit

React UI component library for Autodesk products, built on [MUI (Material UI)](https://mui.com/material-ui/) and aligned with the latest MUI component set.

## Overview

This toolkit provides a consistent set of components and theme defaults for product teams. Components are thin wrappers around MUI with toolkit defaults (e.g. theme, typography, no uppercase buttons). All MUI props and types are supported.

## Installation

```bash
npm install @autodesk/ui-toolkit
```

Peer dependencies (install in your app if not already present):

- `react` (^18 or ^19)
- `react-dom` (^18 or ^19)
- `@mui/material`
- `@emotion/react`
- `@emotion/styled`

## Setup

Wrap your app with `ThemeProvider` and the toolkit theme:

```tsx
import { ThemeProvider, createToolkitTheme } from '@autodesk/ui-toolkit';

const theme = createToolkitTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* your app */}
    </ThemeProvider>
  );
}
```

## Component categories

| Category       | Components |
|----------------|------------|
| **Inputs**     | Button, TextField, Checkbox, Select (+ MenuItem, FormControl, InputLabel, FormHelperText), Switch (+ SwitchFormControlLabel), Slider, Radio (+ RadioGroup, RadioFormControlLabel) |
| **Data display** | Avatar, Badge, Chip, Typography, Divider, Tooltip, List (+ ListItem, ListItemButton, ListItemText, ListItemIcon), Table (+ TableBody, TableCell, TableContainer, TableHead, TableRow) |
| **Feedback**   | Alert, Dialog (+ DialogTitle, DialogContent, DialogContentText, DialogActions), Snackbar, LinearProgress, CircularProgress, Skeleton, Backdrop |
| **Surfaces**   | Card (+ CardHeader, CardContent, CardActions), Paper, Accordion (+ AccordionSummary, AccordionDetails) |
| **Navigation** | Tabs (+ Tab), Menu (+ MenuItem), Breadcrumbs, Link, Drawer, AppBar (+ Toolbar) |
| **Layout**     | Box, Container, Stack, Grid (Grid2) |

## Usage examples

```tsx
import {
  Button,
  TextField,
  Card,
  CardContent,
  Typography,
  Stack,
} from '@autodesk/ui-toolkit';

function Example() {
  return (
    <Card>
      <CardContent>
        <Stack spacing={2}>
          <Typography variant="h6">Sign in</Typography>
          <TextField label="Email" type="email" fullWidth />
          <Button variant="contained" fullWidth>Continue</Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
```

## Theme customization

Override or extend the toolkit theme:

```tsx
import { createToolkitTheme } from '@autodesk/ui-toolkit';

const theme = createToolkitTheme({
  palette: {
    primary: { main: '#your-brand-color' },
  },
});
```

## Building

```bash
npm install
npm run build
```

Output: `dist/` (CommonJS and ESM, plus type declarations).

## Viewing the demo

A small demo app in `demo/` lets you see the components in your browser:

```bash
# From project root: build toolkit, install demo deps, start dev server
npm start
```

Then open **http://localhost:5173** in your browser.

If the toolkit is already built, you can start only the demo:

```bash
npm run demo
```

## Sharing the project

**Share the code (repo link):**  
Initialize Git, push to GitHub (or GitLab/Bitbucket), and share the repository URL. Others can clone and run `npm install` then `npm start`. Use the included `.gitignore` so `node_modules` and `dist` are not committed.

**Share a live demo link:**  
Push the repo to GitHub, then connect it to [Vercel](https://vercel.com) (Import Project → select the repo). The root `vercel.json` is set so Vercel builds the toolkit and then the demo; you get a URL like `https://your-project.vercel.app` to share.

## References

- [MUI Component docs](https://mui.com/material-ui/getting-started/)
- [MUI theming](https://mui.com/material-ui/customization/theming/)
