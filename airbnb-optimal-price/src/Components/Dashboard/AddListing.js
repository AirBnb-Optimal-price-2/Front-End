import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";



const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  }
}));

export default function AddListing(props) {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

//   const inputLabel = React.useRef(null);
//   const [labelWidth, setLabelWidth] = React.useState(0);
//   React.useEffect(() => {
//     setLabelWidth(inputLabel.current.offsetWidth);
//   }, []);
  const handleChange = event => {
    setAge(event.target.value);
  };
  return (
    <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
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
          <div className={classes.paper}>
            <form className={classes.container} noValidate autoComplete="off">
                <Typography variant="h4" component="h2">Add Listing</Typography>
              <div>
                <TextField
                  id="outlined-basic"
                  className={classes.textField}
                  label="Property Name"
                  margin="normal"
                  variant="outlined"
                /><TextField
                id="outlined-basic"
                className={classes.textField}
                label="Accomodates"
                margin="normal"
                type="number"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                className={classes.textField}
                label="Number of Bedrooms"
                margin="normal"
                type="number"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                className={classes.textField}
                label="Number of Bathrooms"
                margin="normal"
                type="number"
                variant="outlined"
              />
             <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel
                // ref={inputLabel}
                id="demo-simple-select-outlined-label"
              >
                Filter
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={age}
                onChange={handleChange}
                // labelWidth={labelWidth}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
              </div>
            
            </form>
          </div>
        </Fade>
      </Modal>
    </Grid>
    </Grid>
  );
}
