import React, { useState, useEffect } from "react";
import { Grid,} from "@mui/material";
import { Box } from "@mui/system";

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
