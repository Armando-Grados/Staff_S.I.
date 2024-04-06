import React from "react";
import {
  billingData,
  legalData,
  marketingData,
  salesData,
} from "../../utils/constant";
import { Box, Button, Grid, Typography } from "@mui/material";

const StuffData = ({ from }) => {
  const data =
    from === "Legal"
      ? legalData
      : from === "Sales"
      ? salesData
      : from === "Marketing"
      ? marketingData
      : from === "Billing"
      ? billingData
      : [];

  return (
    <Grid container spacing={2}>
      {data &&
        data.map((item, index) => (
          <Grid
            key={index}
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                minheight: "180px",
                width: "300px",
                bgcolor: "#132020",
                marginTop: "40px",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  top: "-40px",
                  left: "20px",
                }}
              >
                <img
                  src="https://member.my.canva.site/asylum/images/72686abf884fdd267a558d8a446fdf71.jpg"
                  alt="img"
                  style={{
                    width: "260px",
                    border: "8px solid #132020",
                    height: "300px",
                    objectFit: "cover",
                  }}
                />
              </Box>
              <Box
                sx={{
                  position: "relative",
                  top: "-20px",
                }}
              >
                <Typography align="center" color="secondary" fontSize={20}>
                  {item.name}
                </Typography>
                <Typography
                  align="center"
                  sx={{ color: "white" }}
                  fontSize={20}
                >
                  {`${from} team`}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mt: 1,
                  }}
                >
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{
                      borderRadius: "20px",
                    }}
                  >
                    Read More
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
    </Grid>
  );
};

export default StuffData;
