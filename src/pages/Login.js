import { useState } from "react";
import {
  Button,
  TextField,
  IconButton,
  Typography,
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  Stack,
} from "@mui/material/";
import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import { hostname } from "../hostname";
import Snackbar from "../utils/Snackbar";

function Login() {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    showPassword: false,
  });
  const [openSnackbar, setOpenSnackbar] = useState({
    status: false,
    type: "",
    msg: "",
  });

  const handleChange = (prop) => (event) => {
    setUserData({ ...userData, [prop]: event.target.value });
  };

  const onClickLogin = async () => {
    try {
      const { data } = await axios.post(`${hostname}/api/auth/local/sign-in`, {
        crm_user_code: userData.username,
        crm_user_password: userData.password,
      });
      if (data.status === "Authenticated") {
        localStorage.setItem("Authenticated", "Authenticated");
        localStorage.setItem("TOKEN", data.token);
        localStorage.setItem("REFRESH", data.refreshToken);
        localStorage.setItem("USER_PROFILE", JSON.stringify(data.user_profile));
        localStorage.setItem("ROLE", JSON.stringify(data.role));
        localStorage.setItem("PERMISSION", JSON.stringify(data.permission));
        localStorage.setItem("COMPONENT", JSON.stringify(data.component));
        window.location.href = "/home";
      }else {
        setOpenSnackbar({
          status: true,
          type: "error",
          msg: "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง",
        });
      }
    } catch (error) {
      if(error.response.data.message === "This user is locked!") {
        alert("ใส่รหัสผ่านผิดมากเกินไป กรุณาติดต่อเจ้าหน้าที่");
        return;
      }
      if(error.response.data.message === "UnAuthenticated") {
        alert("ไม่มีผู้ใช้นี้อยู่ในระบบ!");
        return;
      }
      if(error.response.data.message === "Password not compare!") {
        alert("รหัสผ่านไม่ถูกต้อง!");
        return;
      }
    }
  };

  const handleClickShowPassword = () => {
    setUserData({ ...userData, showPassword: !userData.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const styles = {
    paperContainer: {
      backgroundImage: `url(${"/image/home-ir.jpeg"})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  };

  return (
    <>
      <Box style={styles.paperContainer}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          }}
        >
          <Box
            sx={{
              p: 4,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              backgroundColor: "rgba(255, 255, 255, 1)",
              backdropFilter: "blur(5px)",
              borderRadius: "5px",
              boxShadow: "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;"
            }}
          >
            <Stack
              direction="column"
              spacing={3}
              alignItems="center"
              justifyContent="flex-start"
            >
              <Stack direction={{ xs: "column", md: "row" }}>
                <img
                  src="/image/ac_black.png"
                  alt=""
                  style={{ height: "10rem" }}
                />
              </Stack>
              <Stack direction={{ xs: "column" }}>
              <Typography variant="h6" sx={{ color: "#10254a", display: "flex", justifyContent: "center"}}>
                <b>ระบบจัดการคะแนนผู้ใช้งาน</b>
              </Typography>
              <Typography variant="subtitle2" sx={{ color: "#416393", display: "flex", justifyContent: "center"}}>
                บริษัท ออโตคอร์ป โฮลดิ้ง จำกัด (มหาชน)
              </Typography>
              </Stack>
              <Stack direction="column" spacing={2} my={1}>
                <TextField
                  size="small"
                  required
                  onChange={handleChange("username")}
                  sx={{ width: "30ch" }}
                  label="ชื่อผู้ใช้"
                  variant="outlined"
                />
                <FormControl
                  required
                  sx={{ width: "30ch" }}
                  variant="outlined"
                  size="small"
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    รหัสผ่าน
                  </InputLabel>
                  <OutlinedInput
                    type={userData.showPassword ? "text" : "password"}
                    value={userData.password}
                    onChange={handleChange("password")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {userData.showPassword ? (
                            <VisibilityIcon />
                          ) : (
                            <VisibilityOffIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="รหัสผ่าน"
                  />
                </FormControl>
              </Stack>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  onClickLogin()
                }}
                variant="contained"
                color="primary"
                fullWidth
                size="small"
                sx={{ boxShadow: 0, borderRadius: "3px" }}
              >
                <b>เข้าสู่ระบบ</b>
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>

      <Snackbar values={openSnackbar} setValues={setOpenSnackbar} />
    </>
  );
}

export default Login;
