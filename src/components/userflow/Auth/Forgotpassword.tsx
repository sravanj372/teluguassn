import { Box, Button, Dialog, DialogContent, Grid, TextField, Theme, Typography, useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Redux/Store";
import { setForgetPassword, setOtp} from "../../../Redux/UserFlow";
import { useState, useEffect } from "react";
import { showToast } from "../../../Utils/ShowToast";

const Forgotpassword = () => {

  const value = useSelector((state: RootState) => state.userFlow.forgetPassword);
  const dispatch = useDispatch<AppDispatch>();
  const display=useMediaQuery((theme:Theme)=>theme.breakpoints.down('lg'))
  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [emailError, setEmailError] = useState("");

  // Email validation function
  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  // Update error message based on email and touched state
  useEffect(() => {
    if (emailTouched) {
      setEmailError(validateEmail(email) ? "" : "Invalid email format");
    } else {
      setEmailError("");
    }
  }, [email, emailTouched]);

  // Enable send OTP only if email is valid
  const isFormValid = validateEmail(email);

  const handleSendOTP = () => {
    localStorage.setItem('email',email)

    dispatch(setOtp(true));
    dispatch(setForgetPassword(false));
    showToast(true,'OTP Sent')

    // Optionally reset form after sending OTP
    setEmail("");
    setEmailTouched(false);
    setEmailError("");
  };
const handleClose=()=>{
  dispatch(setForgetPassword(false))
}
console.log(value)
  return (
    <Dialog open={value} onClose={handleClose} disableEnforceFocus>
      <DialogContent>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              background: "white",
              padding: display?"2px":"40px",
              width: "450px",
              borderRadius: "15px",
              gap: 2,
            }}
          >
            <Typography variant="h6">Forgot Password</Typography>
            <Typography>Enter Your Registered Email Address</Typography>
            <Typography>We will send you a 4-digit OTP to verify.</Typography>

            <Grid  size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
              <Typography fontWeight="500">Email ID</Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
              <TextField
                type="email"
                size="small"
                placeholder="Your Email id"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setEmailTouched(true)}
                error={!!emailError}
                helperText={emailError}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#3DB80C",
                    },
                    "&:hover fieldset": {
                      borderColor: "#3DB80C",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#3DB80C",
                    },
                  },
                  background: "white",
                }}
              />
            </Grid>

            <Box display="flex" flexDirection="column" width="100%">
  <Button
    variant="contained"
    sx={{ background: "#3DB80C", width: display?'100%':'30%', mx: 'auto' }}
    onClick={handleSendOTP}
    disabled={!isFormValid}
  >
    Send OTP
  </Button>
</Box>
          </Grid>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default Forgotpassword;
