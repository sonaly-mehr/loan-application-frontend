import { Box, Typography, useTheme, AppBar, Tabs, Tab } from '@mui/material';
import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import BusinessInfoForm from './BusinessInfoForm';
import LoanInfoForm from './LoanInfoForm';
import './Style.css'
import UserInfoForm from './UserInfoForm';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  
  export default function FullWidthTabs() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = (index) => {
      setValue(index);
    };
  
    return (
      <Box sx={{ bgcolor: 'background.paper', width: 1400, margin:'auto', marginTop:'34px' }}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Personal Details" {...a11yProps(0)} />
            <Tab label="Business Details" {...a11yProps(1)} />
            <Tab label="Loan Details" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
          sx={{width: 500, margin:'0 auto'}}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <UserInfoForm />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
          <BusinessInfoForm />
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <LoanInfoForm/>
          </TabPanel>
        </SwipeableViews>
      </Box>
    );
  }