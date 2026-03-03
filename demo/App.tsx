import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
  TextField,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Tabs,
  Tab,
  Chip,
  Switch,
  Slider,
  Checkbox,
  Select,
  SelectMenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
  Radio,
  RadioGroup,
  RadioFormControlLabel,
  Avatar,
  Badge,
  Divider,
  Tooltip,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Snackbar,
  LinearProgress,
  CircularProgress,
  Skeleton,
  Backdrop,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Menu,
  MenuItem,
  Breadcrumbs,
  Link,
  Drawer,
  AppBar,
  Toolbar,
  Grid,
} from '@autodesk/ui-toolkit';

function App() {
  const [tab, setTab] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [backdropOpen, setBackdropOpen] = useState(false);
  const [selectValue, setSelectValue] = useState('');
  const [radioValue, setRadioValue] = useState('a');

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'grey.100', pb: 4 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Autodesk UI Toolkit
          </Typography>
          <Button color="inherit" onClick={() => setDrawerOpen(true)}>
            Menu
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 3 }}>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Demo of all toolkit components (MUI-based). Resize the window to see responsive layout.
        </Typography>

        <Tabs value={tab} onChange={(_, v) => setTab(Number(v))} sx={{ mb: 3 }}>
          <Tab label="Inputs" />
          <Tab label="Data display" />
          <Tab label="Feedback" />
          <Tab label="Surfaces" />
          <Tab label="Navigation" />
          <Tab label="Layout" />
        </Tabs>

        {/* --- Inputs --- */}
        {tab === 0 && (
          <Stack spacing={3}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Buttons</Typography>
                <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                  <Button variant="contained">Contained</Button>
                  <Button variant="outlined">Outlined</Button>
                  <Button variant="text">Text</Button>
                </Stack>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>TextField</Typography>
                <TextField label="Text field" placeholder="Type here" fullWidth />
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Checkbox</Typography>
                <Stack direction="row" spacing={2}>
                  <Checkbox defaultChecked />
                  <Checkbox />
                  <Checkbox indeterminate />
                </Stack>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Select</Typography>
                <FormControl fullWidth>
                  <InputLabel id="select-label">Option</InputLabel>
                  <Select
                    labelId="select-label"
                    value={selectValue}
                    label="Option"
                    onChange={(e) => setSelectValue(String(e.target.value))}
                  >
                    <SelectMenuItem value="one">One</SelectMenuItem>
                    <SelectMenuItem value="two">Two</SelectMenuItem>
                    <SelectMenuItem value="three">Three</SelectMenuItem>
                  </Select>
                  <FormHelperText>Pick an option</FormHelperText>
                </FormControl>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Switch</Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Switch defaultChecked />
                  <Switch />
                  <Typography variant="body2">Toggle</Typography>
                </Stack>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Slider</Typography>
                <Slider defaultValue={50} valueLabelDisplay="auto" />
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Radio</Typography>
                <RadioGroup value={radioValue} onChange={(e) => setRadioValue(String(e.target.value))} row>
                  <RadioFormControlLabel value="a" control={<Radio />} label="Option A" />
                  <RadioFormControlLabel value="b" control={<Radio />} label="Option B" />
                  <RadioFormControlLabel value="c" control={<Radio />} label="Option C" />
                </RadioGroup>
              </CardContent>
            </Card>
          </Stack>
        )}

        {/* --- Data display --- */}
        {tab === 1 && (
          <Stack spacing={3}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Avatar</Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar>A</Avatar>
                  <Avatar sx={{ bgcolor: 'primary.main' }}>B</Avatar>
                  <Avatar src="/broken" alt="Fallback">C</Avatar>
                </Stack>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Badge</Typography>
                <Stack direction="row" spacing={3} alignItems="center">
                  <Badge badgeContent={4} color="primary">
                    <Avatar>M</Avatar>
                  </Badge>
                  <Badge badgeContent={99} color="secondary">
                    <Chip label="Notifications" />
                  </Badge>
                  <Badge variant="dot" color="error">
                    <Typography>Status</Typography>
                  </Badge>
                </Stack>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Chips</Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  <Chip label="Default" />
                  <Chip label="Primary" color="primary" />
                  <Chip label="Clickable" onClick={() => {}} />
                  <Chip label="Deletable" onDelete={() => {}} />
                </Stack>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Typography</Typography>
                <Stack spacing={0.5}>
                  <Typography variant="h5">Heading 5</Typography>
                  <Typography variant="body1">Body text</Typography>
                  <Typography variant="body2" color="text.secondary">Secondary body</Typography>
                </Stack>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Divider</Typography>
                <Box>
                  <Typography>Above</Typography>
                  <Divider sx={{ my: 1 }} />
                  <Typography>Below</Typography>
                </Box>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Tooltip</Typography>
                <Tooltip title="Tooltip text">
                  <Button variant="outlined">Hover me</Button>
                </Tooltip>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>List</Typography>
                <List>
                  <ListItem>
                    <ListItemText primary="List item" secondary="Secondary text" />
                  </ListItem>
                  <ListItemButton>
                    <ListItemIcon>{'›'}</ListItemIcon>
                    <ListItemText primary="Clickable item" />
                  </ListItemButton>
                  <ListItem>
                    <ListItemText primary="Another item" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Table</Typography>
                <TableContainer component={Paper} variant="outlined">
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Value</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>Row 1</TableCell>
                        <TableCell>100</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Row 2</TableCell>
                        <TableCell>200</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          </Stack>
        )}

        {/* --- Feedback --- */}
        {tab === 2 && (
          <Stack spacing={3}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Alert</Typography>
                <Stack spacing={1}>
                  <Alert severity="success">Success message</Alert>
                  <Alert severity="info">Info message</Alert>
                  <Alert severity="warning">Warning message</Alert>
                  <Alert severity="error">Error message</Alert>
                </Stack>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Dialog</Typography>
                <Button variant="outlined" onClick={() => setDialogOpen(true)}>Open dialog</Button>
                <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
                  <DialogTitle>Dialog title</DialogTitle>
                  <DialogContent>
                    <DialogContentText>This is the dialog content. You can put any content here.</DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
                    <Button variant="contained" onClick={() => setDialogOpen(false)}>OK</Button>
                  </DialogActions>
                </Dialog>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Snackbar</Typography>
                <Button variant="outlined" onClick={() => setSnackbarOpen(true)}>Show snackbar</Button>
                <Snackbar
                  open={snackbarOpen}
                  autoHideDuration={3000}
                  onClose={() => setSnackbarOpen(false)}
                  message="Snackbar message"
                  action={<Button size="small" onClick={() => setSnackbarOpen(false)}>Dismiss</Button>}
                />
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Progress</Typography>
                <Stack spacing={2}>
                  <Box>
                    <Typography variant="body2" gutterBottom>Linear</Typography>
                    <LinearProgress />
                    <LinearProgress variant="determinate" value={60} sx={{ mt: 1 }} />
                  </Box>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <CircularProgress size={24} />
                    <CircularProgress size={40} />
                    <CircularProgress variant="determinate" value={70} />
                  </Stack>
                </Stack>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Skeleton</Typography>
                <Stack spacing={1}>
                  <Skeleton variant="text" width="80%" />
                  <Skeleton variant="rectangular" height={60} />
                  <Skeleton variant="circular" width={40} height={40} />
                </Stack>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Backdrop</Typography>
                <Button variant="outlined" onClick={() => setBackdropOpen(true)}>Show backdrop</Button>
                <Backdrop open={backdropOpen} onClick={() => setBackdropOpen(false)}>
                  <Typography color="white">Click to close</Typography>
                </Backdrop>
              </CardContent>
            </Card>
          </Stack>
        )}

        {/* --- Surfaces --- */}
        {tab === 3 && (
          <Stack spacing={3}>
            <Card>
              <CardHeader title="Card with header" subheader="Optional subheader" />
              <CardContent>
                <Typography variant="body2">Card content goes here.</Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Action</Button>
                <Button size="small" variant="contained">Primary</Button>
              </CardActions>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Paper</Typography>
                <Paper variant="outlined" sx={{ p: 2 }}>
                  <Typography variant="body2">Paper with outlined variant.</Typography>
                </Paper>
                <Paper elevation={2} sx={{ p: 2, mt: 2 }}>
                  <Typography variant="body2">Paper with elevation.</Typography>
                </Paper>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Accordion</Typography>
                <Accordion>
                  <AccordionSummary expandIcon={<span aria-hidden>▼</span>} aria-controls="panel1-content" id="panel1-header">
                    <Typography>Accordion 1</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>Content for the first accordion panel.</Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary expandIcon={<span aria-hidden>▼</span>} aria-controls="panel2-content" id="panel2-header">
                    <Typography>Accordion 2</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>Content for the second accordion panel.</Typography>
                  </AccordionDetails>
                </Accordion>
              </CardContent>
            </Card>
          </Stack>
        )}

        {/* --- Navigation --- */}
        {tab === 4 && (
          <Stack spacing={3}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Menu</Typography>
                <Button
                  variant="outlined"
                  onClick={(e) => setMenuAnchor(e.currentTarget)}
                >
                  Open menu
                </Button>
                <Menu
                  anchorEl={menuAnchor}
                  open={Boolean(menuAnchor)}
                  onClose={() => setMenuAnchor(null)}
                >
                  <MenuItem onClick={() => setMenuAnchor(null)}>Item 1</MenuItem>
                  <MenuItem onClick={() => setMenuAnchor(null)}>Item 2</MenuItem>
                  <MenuItem onClick={() => setMenuAnchor(null)}>Item 3</MenuItem>
                </Menu>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Breadcrumbs</Typography>
                <Breadcrumbs aria-label="breadcrumb">
                  <Link href="#" underline="hover" color="inherit">Home</Link>
                  <Link href="#" underline="hover" color="inherit">Library</Link>
                  <Typography color="text.primary">Current</Typography>
                </Breadcrumbs>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Link</Typography>
                <Stack direction="row" spacing={2}>
                  <Link href="#" underline="hover">Hover underline</Link>
                  <Link href="#" underline="always">Always underline</Link>
                  <Link href="#" underline="none">No underline</Link>
                </Stack>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Drawer</Typography>
                <Button variant="outlined" onClick={() => setDrawerOpen(true)}>Open drawer</Button>
                <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                  <Box sx={{ width: 280, p: 2 }}>
                    <Typography variant="h6" gutterBottom>Drawer content</Typography>
                    <Typography variant="body2" color="text.secondary">Navigation or options go here.</Typography>
                    <Button fullWidth sx={{ mt: 2 }} onClick={() => setDrawerOpen(false)}>Close</Button>
                  </Box>
                </Drawer>
              </CardContent>
            </Card>
          </Stack>
        )}

        {/* --- Layout --- */}
        {tab === 5 && (
          <Stack spacing={3}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Box</Typography>
                <Box sx={{ p: 2, bgcolor: 'primary.light', color: 'primary.contrastText', borderRadius: 1 }}>
                  Box with custom sx styles
                </Box>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Container</Typography>
                <Typography variant="body2">This content is inside a Container (maxWidth lg). Resize to see behavior.</Typography>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Stack</Typography>
                <Stack direction="row" spacing={2}>
                  <Paper sx={{ p: 2 }}>Item 1</Paper>
                  <Paper sx={{ p: 2 }}>Item 2</Paper>
                  <Paper sx={{ p: 2 }}>Item 3</Paper>
                </Stack>
                <Stack spacing={1} sx={{ mt: 2 }}>
                  <Paper sx={{ p: 1 }}>Row 1</Paper>
                  <Paper sx={{ p: 1 }}>Row 2</Paper>
                </Stack>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Grid</Typography>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <Paper sx={{ p: 2 }}>Grid 1</Paper>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <Paper sx={{ p: 2 }}>Grid 2</Paper>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <Paper sx={{ p: 2 }}>Grid 3</Paper>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Stack>
        )}
      </Container>
    </Box>
  );
}

export default App;
