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
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import axios from "axios";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "auto"
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
const initialListing = {
  label: "",
  neighborhood: "",
  accomodates: "",
  bedrooms: "",
  bathrooms: "",
  room_type: "",
  wifi: false,
  tv: false,
  Laptop_friendly_workspace: false,
  family_kid_friendly: false,
  smoking_allowed: false,
  minimum_nights: "",
  extra_people: "",
  cleaning_fee: "",
  users_id: parseInt(localStorage.getItem("userID"))
};
export default function AddListing(props) {
  const classes = useStyles();
  const inputLabel = React.useRef(null);
  const [listing, setListing] = React.useState(initialListing);
  const userID = localStorage.getItem("userID");

  const handleChange = e => {
    e.persist();

    if (
      e.target.name == "accomodates" ||
      e.target.name == "bedrooms" ||
      e.target.name == "bathrooms" ||
      e.target.name == "minimum_nights" ||
      e.target.name == "extra_people" ||
      e.target.name == "cleaning_fee"
    ) {
      setListing({ ...listing, [e.target.name]: parseInt(e.target.value) });
    } else {
      setListing({ ...listing, [e.target.name]: e.target.value });
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    const sendListingBackDS = {
      ...listing,
      wifi: listing.wifi === "true" ? 1 : 0,
      tv: listing.tv === "true" ? 1 : 0,
      Laptop_friendly_workspace:
        listing.Laptop_friendly_workspace === "true" ? 1 : 0,
      family_kid_friendly: listing.family_kid_friendly === "true" ? 1 : 0,
      smoking_allowed: listing.smoking_allowed === "true" ? 1 : 0
    };
    console.log("Data Science", sendListingBackDS);
    axios
      .post(
        "https://cors-anywhere.herokuapp.com/https://pred-airbnb.herokuapp.com/json",
        sendListingBackDS
      )
      .then(res => {
        console.log("the list", listing)
        console.log("data scie endpoint", res);
        const sendListingBackend = {
          ...listing,
          wifi: listing.wifi === "true",
          tv: listing.tv === "true",
          Laptop_friendly_workspace:
            listing.Laptop_friendly_workspace === "true",
          family_kid_friendly: listing.family_kid_friendly === "true",
          smoking_allowed: listing.smoking_allowed === "true",
          optimal_price: res.data.optimal_price
        };
        console.log("data to back end", sendListingBackend);
        axiosWithAuth()
          .post(`/api/user/${userID}/listings`, listing)
          .then(res => {
            props.updateDelete();
            console.log("res from postinf", res);
          })
          .catch(err => console.log(err));
        setListing(initialListing);
      })
      .catch(error => console.log(error));
    props.handleClose();
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
              <form onSubmit={handleSubmit}>
                <div className="cardDiv">
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={1}
                  >
                    <Grid item xs={6} sm={6}>
                      <TextField
                        id="outlined-basic"
                        className={classes.textField}
                        label="Property Name"
                        margin="normal"
                        name="label"
                        value={listing.label}
                        onChange={handleChange}
                        variant="outlined"
                        required
                      />
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      <FormControl
                        fullWidth
                        variant="outlined"
                        required
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
                          name="neighborhood"
                          value={listing.neighborhood}
                          onChange={handleChange}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={1}>Mitte</MenuItem>
                          <MenuItem value={2}>
                            Friedrichshain-Kreuzberg
                          </MenuItem>
                          <MenuItem value={3}>Pankow</MenuItem>
                          <MenuItem value={4}>Neukölln</MenuItem>
                          <MenuItem value={5}>Charlottenburg-Wilm</MenuItem>
                          <MenuItem value={6}>Tempelhof - Schöneberg</MenuItem>
                          <MenuItem value={7}>Lichtenberg</MenuItem>
                          <MenuItem value={8}>Treptow - Köpenick</MenuItem>
                          <MenuItem value={9}>Steglitz - Zehlendorf</MenuItem>
                          <MenuItem value={10}>Reinickendorf</MenuItem>
                          <MenuItem value={11}>Marzahn - Hellersdorf</MenuItem>
                          <MenuItem value={12}>Spandau </MenuItem>
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
                    <Grid item xs={6} sm={6}>
                      <TextField
                        id="outlined-basic"
                        className={classes.textField}
                        label="Accomodates"
                        name="accomodates"
                        value={listing.accomodates}
                        onChange={handleChange}
                        margin="normal"
                        type="number"
                        variant="outlined"
                        required
                      />
                    </Grid>

                    <Grid item xs={6} sm={6}>
                      <TextField
                        id="outlined-basic"
                        className={classes.textField}
                        label="Number of Bedrooms"
                        margin="normal"
                        type="number"
                        variant="outlined"
                        required
                        name="bedrooms"
                        value={listing.bedrooms}
                        onChange={handleChange}
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
                    <Grid item xs={6} sm={6}>
                      <TextField
                        id="outlined-basic"
                        className={classes.textField}
                        label="Number of Bathrooms"
                        margin="normal"
                        type="number"
                        variant="outlined"
                        required
                        name="bathrooms"
                        value={listing.bathrooms}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      <FormControl
                        fullWidth
                        variant="outlined"
                        required
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
                          name="room_type"
                          value={listing.room_type}
                          onChange={handleChange}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={15}>Entire home/apt</MenuItem>
                          <MenuItem value={14}>Private room</MenuItem>
                          <MenuItem value={36}>Shared room</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    // alignItems="center"
                    spacing={1}
                  >
                    <Grid item xs={4} sm={4}>
                      <FormControl
                        component="fieldset"
                        className={classes.formControl}
                      >
                        <FormLabel component="legend">wifi</FormLabel>
                        <RadioGroup
                          name="wifi"
                          value={listing.wifi}
                          onChange={handleChange}
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
                    <Grid item xs={4} sm={4}>
                      <FormControl
                        component="fieldset"
                        className={classes.formControl}
                      >
                        <FormLabel component="legend">TV</FormLabel>
                        <RadioGroup
                          required
                          name="tv"
                          value={listing.tv}
                          onChange={handleChange}
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
                    <Grid item xs={4} sm={4}>
                      <FormControl
                        component="fieldset"
                        className={classes.formControl}
                      >
                        <FormLabel component="legend">
                          Laptop Friendly Workspace
                        </FormLabel>
                        <RadioGroup
                          required
                          name="Laptop_friendly_workspace"
                          value={listing.Laptop_friendly_workspace}
                          onChange={handleChange}
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
                    <Grid item xs={4} sm={4}>
                      <FormControl
                        component="fieldset"
                        className={classes.formControl}
                      >
                        <FormLabel component="legend">Kid Friendly</FormLabel>
                        <RadioGroup
                          required
                          name="family_kid_friendly"
                          value={listing.family_kid_friendly}
                          onChange={handleChange}
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
                    <Grid item xs={4} sm={4}>
                      <FormControl
                        component="fieldset"
                        className={classes.formControl}
                      >
                        <FormLabel component="legend">
                          Smoking Allowed
                        </FormLabel>
                        <RadioGroup
                          required
                          name="smoking_allowed"
                          value={listing.smoking_allowed}
                          onChange={handleChange}
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
                  </Grid>

                  <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                    spacing={1}
                  >
                    <Grid item xs={6} sm={4}>
                      <TextField
                        id="outlined-basic"
                        className={classes.textField}
                        label="Minimum Nights"
                        margin="normal"
                        type="number"
                        variant="outlined"
                        required
                        name="minimum_nights"
                        value={listing.minimum_nights}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={6} sm={4}>
                      <TextField
                        id="outlined-basic"
                        className={classes.textField}
                        label="Extra People ($)"
                        margin="normal"
                        type="number"
                        variant="outlined"
                        required
                        name="extra_people"
                        value={listing.extra_people}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={6} sm={4}>
                      <TextField
                        id="outlined-basic"
                        className={classes.textField}
                        label="Cleaning Fee ($)"
                        margin="normal"
                        type="number"
                        variant="outlined"
                        required
                        name="cleaning_fee"
                        value={listing.cleaning_fee}
                        onChange={handleChange}
                      />
                    </Grid>
                  </Grid>

                  <Button className={classes.button} type="submit">
                    Save
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
          {/* </Grid> */}
        </Fade>
      </Modal>
    </div>
  );
}
