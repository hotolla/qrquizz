import { useContext } from "react";
import Image from "next/image";
import { DataContext } from "@/components/DataProvider";
import { Stack, Typography, Box } from "@mui/material";
import { CustomContainer } from "./CustomContainer";
import { BasicPopover } from "./BasicPopover";

export const Main = () => {
  const { map, pointsList, descriptionMessage, fetchEventData } = useContext(DataContext);

  return (
    <CustomContainer>
      <Typography variant="h1">Location:</Typography>
      <Box style={{ position: 'relative' }}>

        {pointsList.map((point) => (
          <BasicPopover key={point[4]} left={point[1]} top={point[2]} visited={point[3]} message={point[4]} />
        ))}

        <Image
          priority={true}
          src={map}
          alt="map"
          width={300}
          height={280}
        />
      </Box>

      <Stack direction="row" spacing={1} alignItems= "center" justifyContent="center" mt={4}>
        <Image
          priority={true}
          src={"/images/duck_blue.png"}
          alt="designImage"
          width={34}
          height={30}
        />
        <Typography>QR code location to visit</Typography>
      </Stack>

      <Stack direction="row" spacing={1} alignItems= "center" justifyContent="center" mt={1}>
        <Image
          priority={true}
          src={"/images/duck_blue.png"}
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