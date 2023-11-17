import { useContext } from "react";
import Image from "next/image";
import { DataContext } from "@/components/DataProvider";
import { Container, Stack, Typography } from "@mui/material";

export const Main = () => {
  const { map, designImage} = useContext(DataContext);
  return (
    <Container sx={{ display: "flex", flexDirection:  "column", alignItems: "center" }}>
      <h2>Location:</h2>

      <Image
        priority={false}
        src={map}
        alt="Map"
        width={270}
        height={280}
      />

      <Stack direction="row" spacing={1} mt={4} >
        <Image
          priority={false}
          src={designImage}
          alt="designImage"
          width={26}
          height={22}
        />
        <Typography>QR code location to visit</Typography>
      </Stack>

      <Stack direction="row" spacing={1} mt={1}>
        <Image
          priority={false}
          src={designImage}
          alt="designImage"
          width={26}
          height={22}
        />
        <Typography>Visited QR code location</Typography>
      </Stack>
    </Container>
  )
};