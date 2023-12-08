'use client';

import Image from "next/image";
import { useContext, useEffect } from "react";
import { useSearchParams } from 'next/navigation'
import { Stack, Typography, Box } from "@mui/material";
import { DataContext } from "@/components/DataProvider";
import { CustomContainer } from "./CustomContainer";
import { BasicPopover } from "./BasicPopover";

export const Location = () => {
  const searchParams = useSearchParams()
  const locationId = searchParams?.get('locationId') || ""
  // sessionStorage.setItem('eventId', eventId);
  const { event, fetchLocationId } = useContext(DataContext);

  useEffect(() => {
    if (locationId) fetchLocationId(locationId);
  }, [ locationId ]);

  return (
    <>
      {!!event && (
        <CustomContainer>
          <Typography variant="h1">Location visited!!!:</Typography>
          <Box style={{ position: 'relative' }}>

            {event?.pointsList?.map((point) => (
              <BasicPopover key={point[4]} left={point[1]} top={point[2]} visited={point[3]} message={point[4]} />
            ))}

            <Image
              priority={true}
              src={event?.map}
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
      )}
    </>
  )

};