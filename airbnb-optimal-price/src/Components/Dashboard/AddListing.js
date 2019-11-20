import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Fade from '@material-ui/core/Fade';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'


const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  button: {
      width:"100%",
    color: "#FF5A5F",
    border: "1px solid #FF5A5F",
    "&:hover": {
        color: "#fff",
        background:"#FF5A5F"}
  },
  textField:{
width:"100%"
  }
}));

export default function AddListing(props) {
  const classes = useStyles();

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
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          {/* <div className={classes.paper}> */}
              <Grid item xs={12} sm={3}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography variant="h4" component="h2">
                      Add Listing
                    </Typography>
                    <div>
                      <TextField
                        id="outlined-basic"
                        className={classes.textField}
                        label="Property Name"
                        margin="normal"
                        variant="outlined"
                      />
                      <TextField
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
                        label="Bed Type"
                        margin="normal"
                       
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
                      <TextField
                        id="outlined-basic"
                        className={classes.textField}
                        label="Minimum Nights"
                        margin="normal"
                        type="number"
                        variant="outlined"
                      />
                        <Button className={classes.button}> Save</Button>
                    </div>

          </CardContent>
          </Card>
          </Grid>
        </Fade>
      </Modal>
    </div>
  );
}