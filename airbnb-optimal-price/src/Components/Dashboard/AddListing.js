import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Radio from "@material-ui/core/Radio";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  button: {
    width: "100%",
    color: "#FF5A5F",
    border: "1px solid #FF5A5F",
    "&:hover": {
      color: "#fff",
      background: "#FF5A5F"
    }
  },
  textField: {
    width: "100%"
  },
  margin: {
    margin: theme.spacing(1)
  },
  formControl: {
    margin: theme.spacing(0),
    minWidth: 120
  }
}));

export default function AddListing(props) {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const inputLabel = React.useRef(null);
  const [value, setValue] = React.useState("");

  const handleChange = event => {
    setAge(event.target.value);
  };
  const handleRadio = event => {
    setValue(event.target.value);
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={props.open}>
          {/* <div className={classes.paper}> */}

          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h4" component="h2">
                Add Listing
              </Typography>
              <div>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="outlined-basic"
                      className={classes.textField}
                      label="Property Name"
                      margin="normal"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl
                      fullWidth
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <InputLabel
                        ref={inputLabel}
                        id="demo-simple-select-label"
                      >
                        Neighborhood
                      </InputLabel>
                      <Select
                        labelId="demo-customized-select-label"
                        id="demo-simple-select"
                        value={age}
                        onChange={handleChange}
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
                </Grid>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="outlined-basic"
                      className={classes.textField}
                      label="Accomodates"
                      margin="normal"
                      type="number"
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="outlined-basic"
                      className={classes.textField}
                      label="Number of Bedrooms"
                      margin="normal"
                      type="number"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="outlined-basic"
                      className={classes.textField}
                      label="Number of Bathrooms"
                      margin="normal"
                      type="number"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl
                      fullWidth
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <InputLabel
                        ref={inputLabel}
                        id="demo-simple-select-label"
                      >
                        Room Type
                      </InputLabel>
                      <Select
                        labelId="demo-customized-select-label"
                        id="demo-simple-select"
                        value={age}
                        onChange={handleChange}
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
                </Grid>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item xs={12} sm={6}>
                    <FormControl
                      component="fieldset"
                      className={classes.formControl}
                    >
                      <FormLabel component="legend">Wife</FormLabel>
                      <RadioGroup
                        aria-label="gender"
                        name="gender1"
                        value={value}
                        onChange={handleRadio}
                      >
                        <FormControlLabel
                          value="true"
                          control={<Radio />}
                          label="Yes"
                        />
                        <FormControlLabel
                          value="false"
                          control={<Radio />}
                          label="No"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="outlined-basic"
                      className={classes.textField}
                      label="Minimum Nights"
                      margin="normal"
                      type="number"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
                
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item xs={12} sm={12}>
                    <TextField
                      id="outlined-basic"
                      className={classes.textField}
                      label="Description"
                      margin="normal"
                      variant="outlined"
                      multiline
                      rowsMax="4"
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item xs={12} sm={12}>
                    <TextField
                      id="outlined-basic"
                      className={classes.textField}
                      label="Optimal Price"
                      margin="normal"
                      variant="outlined"
                     type="number"
                    />
                  </Grid>
                </Grid>
                <Button className={classes.button}> Save</Button>
              </div>
            </CardContent>
          </Card>
          {/* </Grid> */}
        </Fade>
      </Modal>
    </div>
  );
}
