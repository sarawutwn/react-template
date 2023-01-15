import { Card, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "../../animations/wave.css";

export const HomeCard = ({ itemFour, itemThree, itemTwo, itemOne }) => {
  const shadowSetting =
    "0px 5px 73px -41px rgba(0,0,50,0.7)";
  return (
    <Grid container>
      <Grid item xs={12} sm={6} lg={3}>
        <Card
          sx={{
            height: "120px",
            borderRadius: "10px",
            boxShadow: shadowSetting,
            borderRight: "7px solid #ffd344",
            m: 2,
          }}
        >
          <div className="wave--wrapper">
            <div className="wave-animation yellow"></div>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  m: 2,
                  zIndex: 1,
                }}
              >
                <Typography variant="h6">ผู้ใช้งานทั้งหมด</Typography>
                <Typography variant="h6" sx={{ mt: 1, fontWeight: "bold" }}>
                  {`${
                    isNaN(itemOne)
                      ? "ยังไม่มีข้อมูล"
                      : itemOne
                  }`}{" "}
                  คน
                </Typography>
              </Stack>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  mr: 2,
                  mt: 2,
                  zIndex: 1,
                }}
              >
                <img
                  src="/image/home/people.png"
                  alt=""
                  style={{ width: "80px" }}
                />
              </Stack>
            </Box>
          </div>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <Card
          sx={{
            height: "120px",
            borderRadius: "10px",
            boxShadow: shadowSetting,
            borderRight: "7px solid hsl(208, 100%, 63%)",
            m: 2,
          }}
        >
          <div className="wave--wrapper">
            <div className="wave-animation blue"></div>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
              <Stack
                xs={7}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  m: 2,
                  zIndex: 1,
                }}
              >
                <Typography variant="h6">ผู้ใช้งานวันนี้</Typography>
                <Typography variant="h6" sx={{ mt: 1, fontWeight: "bold" }}>
                  {`${isNaN(itemTwo) ? "ยังไม่มีข้อมูล" : itemTwo}`} คน
                </Typography>
              </Stack>
              <Stack
                xs={5}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  mr: 2,
                  mt: 2,
                  zIndex: 1,
                }}
              >
                <img
                  src="/image/home/dialy-people.png"
                  alt=""
                  style={{ width: "80px" }}
                />
              </Stack>
            </Box>
          </div>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <Card
          sx={{
            height: "120px",
            borderRadius: "10px",
            boxShadow: shadowSetting,
            borderRight: "7px solid hsl(4, 100%, 63%)",
            m: 2,
          }}
        >
          <div className="wave--wrapper">
            <div className="wave-animation red"></div>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
              <Stack
                xs={7}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  m: 2,
                  zIndex: 1,
                }}
              >
                <Typography variant="h6">ผู้ใช้แลกสิทธิ์</Typography>
                <Typography variant="h6" sx={{ mt: 1, fontWeight: "bold" }}>
                  {`${isNaN(itemThree) ? "ยังไม่มีข้อมูล" : itemThree}`} ครั้ง
                </Typography>
              </Stack>
              <Stack
                xs={5}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  mr: 2,
                  mt: 2,
                  zIndex: 1,
                }}
              >
                <img
                  src="/image/home/redeem.png"
                  alt=""
                  style={{ width: "80px" }}
                />
              </Stack>
            </Box>
          </div>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <Card
          sx={{
            height: "120px",
            borderRadius: "10px",
            boxShadow: shadowSetting,
            borderRight: "7px solid hsl(165, 100%, 63%)",
            m: 2,
          }}
        >
          <div className="wave--wrapper">
            <div className="wave-animation mint"></div>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
              <Stack
                xs={7}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  m: 2,
                  zIndex: 1,
                }}
              >
                <Typography variant="h6">ผู้ใช้รับคะแนน</Typography>
                <Typography variant="h6" sx={{ mt: 1, fontWeight: "bold" }}>
                  {`${isNaN(itemFour) ? "ยังไม่มีข้อมูล" : itemFour}`} ครั้ง
                </Typography>
              </Stack>
              <Stack
                xs={5}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  mr: 2,
                  mt: 2,
                  zIndex: 1,
                }}
              >
                <img
                  src="/image/home/earn.png"
                  alt=""
                  style={{ width: "80px" }}
                />
              </Stack>
            </Box>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
};
