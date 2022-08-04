import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { MdSend } from "react-icons/md";
import './Style.css'

const UserInfoForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhone] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    const userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNo: phoneNo
    }

    axios({
      method: "post",
      url: "http://localhost:4000/api/user/details",
      data: userData,
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        alert("Form Submitted Sucessfully")
        console.log(response);
      })
      .catch(function (response) {
        alert(response.error.data.message)
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
            label="First Name"
            required
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            sx={{marginTop: '20px'}}
          />
          <TextField
            fullWidth
            label="Last Name"
            required
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            sx={{marginTop: '30px'}}
          />
          <TextField
            fullWidth
            label="Email"
            required
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{marginTop: '30px'}}
          />
          <TextField
            fullWidth
            required
            label="Phone No"
            id="phoneNo"
            name="phoneNo"
            value={phoneNo}
            onChange={(e) => setPhone(e.target.value)}
            sx={{marginTop: '30px'}}
          />
          <Button sx={{marginTop: '20px', marginLeft: '35%'}} type="submit" variant="contained" endIcon={<MdSend />}>
            Submit
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default UserInfoForm;
