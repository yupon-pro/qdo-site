"use client";

import React, { useState, useEffect, Fragment } from "react";
import { Box, Typography } from "@mui/material";

export default function FollowCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mouseOver, setMouseOver] = useState(false);

  function handleMouseMove(e: MouseEvent) {
    setMousePosition({ x: e.pageX, y: e.pageY });
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchstart", (e: TouchEvent) => {
      e.preventDefault();
    });
    window.addEventListener("touchend", (e: TouchEvent) => {
      e.preventDefault();
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  //
  return (
    <Box
      onMouseOver={() => setMouseOver(true)}
      onMouseOut={() => setMouseOver(false)}
      sx={{
        height: "80vh",
        width: "100%",
        backgroundImage: "url('/construction.jpeg')",
        backgroundSize: { xs: "80%", sm: "70%", md: "60%", lg: "50%" },
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Typography
        sx={{
          zIndex: 10,
          typography: { xs: "h4", sm: "h3", md: "h2" },
          position: "absolute",
          top: "50%",
          left: "5%",
          padding: 3,
          backgroundColor: "rgba(75,75,75,0.7)",
        }}
        color="whitesmoke"
      >
        Under construction
      </Typography>
      {mouseOver && (
        <Box
          sx={{
            position: "absolute",
            top: -55,
            left: -55,
            width: 150,
            height: 150,
            borderRadius: "50%",
            backgroundColor: "rgba(50,50,50,0.7)",
            // filter: mouseOver ? 'invert(1)' : "invert(0)" ,
            pointerEvents: "none",
            transitionDuration: "135ms",
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        />
      )}
    </Box>
  );
}
