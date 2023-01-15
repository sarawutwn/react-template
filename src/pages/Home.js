import React, { useState, useEffect } from "react";
import { Button, Card, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { HomeCard } from "../components/Home/home-card";
import { HomeChartBranch } from "../components/Home/home-chart-branch";
import { HomeTable } from "../components/Home/home-table";
import { HomeChartPie } from "../components/Home/home-chart-pie";
import HomeChartArea from "../components/Home/home-chart-area";
import TransgenderIcon from "@mui/icons-material/Transgender";
import HailIcon from "@mui/icons-material/Hail";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import WhatshotIcon from '@mui/icons-material/Whatshot';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import store from "../redux/store";
import axios from "axios";
import { hostname } from "../hostname";

function Home() {
  const [profile, setProfile] = useState(JSON.parse(localStorage.getItem("USER_PROFILE")));

  return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          mt: -2.5,
          maxWidth: "1300px"
        }}
      >
        <Grid container>
          LoggedIn! {`${profile.crm_user_firstname} ${profile.crm_user_lastname} (${profile.crm_user_code})`}
        </Grid>
      </Box>
  );
}


export default Home;
