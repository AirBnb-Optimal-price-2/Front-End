import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Airbnb2 from "../../images/Airbnb2.png";
import Avatar from "@material-ui/core/Avatar";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import LocationCityOutlinedIcon from "@material-ui/icons/LocationCityOutlined";
import GroupOutlinedIcon from "@material-ui/icons/GroupOutlined";
import KingBedOutlinedIcon from "@material-ui/icons/KingBedOutlined";
import NightsStayOutlinedIcon from "@material-ui/icons/NightsStayOutlined";
import LocalOfferOutlinedIcon from "@material-ui/icons/LocalOfferOutlined";
import AttachMoneyOutlinedIcon from "@material-ui/icons/AttachMoneyOutlined";
import avater from "../../images/avater.jpg"
import AddListing from "./AddListing";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    },
    backgroundColor: "#FF5A5F"
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
      color: "#FF5A5F",
      backgroundColor: "#FF5A5F"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#FF5A5F",
    color: "white"
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    color: "#FF5A5F"
    // backgroundColor: "#FF5A5F"
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    color: "#FF5A5F",
    backgroundColor: "#FF5A5F"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  iconHover: {
    color: "#FF5A5F",
    "&:hover": {
      color: "red"
    },
    alignItems: "center"
  },
  button: {
    color: "#fff",
    border: "1px solid #fff"
  },
  btn: {
    color: "#FF5A5F",
    border: "1px solid #FF5A5F",
    "&:hover": {
      color: "#fff",
      background:"#FF5A5F"}
  },
  card: {
    minWidth: 275
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 150,
    height: 150,
  },
}));

function DashBoard(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [age, setAge] = React.useState("");

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = event => {
    setAge(event.target.value);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const drawer = (
    <div>
      <Grid container justify="center" alignItems="center">
        <img className="logo" src={Airbnb2} alt="Logo" />
      </Grid>
      <Divider />
      <List>
        {/* Image */}
        <ListItemText>  <Grid container justify="center" alignItems="center">
      <Avatar alt="Remy Sharp" src={avater} className={classes.bigAvatar} />
    </Grid></ListItemText>
        <ListItemText> Adela Adeoye </ListItemText>
        <Button className={classes.button}>Edit Profile</Button>
      </List>
      <Divider />
      <List>
        <ListItemText> DashBoard </ListItemText>
        <ListItemText> My Listings </ListItemText>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={8}>
              <div className="proName">
                <Typography variant="h5">AirBnB Optimal Price</Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div className="notification">
                <NotificationsNoneOutlinedIcon
                  className={classes.iconHover}
                  style={{ fontSize: 30, color: "#fff" }}
                />
                <Button variant="outlined" className={classes.button}>
                  <span>
                    <ExitToAppOutlinedIcon
                      className={classes.iconHover}
                      style={{ fontSize: 30, color: "#fff" }}
                    />
                  </span>
                  Logout
                </Button>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container spacing={1}>
          <Grid item xs={6} sm={6}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel
                ref={inputLabel}
                id="demo-simple-select-outlined-label"
              >
                Filter
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={age}
                onChange={handleChange}
                labelWidth={labelWidth}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Button onClick={handleOpen}>
              {" "}
              <span>
                {" "}
                <AddCircleOutlineIcon
                  className={classes.iconHover}
                  style={{ fontSize: 50 }}
                />
              </span>{" "}
              Listings
            </Button>
          </Grid>
        </Grid>

        <Divider />
        <br />
        <div className="listings">
          <Grid
            container
            spacing={2}
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Grid item xs={12} sm={4}>
              <Card className={classes.card}>
                <CardContent>
                  <div className="contItem">
                    <div>
                      <LocationCityOutlinedIcon
                        style={{ fontSize: 50, color: "#FF5A5F" }}
                      />
                    </div>
                    <div className="txt">
                      <Typography variant="h4" component="h2">
                        Aso Rock
                      </Typography>
                    </div>
                  </div>
                  <div className="contItem">
                    <div>
                      <GroupOutlinedIcon
                        style={{ fontSize: 50, color: "#FF5A5F" }}
                      />
                    </div>
                    <div className="txt">
                      <Typography variant="h5" component="h2">
                        3
                      </Typography>
                    </div>
                  </div>
                  <div className="contItem">
                    <div>
                      <KingBedOutlinedIcon
                        style={{ fontSize: 50, color: "#FF5A5F" }}
                      />
                    </div>
                    <div className="txt">
                      <Typography variant="h5" component="h2">
                        5
                      </Typography>
                    </div>
                  </div>
                  <div className="contItem">
                    <div>
                      <NightsStayOutlinedIcon
                        style={{ fontSize: 50, color: "#FF5A5F" }}
                      />
                    </div>
                    <div className="txt">
                      <Typography variant="h5" component="h2">
                        1
                      </Typography>
                    </div>
                  </div>
                  <div className="contItem">
                    <div>
                      <LocalOfferOutlinedIcon
                        style={{ fontSize: 50, color: "#FF5A5F" }}
                      />
                    </div>
                    <div className="txt">
                      <Typography variant="h5" component="h2">
                        <span>
                          <AttachMoneyOutlinedIcon />
                        </span>
                        100
                      </Typography>
                    </div>
                  </div>
                </CardContent>
                <CardActions>
                  <Button className={classes.btn} size="large">Edit</Button>
                  <Button className={classes.btn} size="large">Delete</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </div>
        <AddListing handleClose={handleClose} open={open}/>
      </main>
    </div>
  );
}

// DashBoard.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   container: PropTypes.instanceOf(
//     typeof Element === "undefined" ? Object : Element
//   )
// };

export default DashBoard;
