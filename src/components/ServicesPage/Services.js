import React from 'react';
import '../../css/Services.css';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

 const productImages = [
    {
        image: 'link1',
        title: 'Classic Set',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        price: 'Full Set: $100',
        refills: 'Refills: $100',
        bookurl: '',
    },
    {
        image: 'link2',
        title: 'Volume Set',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        price: 'Full Set: $100',
        refills: 'Refills: $100',
    },    
    {
        image: 'link3',
        title: 'Mega Volume',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        price: 'Full Set: $100',
        refills: 'Refills: $100',
    },
    {
        image: 'link4',
        title: 'Mega Volume',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        price: 'Full Set: $100',
        refills: 'Refills: $100',
    },
    {
        image: 'link5',
        title: 'Mega Volume',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        price: 'Full Set: $100',
        refills: 'Refills: $100',
    },
]
/*
const displayProducts = () => {
    return (
        productImages.map((product) => (
            <div className="product-container">
                <div className="left-column-services">
                    //Product Image in Background 
                </div>
                <div className="right-column-services">
                    <p>{product.title}</p>
                    <p>{product.description}</p>
                    <p>{product.price} <br/> {product.refills}</p>
                    <div style={{marginTop: '8%'}}>
                        <a className="book-button">Book Now</a>
                    </div>
                </div>
            </div>
            
        ))
    )
}

const Services = () => {
    return (
        <div className="services-container">
            {displayProducts()}
        </div>
    )
} */

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

const StyledTabs = withStyles({
    indicator: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      '& > span': {
        maxWidth: 100,
        width: '100%',
        backgroundColor: '#B5603F',
      },
    },
    })((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);
  
  const StyledTab = withStyles((theme) => ({
    root: {
      textTransform: 'none',
      color: '#535353',
      opacity: 1,
      borderBottom: '1px solid #8c8c8c',
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      '&:focus': {
        opacity: 1,
        color: '#B5603F',
        boxShadow: 'none',
        outline: 'none',
      },
    },
  }))((props) => <Tab disableRipple {...props} />);
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    padding: {
      padding: theme.spacing(3),
    },
    demo2: {
      backgroundColor: '#fff',
    },
}));
  

const Services = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <div className="services-container">
            <div className={classes.root} style={{margin: 'auto', width: '90%'}}>
                <div className={classes.demo2} style={{margin: 'auto', width: '90%'}}>
                    <StyledTabs 
                        value={value} 
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs"
                    >
                        <StyledTab label="Classic" centered/>
                        <StyledTab label="Volume" />
                        <StyledTab label="Mega Volume" />
                        <StyledTab label="Lash Lift" />
                        <StyledTab label="Removal" />
                    </StyledTabs>
                    <TabPanel value={value} index={0}>
                        Classic Lashes!
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Item Three
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        Item Four
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        Item Five
                    </TabPanel>
                    <Typography className={classes.padding} />
                </div>
            </div>
        </div>
    )
}

export default Services