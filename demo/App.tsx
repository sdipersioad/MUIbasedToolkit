import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
  TextField,
  Card,
  CardContent,
  Tabs,
  Tab,
  Chip,
  Switch,
  Slider,
} from '@autodesk/ui-toolkit';

function App() {
  const [tab, setTab] = useState(0);
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'grey.100', py: 3 }}>
      <Container maxWidth="md">
        <Stack spacing={3}>
          <Typography variant="h4" color="primary">
            Autodesk UI Toolkit
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Demo of components built on MUI. Resize the window to see responsive layout.
          </Typography>

          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Buttons
              </Typography>
              <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
                <Button variant="text">Text</Button>
              </Stack>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Inputs
              </Typography>
              <Stack spacing={2}>
                <TextField label="Text field" placeholder="Type here" fullWidth />
                <Stack direction="row" spacing={2} alignItems="center">
                  <Switch defaultChecked />
                  <Typography variant="body2">Toggle</Typography>
                </Stack>
                <Typography variant="body2">Slider</Typography>
                <Slider defaultValue={50} valueLabelDisplay="auto" />
              </Stack>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Chips
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                <Chip label="Default" />
                <Chip label="Primary" color="primary" />
                <Chip label="Clickable" onClick={() => {}} />
              </Stack>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Tabs
              </Typography>
              <Tabs value={tab} onChange={(_, v) => setTab(v)}>
                <Tab label="Tab one" />
                <Tab label="Tab two" />
                <Tab label="Tab three" />
              </Tabs>
              <Box sx={{ pt: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  Selected tab: {tab + 1}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
}

export default App;
