window.process = {};
import Stepper from "@mui/material/Stepper";
import Button from "@mui/material/Button";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import TextField from "@mui/material/TextField";
import Autocomplete from "react-google-autocomplete";
import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import MenuItem from "@mui/material/MenuItem";
import useMediaQuery from "@mui/material/useMediaQuery";
import CancelIcon from '@mui/icons-material/Cancel';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
const steps = ["Pickup address", "Number of passengers", "Customer details"];
const GOOGLE_API_KEY = process.env
const TaxiCard = ({ setAlert, setAlertMessage }) => {
  const [returned, setReturned] = React.useState(false);
  const [page1, setPage1] = useState(true);
  const [page2, setPage2] = useState(false);
  const [page3, setPage3] = useState(false);
  const [pickupAddress, setPickupAddress] = useState("");
  const [dropAddress, setDropAddress] = useState("");
  const [nopassengers, setNopassengers] = useState("");
  const [specialRequirements, setSpecialRequirements] = useState("");
  const [taxi, setTaxi] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [pickupDate, setPickupDate] = React.useState();
  const [dropDate, setDropDate] = React.useState();
  const [notification, setNotification] = useState(false);
  const small = useMediaQuery("(min-width:600px)");

  return (
    <div
      style={{
        zIndex: "1000",
        backgroundColor: "White",
        borderRadius: "10px",
        position: "absolute",
        height: "auto",
        width: small?"400px":"100%",
        border: "1px solid black",
        paddingInline: "1.5rem",
        paddingBlock: "2.5rem",
        left: small?"10%":"0",
        boxSizing:"border-box"
      }}
    >
      {/* <Alert variant="outlined" severity="error">
  
      </Alert> */}
      {notification?"":
      <Stepper
        activeStep={page3 ? 2 : page2 ? 1 : page1 ? 0 : 0}
        alternativeLabel
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>}
      {page1 ? (
        <div>
          <Button
            variant="contained"
            style={{ marginRight: "1rem", marginBlock: "1.5rem" }}
            onClick={() => setReturned(false)}
          >
            Oneway
          </Button>
          <Button
            variant="contained"
            style={{ marginBlock: "1.5rem" }}
            onClick={() => setReturned(true)}
          >
            Roundtrip
          </Button>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <Autocomplete
              apiKey={GOOGLE_API_KEY}
              onPlaceSelected={(place) => {
                setPickupAddress(place);
              }}
              style={{
                height: "48px",
                fontSize: "1.1rem",
                paddingInline: "1rem",
                borderRadius: "5px",
              }}
            />
            <Autocomplete
              apiKey={GOOGLE_API_KEY}
              onPlaceSelected={(place) => {
                setDropAddress(place);
              }}
              style={{
                height: "48px",
                fontSize: "1.1rem",
                paddingInline: "1rem",
                borderRadius: "5px",
              }}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                required
                disablePast
                label="Date/Time picker"
                value={pickupDate}
                onChange={(newValue) => setPickupDate(newValue)}
              />
            </LocalizationProvider>
            {returned ? (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  required
                  disablePast
                  label="Returned Date/Time picker"
                  value={dropDate}
                  onChange={(newValue) => setDropDate(newValue)}
                />
              </LocalizationProvider>
            ) : (
              ""
            )}

            <Button
              variant="contained"
              style={{ marginTop: "0.75rem" }}
              onClick={() => {
                if (pickupAddress === "" || dropAddress === "") {
                  setAlert(true);
                  setAlertMessage(
                    "Enter the pick up and drop location properly!"
                  );
                } else {
                 
                  setPage1(false);
                  setPage2(true);
                  setPage3(false);
                }
              }}
            >
              Get Quick Quote
            </Button>
          </div>
        </div>
      ) : page2 ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem",marginTop:"0.5rem" }}>
          <TextField
            value={nopassengers}
            onChange={(event) => setNopassengers(event.target.value)}
            id="outlined-basic"
            label="Number of passengers"
            variant="outlined"
            type="number"
            required
          />
          <TextField
            id="outlined-select-currency"
            select
            label="Select type of taxi"
            value={taxi}
            onChange={(event) => setTaxi(event.target.value)}
            required
          >
            <MenuItem key={4} value="4 seater taxi">
              4 seater taxi
            </MenuItem>
            <MenuItem key={4} value="6 seater taxi">
              6 seater taxi
            </MenuItem>
            <MenuItem key={4} value="8 seater taxi">
              8 seater taxi
            </MenuItem>
          </TextField>
          <TextField
            value={specialRequirements}
            onChange={(event) => setSpecialRequirements(event.target.value)}
            id="outlined-multiline-flexible"
            label="SPECIAL REQUIREMENTS"
            multiline
            maxRows={4}
          />
          <Button
            variant="contained"
            style={{ marginTop: "0.75rem" }}
            onClick={() => {
              if (nopassengers === "") {
                setAlert(true);
                setAlertMessage("Enter number of passengers!");
              } else if (taxi === "") {
                setAlert(true);
                setAlertMessage("Select proper taxi type!");
              } else {
                setPage1(false);
                setPage2(false);
                setPage3(true);
              }
            }}
          >
            Next
          </Button>
          <Button
            variant="contained"
            style={{ marginTop: "0.75rem" }}
            onClick={() => {
              setPage1(true);
              setPage2(false);
              setPage3(false);
            }}
          >
            Back
          </Button>
        </div>
      ) : page3 ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <TextField
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Mobile Number"
            variant="outlined"
            type="number"
            required
            value={mobile}
            onChange={(event) => setMobile(event.target.value)}
          />
          <Button
            variant="contained"
            style={{ marginTop: "0.75rem" }}
            onClick={() => {
              if (name === "") {
                setAlert(true);
                setAlertMessage("Enter valid name!");
              } else if (
                !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
                  email
                )
              ) {
                setAlert(true);
                setAlertMessage("Enter valid email!");
              } else if (!/^[6-9]\d{9}$/gi.test(mobile)) {
                setAlert(true);
                setAlertMessage("Enter valid mobile!");
              } else {
                setPage1(false);
                setPage2(false);
                setPage3(false);
                setNotification(true);
              }
            }}
          >
            Submit
          </Button>
          <Button
            variant="contained"
            style={{ marginTop: "0.75rem" }}
            onClick={() => {
              setPage1(false);
              setPage2(true);
              setPage3(false);
            }}
          >
            Back
          </Button>
        </div>
      ) : notification?(
        <div style={{display:"block"}}>
          <div style={{display:"flex",justifyContent:"flex-end"}}>
          <IconButton aria-label="delete" onClick={()=>{
            setNotification(false)
            setName("")
            setEmail("")
            setMobile("")
            setDropDate("")
            setNopassengers("")
            setPickupDate("")
            setPickupAddress("")
            setDropAddress("")
            setSpecialRequirements("")
            setPage1(true)
          }}>
  <CancelIcon />
</IconButton>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img style={{ width: "100px" }} src="/success.png" />
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <h3>Name : {name}</h3>
            
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <h3>Email : {email}</h3>
            
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <h3>Mobile : {mobile}</h3>
  
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <h3>Pickup Location : {pickupAddress?.formatted_address}</h3>
    
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <h3>Drop Location : {dropAddress?.formatted_address}</h3>
          
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <h3>Number of passengers: {nopassengers}</h3>
          </div>
        </div>
      ):""}
    </div>
  );
};

export default TaxiCard;
