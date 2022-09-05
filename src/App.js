import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Box, Tabs, Tab, Paper, Container} from "@mui/material";
import React from "react";
import TabPanel from "common/tab-panel"
import SiteHeader from "site-header"
import Introduction from "introduction"
import TechnicalSkills from "technical-skills";
import EducationQualifications from "qualifications";
import PersonalLife from "personal";
import EmploymentHistory from "employment-history";
import {ThemeProvider, createTheme} from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: [
            'Raleway',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
});

function App() {
  return (
      <ThemeProvider theme={theme}>
          <BasicTabs/>
      </ThemeProvider>
  );
}

function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <Container>
          <Paper elevation={3}>
              <SiteHeader/>
              <Box sx={{ borderBottom: 0, borderColor: 'divider' }}>
                  <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                      <Tab label="Introduction" id={`simple-tab-${0}`}/>
                      <Tab label="Technical Skills" id={`simple-tab-${1}`}/>
                      <Tab label="Employment History" id={`simple-tab-${2}`}/>
                      <Tab label="Education/Qualifications" id={`simple-tab-${3}`}/>
                      <Tab label="Personal Life" id={`simple-tab-${4}`}/>
                  </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                  <Introduction />
              </TabPanel>
              <TabPanel value={value} index={1}>
                  <TechnicalSkills />
              </TabPanel>
              <TabPanel value={value} index={2}>
                  <EmploymentHistory />
              </TabPanel>
              <TabPanel value={value} index={3}>
                  <EducationQualifications />
              </TabPanel>
              <TabPanel value={value} index={4}>
                  <PersonalLife />
              </TabPanel>
          </Paper>
      </Container>

  );
}

export default App;
