import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { MdSend } from "react-icons/md";
import './Style.css'

const BusinessInfoForm = () => {
  const [businessName, setBusinessName] = useState("");
  const [GstNo, setGstNo] = useState();
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    const businessData = {
        businessName: businessName,
        GstNo: GstNo,
        address: address,
        city: city
    }

    axios({
      method: "post",
      url: "http://localhost:4000/api/business/details",
      data: businessData,
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        alert("Form Submitted Sucessfully")
        console.log(response);
      })
      .catch(function (response) {
        alert(response.data.error.message)
        console.log(response);
      });
  };

  return (
    <div>
      <form action="" onSubmit={submitForm}>
        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
          }}
        >
          <TextField
            fullWidth
            label="Business Name"
            required
            id="businessName"
            name="businessName"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            sx={{marginTop: '30px'}}
            color={"error"}
          />
          <TextField
            fullWidth
            label="Gst No"
            required
            id="GstNo"
            name="GstNo"
            value={GstNo}
            onChange={(e) => setGstNo(e.target.value)}
            sx={{marginTop: '30px'}}
            color={"error"}
          />
          <TextField
            fullWidth
            label="Address"
            required
            id="address"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            sx={{marginTop: '30px'}}
            color={"error"}
          />
          <TextField
            fullWidth
            label="City"
            id="city"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            sx={{marginTop: '30px'}}
            color={"error"}
          />
          <Button sx={{marginTop: '20px', marginLeft: '35%'}} type="submit" variant="contained" endIcon={<MdSend />} color={"error"}>
            Submit
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default BusinessInfoForm;
