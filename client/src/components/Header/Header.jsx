import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
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

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const userName = useSelector((state) => state.user?.name);
  const userPicture = useSelector((state) => state.user?.picture);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Link exact to="/clients">
            <Tab label="клиенты" {...a11yProps(0)} />
          </Link>
          <Link exact to="/orders">
            <Tab label="заказы" {...a11yProps(1)} />
          </Link>
          <Link exact to="/clients/new">
            <Tab label="добавить клиента" {...a11yProps(2)} />
          </Link>
          <Link exact to="/orders/new">
            <Tab label="создать заказ" {...a11yProps(3)} />
          </Link>
          {userName && (
            <>
              {" "}
              <span>
                Вы авторизованы как <b>{userName}</b>{" "}
              </span>
              <img src={userPicture} alt="" />
              <Link exact to="/auth/signout">
                выйти{" "}
              </Link>
            </>
          )}
        </Tabs>
      </AppBar>
    </div>
  );
}
