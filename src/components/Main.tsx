import { useContext } from "react";
import Image from "next/image";
import { DataContext } from "@/components/DataProvider";
import { Stack, Typography } from "@mui/material";
import { CustomContainer } from "./CustomContainer";

export const Main = () => {
  const { map, designImg} = useContext(DataContext);
  
  return (
    <CustomContainer>
      <Typography variant="h1">Location:</Typography>

      <Image
        priority={false}
        src={map}
        alt="Map"
        width={270}
        height={280}
      />

      <Stack direction="row" spacing={1} alignItems= "center" justifyContent="center" mt={4}>
        <Image
          priority={false}
          src={designImg}
          alt="designImage"
          width={34}
          height={30}
        />
        <Typography>QR code location to visit</Typography>
      </Stack>

      <Stack direction="row" spacing={1} alignItems= "center" justifyContent="center" mt={1}>
        <Image
          priority={false}
          src={designImg}
          alt="designImage"
          width={34}
          height={30}
          style={{filter: "saturate(0)"}}
        />
        <Typography>Visited QR code location</Typography>
      </Stack>
    </CustomContainer>
  )
};