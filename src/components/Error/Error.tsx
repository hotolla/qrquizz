import Image from "next/image";
import { Typography } from "@mui/material";
import { CustomContainer } from "../CustomContainer";

export const Error = () => {
  return (
    <CustomContainer>

      <Image
        priority={false}
        src={"/images/duck_crying.png"}
        alt="designImg"
        width={200}
        height={210}
      />

      <Typography variant="h1" fontWeight="500">Ooops, somthing went wrong...</Typography>
    </CustomContainer>
  )
};