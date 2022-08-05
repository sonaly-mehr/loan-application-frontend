import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { MdSend } from "react-icons/md";
import './Style.css'

const LoanInfoForm = () => {
  const [loanAmount, setLoanAmount] = useState();
  const [interestRate, setInterestRate] = useState();
  const [loanTenure, setLoanTenure] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    const LoanData = {
        loanAmount: loanAmount,
        interestRate: interestRate,
        loanTenure: loanTenure
    }

    axios({
      method: "post",
      url: "https://blooming-thicket-69005.herokuapp.com/api/loan/details",
      data: LoanData,
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
            label="Loan Amount"
            required
            id="loanAmount"
            name="loanAmount"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            sx={{marginTop: '20px'}}
            color={"success"}
          />
          <TextField
            fullWidth
            label="Interest Rate"
            required
            id="interestRate"
            name="interestRate"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            sx={{marginTop: '20px'}}
            color={"success"}
          />
          <TextField
            fullWidth
            label="Loan Tenure"
            required
            id="loanTenure"
            name="loanTenure"
            value={loanTenure}
            onChange={(e) => setLoanTenure(e.target.value)}
            sx={{marginTop: '20px'}}
            color={"success"}
          />
          <Button sx={{marginTop: '20px', marginLeft: '35%'}} type="submit" variant="contained" endIcon={<MdSend />} color={"success"}>
            Submit
            
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default LoanInfoForm;
