import React, { ReactNode } from "react";
import { Container } from "@mui/material";

interface CustomContainerProps {
  children: ReactNode;
}

export const CustomContainer: React.FC<CustomContainerProps> = ({ children }) => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh"
      }}>
        {children}
    </Container>
  );
};
