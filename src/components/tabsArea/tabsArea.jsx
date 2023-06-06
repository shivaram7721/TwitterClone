import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from './tabsArea.module.css'
import { Tweets } from '../tweets/tweets';
import { TweetArea } from '../tweetArea/tweetArea';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box >
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export function TabsArea() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className={styles.mainBoxContainer} >
        <h2 className={styles.headHome}>Home</h2>
      <Box className={styles.boxContainer} sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs className={styles.tabsContainer} value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab className={styles.items} label="For you" {...a11yProps(0)} />
          {/* <h3 style={{color:"white"}}>For u</h3> */}
          <Tab className={styles.items} label="following" {...a11yProps(1)} />
          {/* <h3 style={{color:"white"}}>Following</h3> */}
          {/* <Tab className={styles.items} label="Item Three" {...a11yProps(2)} /> */}
        </Tabs>
      </Box>
      {/* <TabPanel className={styles.items} value={value} index={0}> */}
        {/* Item One */}
        <TweetArea />
        <Tweets />
      {/* </TabPanel> */}
      {/* <TabPanel className={styles.items} value={value} index={1}> */}
        {/* Item two */}
      {/* <TweetArea />
        <Tweets /> */}
      {/* </TabPanel> */}
      {/* <TabPanel value={value} index={2}>
        Item Three
      </TabPanel> */}
    </Box>
  );
}