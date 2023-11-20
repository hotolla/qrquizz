import { useContext } from "react";
import Image from "next/image";
import { DataContext } from "@/components/DataProvider";
import { Container, Stack, Typography } from "@mui/material";

export const Login = () => {
  const { loginMessage, descriptionMessage, loginImg, designImage } = useContext(DataContext);
  return (
    <Container sx={{ display: "flex", flexDirection:  "column", alignItems: "center", mt: 2 }}>
      <Typography variant="h1">{loginMessage}</Typography>

      <Image
        priority={false}
        src={loginImg}
        alt="loginImg"
        width={270}
        height={280}
      />

      <Typography variant="h2">Get ready for an adventure!</Typography>
      <Typography variant="subtitle1" sx={{mt: 2, mb: 2}}>{descriptionMessage}</Typography>
      <Typography variant="h2">Login and have fun!</Typography>
      <Typography variant="subtitle1" sx={{mt: 2}}>Privacy Policy</Typography>

      {/*<Stack direction="row" spacing={1} alignItems= "center" justifyContent="center" mt={4}>*/}
      {/*  <Image*/}
      {/*    priority={false}*/}
      {/*    src={designImage}*/}
      {/*    alt="designImage"*/}
      {/*    width={34}*/}
      {/*    height={30}*/}
      {/*  />*/}
      {/*  <Typography>QR code location to visit</Typography>*/}
      {/*</Stack>*/}

      {/*<Stack direction="row" spacing={1} alignItems= "center" justifyContent="center" mt={1}>*/}
      {/*  <Image*/}
      {/*    priority={false}*/}
      {/*    src={designImage}*/}
      {/*    alt="designImage"*/}
      {/*    width={34}*/}
      {/*    height={30}*/}
      {/*    style={{filter: "saturate(0)"}}*/}
      {/*  />*/}
      {/*  <Typography>Visited QR code location</Typography>*/}
      {/*</Stack>*/}
    </Container>
  )
};