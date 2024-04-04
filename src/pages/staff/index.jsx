import { Box, Grid, Paper, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import { menus } from "../../utils/constant";

const Stuff = () => {
  const [currStuff, setCurrStuff] = useState(menus[0] || "");
  const theme = useTheme();

  return (
    <div className="flex_center_display">
      <Box
        className="main_outer_box_widget"
        sx={{
          maxWidth: "1100px",
          minWidth: "1100px",
          my: 2,
        }}
      >
        <Box>
          <Grid
            container
            spacing={3}
            sx={{
              minHeight: "500px",
              overflowY: "scroll",
            }}
          >
            <Grid item xs={12} md={3}>
              <Box
                sx={{
                  bgcolor: "#132020",
                  p: 2,
                  height: "100%",
                }}
              >
                {menus.map((item) => (
                  <Box key={item} sx={{ my: 0.5, width: "100%" }}>
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "23px",
                        p: 0.5,
                        border:
                          currStuff === item
                            ? `2px solid ${theme.palette.secondary.main}`
                            : "none",
                        cursor: "pointer",
                      }}
                      align="center"
                      onClick={() => setCurrStuff(item)}
                    >
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} md={9}>
              <Typography
                sx={{ fontSize: "34px" }}
                align="center"
                color="primary"
                fontWeight={600}
              >
                Our Staff
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default Stuff;
