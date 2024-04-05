import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { salesData } from "../../utils/constant";
const Sales = () => {
  return (
    <Grid container spacing={2}>
      {salesData.map((item, index) => (
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
              marginTop: "30px",
            }}
          >
            <Box
              sx={{
                position: "relative",
                top: "-30px",
                left: "17px",
              }}
            >
              <img
                src="https://member.my.canva.site/asylum/images/72686abf884fdd267a558d8a446fdf71.jpg"
                alt="img"
                style={{
                  width: "260px",
                  border: "8px solid #132020",
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
              <Typography align="center" sx={{ color: "white" }} fontSize={20}>
                Sales Team
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

export default Sales;
