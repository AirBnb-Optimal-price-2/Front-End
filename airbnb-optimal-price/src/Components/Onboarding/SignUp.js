import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import clsx from "clsx";
import { Link } from "react-router-dom";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";
import { connect } from "react-redux"
import {register} from '../../redux/action'
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        AirBnB
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage:
      "url(https://images.pexels.com/photos/1268478/pexels-photo-1268478.jpeg?cs=srgb&dl=antioxidant-berries-beverage-1268478.jpg&fm=jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const SignUp = ({ values,message,props }) => {
  const classes = useStyles();
  const [valuess, setValues] = useState({
    password: ""
  });
  const submitBtn=()=>{
    setTimeout(function(){props.history.push('/dashBoard')} ,7000)
  }
 
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AssignmentIndIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            On Boarding
          </Typography>
          <Form className={classes.form} noValidate>
          

            <Field
              component={TextField}
              variant="outlined"
              margin="normal"
              fullWidth
              id="username"
              type="username"
              label="Enter Username"
              name="username"
            />

            <Field
              component={TextField}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
           
            <Typography variant="h5">{message}</Typography>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/" variant="body2">
                  {"Already have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </Form>
        </div>
      </Grid>
    </Grid>
  );
};
const FormikSignUp = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      // fullName: fullName || "",
      username: username || "",
      password: password || ""
      // confirmPassword: confirmPassword || ""
    };
  },
  
  validationSchema: Yup.object().shape({
    // fullName: Yup.string().required("You must put a Full Name"),
    username: Yup.string().required("Please enter Valid Username address"),

    password: Yup.string().required("Password is required")
    // confirmPassword: Yup.string().oneOf(
    //   [Yup.ref("password"), null],
    //   "Passwords must match"
    // )
  }),
  //You can use this to see the values
  handleSubmit(values, {resetForm, ...rest}) {
    console.log(rest)
    rest.props.register(values)
  
  }

})(SignUp);
const mapStateToProps = state => {
  console.log(state)
  return {
    loading: state.loading,
    message: state.message
  }
}
export default  connect (mapStateToProps,{register}) (FormikSignUp);
